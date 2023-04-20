import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper";

export default function Coba() {
  const dispatch = useDispatch();
  const kata = useSelector((state) => state.kata);
  return (
    <Wrapper>
      <div>bismillah</div>
      <div>test</div>
      <br />
      jangan lupa: {kata}
      <br />
      <button
        onClick={() => dispatch({ type: "TAMBAH_KATA", data: kata + " hai " })}
      >
        tambah kata
      </button>
    </Wrapper>
  );
}
