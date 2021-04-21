import React from "react";

import { MainMenu } from "components/Main/Menu/MainMenu";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainMenu />
      <div className="wrapper-main">{children}</div>
    </>
  );
};
