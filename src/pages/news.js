import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return /* html */ `
        <div class="container max-w-5xl mx-auto" id="wrapper">
            ${Header.render()}
            <main>    
                <h1 class="text-2xl font-bold m-4">News Page</h1>
                <div class="grid grid-cols-3 gap-4 news-list">
                ${NewsList.render()}
                </div>
            </main>
            ${Footer.render()}
        </div>
        `;
    },
};

export default NewsPage;