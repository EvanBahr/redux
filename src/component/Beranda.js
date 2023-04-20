import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "./Wrapper";

export default function Beranda() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>Beranda</div>
      <button
        onClick={() => dispatch({ type: "GANTI_WARNA", data: "bg-yellow-500" })}
      >
        change theme to yellow
      </button>
    </Wrapper>
  );
}
