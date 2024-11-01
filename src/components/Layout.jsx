import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
