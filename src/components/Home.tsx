import React from "react";

type HomeProps = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};

function Home({ menu, setMenu }: HomeProps) {
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div
      className="vh-100 title"
      style={{
        backgroundColor: "rgb(57,87,61)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleClick()}
        className="header"
      >
        Home
      </h1>
    </div>
  );
}

export default Home;
