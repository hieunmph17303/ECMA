import Navigo from "navigo";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import DashboardPage from "./pages/admin/dashboard";
import EditNewsPage from "./pages/admin/news/edit";
import AdminNewsPage from "./pages/admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);

    if (content.afterRender) content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/news": () => print(NewsPage),
    "/signup": () => print(SignUp),
    "/signin": () => print(SignIn),
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    "/admin": () => print(DashboardPage),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/:id/edit": ({ data }) => print(EditNewsPage, data.id),
});

router.resolve();

// router.notFound(() => {
//     console.log("not found");
//     // called when there is path specified but
//     // there is no route matching
// });