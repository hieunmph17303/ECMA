import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    render() {
        return /* html */ `
        <div class="container max-w-5xl mx-auto" id="wrapper">
            ${Header.render()}
            <main>
                <div class="my-2">
                    ${Banner.render()}
                </div>
                <div>
                    <h2 class="uppercase text-2xl font-bold my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-4 news-list">
                    ${NewsList.render()}
                    </div>
                </div>
                <div>
                    <h2 class="uppercase text-2xl font-bold my-4">Hoạt động sinh viên</h2>
                    <!-- news -->
                    <div class="grid grid-cols-3 gap-4 news-list">
                    ${NewsList.render()}
                    </div>
                </div>
            </main>
            ${Footer.render()}
        </div>
        `;
    },
};

export default HomePage;