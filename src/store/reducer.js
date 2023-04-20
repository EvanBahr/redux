export const initialState = {
  warna: "",
  nomor: 1,
  angka: 1,
  kata: ["bismillah", "oiiii", "WOI"],
};

// 1.TAMBAH STATE GLOBAL
// blacklist = list of non persisted state
export const blacklist = [];

export const RootReducer = (state = initialState.warna, action) => {
  switch (action.type) {
    case "GANTI_WARNA":
      return { ...state, warna: action.data };
    case "GANTI_NOMOR":
      return { ...state, nomor: action.data };
    case "TAMBAH_KATA":
      return { ...state, kata: action.data };

    default:
      return { ...state };
  }
  // 2. TAMBAH SETSTATE GLOBAL

  // if (action.type === "GANTI_WARNA") {
  //   return { ...state, warna: action.data };
  // } else {

  // }
};

// 3. MENGGUANAKAN USESELECTOR DI COMPONENT MANAPUN
// 4. MENGGUNAKAN USEDISPATCH DI COMPONENT MANAPUN
