/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { getFromSessionStorage } from "@/utils/sessionStorage";
import { getBackendBaseUrl } from "@/config/envConfig";
import { logout, setUser } from "../features/authSlice";
import { tagTypes, tagTypesList } from "../tagTypes";


interface RefreshTokenResponse {
  accessToken: string;
  // optionally: refreshToken?: string;
}

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://167.172.237.31:5000/api/v1",
  baseUrl: getBackendBaseUrl(),
  credentials: "include", 

  prepareHeaders: (headers, { getState }:any) => {
    const otpToken = getFromSessionStorage("handyhub-signUp-token");
    const forgotPassToken = getFromSessionStorage("forgotPassToken");
    const changePassToken = getFromSessionStorage("changePasswordToken");

    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    if (otpToken) {
      headers.set("token", otpToken);
    }

    if (forgotPassToken) {
      headers.set("token", forgotPassToken);
    }

    if (changePassToken) {
      headers.set("token", changePassToken);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args:any, api:any, extraOptions:any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // const res = await fetch(
    //   // `http://167.172.237.31:5000/api/v1/auth/refresh-token`,
    //   `${getBackendBaseUrl()}/auth/refresh-token`,
    //   {
    //     method: "POST",
    //     credentials: "include",
    //   },
    // );
    // const data = await res.json();

    const res = await baseQuery(
      { url: "/auth/refresh-token", method: "POST", body: {} },
      api,
      extraOptions,
    );

    if ((res?.data as RefreshTokenResponse)?.accessToken) {
      const user = api.getState().auth.user;

      api.dispatch(
        setUser({
          user,
          token: (res?.data as RefreshTokenResponse)?.accessToken,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logout());
    }
  }

  // Handle meta for pagination
  // if (result?.data?.meta) {
  //   result = {
  //     data: result?.data?.data,
  //     meta: result?.data?.meta,
  //   };
  // } else {
  //   result = {
  //     data: result?.data?.data,
  //   };
  // }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  // tagTypes: tagTypesList,
  tagTypes:Object.values(tagTypes),
  endpoints: () => ({}),
});
