import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper";

const test = [1, 2, 3, 4, 5, 6, 7];

export default function Koleksi() {
  const angka = useSelector((state) => state.angka);
  const kata = useSelector((state) => state.kata);

  console.log("kata", kata);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div>koleksi</div>
      <button
        onClick={() => dispatch({ type: "GANTI_WARNA", data: "bg-blue-500" })}
      >
        change theme to blue
      </button>
      <br />
      ini angka : {angka}
      <button
        onClick={() => dispatch({ type: "GANTI_ANGKA", data: angka + 1 })}
      >
        tambah angka
      </button>
      <br />
      {/* jangan lupa: {kata} */}
      {test}
      {/* { say: "bismillah" }, */}
      <br />
      <input
        className="bg-red-200"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({
              type: "TAMBAH_KATA",
              data: [...kata, e.target.value],
            });
            e.target.value = "";
          }
        }}
      />
      <button
        onClick={
          (e) => {
            console.log("e", e);
          }
          // dispatch({
          //   type: "TAMBAH_KATA",
          //   data: [...kata, "test"],
          // })
        }
      >
        tambah kata
      </button>
    </Wrapper>
  );
}
