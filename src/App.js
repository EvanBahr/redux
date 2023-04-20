import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./component/Beranda";
import Coba from "./component/coba";
import Koleksi from "./component/Koleksi";
import Subscription from "./component/Subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Beranda />} />
        <Route index path="subscribe" element={<Subscription />} />
        <Route index path="koleksi" element={<Koleksi />} />
        <Route index path="Test" element={<Coba />} />
      </Routes>
    </BrowserRouter>
  );
}
