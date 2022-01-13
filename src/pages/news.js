import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return /* html */ `
        <h1>News Page</h1>
        <div class="grid grid-cols-3 gap-4 news-list">
        ${NewsList.render()}
        </div>
        `;
    },
};

export default NewsPage;