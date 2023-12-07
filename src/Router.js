import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Popular } from "./pages/popular/Popular";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ShowSlide } from "./pages/sub/ShowSlide";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.popular} element={<Popular />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.slide} element={<ShowSlide />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};
export default Router;
