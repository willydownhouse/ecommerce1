import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type SideMenuProps = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};

function Sidemenu({ menu, setMenu }: SideMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (
      ref.current?.contains(e.target as HTMLElement) ||
      !(e.target as HTMLElement).classList.contains("title")
    )
      return;
    console.log("window clikked");
    setMenu(false);
    document.body.removeEventListener("click", handleClick, { capture: true });
  };

  useEffect(() => {
    if (!menu) return;

    document.body.addEventListener("click", handleClick, { capture: true });

    //return () => window.removeEventListener("click", handleClick);
  }, [menu]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        background: "red",
        width: "30%",
        height: "100vh",
        transform: `${menu ? "translateX(0)" : "translateX(100%)"}`,
        transition: "all ease .5s",
      }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenu;
