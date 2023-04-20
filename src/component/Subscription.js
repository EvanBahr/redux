import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper";

export default function Subscription() {
  const warna = useSelector((state) => state.warna);
  const angka = useSelector((state) => state.angka);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      ini data :{angka}
      <div className="">Subscription</div>
      <button
        onClick={() => dispatch({ type: "GANTI_WARNA", data: "bg-teal-500" })}
      >
        {" "}
        change theme to green
      </button>
    </Wrapper>
  );
}
