import React from "react";

type HamburgerProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

function Hamburger({ menuOpen, setMenuOpen }: HamburgerProps) {
  return (
    <div
      className="burger"
      style={{
        position: "fixed",
        top: "3%",
        right: "3%",
        zIndex: 5,
        width: "60px",
        height: "60px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        console.log("Burger clicked!");

        setMenuOpen(!menuOpen);
      }}
    >
      <div
        style={{
          height: "4px",
          width: "100%",
          backgroundColor: "white",
          marginBottom: "5px",
        }}
      ></div>
      <div
        style={{
          height: "4px",
          width: "100%",
          backgroundColor: "white",
          marginBottom: "5px",
        }}
      ></div>
      <div
        style={{
          height: "4px",
          width: "100%",
          backgroundColor: "white",
        }}
      ></div>
    </div>
  );
}

export default Hamburger;
