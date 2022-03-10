import React from "react";

type AppButtonProps = {
  color: string;
  onClick: () => void;
  btnText: string;
};
function AppButton({ color, onClick, btnText }: AppButtonProps) {
  return (
    <button className={`btn btn-outline-${color} btn-sm`} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default AppButton;
