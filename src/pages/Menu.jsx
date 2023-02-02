import React, { useEffect } from "react";
import OnlineMenu from "../components/OnlineMenu/OnlineMenu";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OnlineMenu />
    </>
  );
}

export default Menu;
