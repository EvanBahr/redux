import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Wrapper({ children }) {
  const warna = useSelector((state) => state.warna);
  const nomor = useSelector((state) => state.nomor);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const menusBar = [
    { name: "BERANDA", path: "/" },
    { name: "SUBSCRIPTION", path: "/subscribe" },
    { name: "KOLEKSI", path: "/koleksi" },
    { name: "TEST", path: "/Test" },
  ];

  return (
    <div className={warna}>
      <div className="flex gap-5">
        {/* <Link className={pathname === "/" ? "bg-red-500" : ""} to="/">
          BERANDA
        </Link>
        <Link
          className={pathname === "/subscribe" ? "bg-red-500" : ""}
          to="/subscribe"
        >
          Subscription
        </Link>
        <Link
          className={pathname === "/koleksi" ? "bg-red-500" : ""}
          to="/koleksi"
        >
          koleksi
        </Link> */}
        {menusBar.map((v) => (
          <Link className={pathname === v.path ? "bg-red-500" : ""} to={v.path}>
            {v.name}
          </Link>
        ))}
      </div>

      <div className="mt-5" />
      {children}
      <div>{nomor}</div>
      <button
        onClick={() => dispatch({ type: "GANTI_NOMOR", data: nomor + 1 })}
      >
        ganti nomor
      </button>
      <br />
      <div>
        {state.kata.map((v, i) => (
          <div> {v.say} </div>
        ))}
      </div>
    </div>
  );
}
