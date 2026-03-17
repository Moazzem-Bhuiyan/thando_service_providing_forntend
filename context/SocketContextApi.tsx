/* eslint-disable react-hooks/set-state-in-render */
import { selectToken } from "@/redux/features/authSlice"; 
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client"; 
import { getSocketUrl } from "@/config/envConfig";

const SocketContext = createContext({});

export const useSocket = () => {
  return useContext(SocketContext);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SocketProvider = ({ children }:{children: ReactNode}) => {
  const [socketLoading, setSocketLoading] = useState<boolean>(false);
  const token = useSelector(selectToken);

  const socket = useMemo(() => {
    
    setSocketLoading(true);

    if (token) {
      const socketStore = io(getSocketUrl(), {
        auth: {
          token,
        },
      });

      socketStore.on("connect", () => {
        // successToast("Connected to server"); // Don't remove this line - it's used for socket connection testing
        setSocketLoading(false);
      });

      return socketStore;
    }
  }, [token]);

  return (
    <SocketContext.Provider value={{ socket, socketLoading }}>
      {children}
    </SocketContext.Provider>
  );
};
