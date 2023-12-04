import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Popular } from "./pages/popular/Popular";
import { Search } from "./pages/search/Search";
import { Coming } from "./pages/sub/Coming";
import { Now } from "./pages/sub/Now";
import { Pop } from "./pages/sub/Pop";
import { Rated } from "./pages/sub/Rated";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.popular} element={<Popular />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.coming} element={<Coming />} />
        <Route path={routes.now} element={<Now />} />
        <Route path={routes.pop} element={<Pop />} />
        <Route path={routes.rated} element={<Rated />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};
export default Router;
