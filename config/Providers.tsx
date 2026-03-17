"use client";
 
import { SocketProvider } from "@/context/SocketContextApi";
import { persistor, store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux"; 
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }:{children: ReactNode}) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketProvider>{children}</SocketProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
