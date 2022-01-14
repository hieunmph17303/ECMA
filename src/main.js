import Navigo from "navigo";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import AdminDashboardPage from "./pages/adminDashboard";
import EditNewsPage from "./pages/editNewsPage";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};
const printAdmin = (content) => {
    document.querySelector("#wrapper").innerHTML = content;
};

router.on({
    "/": () => print(HomePage.render()),
    "/about": () => print(AboutPage.render()),
    "/news": () => print(NewsPage.render()),
    "/signup": () => print(SignUp.render()),
    "/signin": () => print(SignIn.render()),
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin": () => printAdmin(),
    "/admin/dashboard": () => printAdmin(AdminDashboardPage.render()),
    "/admin/news": () => printAdmin(AdminDashboardPage.render()),
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        printAdmin(EditNewsPage.render(id));
    },
});

router.resolve();

// router.notFound(() => {
//     console.log("not found");
//     // called when there is path specified but
//     // there is no route matching
// });