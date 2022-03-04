import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type SideMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

function Sidemenu({ menuOpen, setMenuOpen }: SideMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (
      !ref.current?.contains(e.target as HTMLElement) ||
      (e.target as HTMLElement).closest(".burger")
    ) {
      console.log(e.target);

      document.body.removeEventListener("click", handleClick, {
        capture: true,
      });
      setMenuOpen(false);

      e.stopPropagation();
    }
  };
  useEffect(() => {
    if (!menuOpen) return;

    document.body.addEventListener("click", handleClick, { capture: true });
  }, [menuOpen]);
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
        transform: `${menuOpen ? "translateX(0)" : "translateX(100%)"}`,
        transition: "all ease .5s",
      }}
    >
      <ul>
        <li>
          <Link
            onClick={() => {
              setMenuOpen(false);
              document.body.removeEventListener("click", handleClick, {
                capture: true,
              });
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenuOpen(false);
              document.body.removeEventListener("click", handleClick, {
                capture: true,
              });
            }}
            to="/page"
          >
            Two
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenu;
