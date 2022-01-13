import Navigo from "navigo";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import Aboutpage from "./pages/about";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(Aboutpage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});

router.resolve();