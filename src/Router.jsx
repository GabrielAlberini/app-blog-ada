import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { DetailPost } from "./views/DetailsPost/DetailPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/post/:slug" element={<DetailPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
