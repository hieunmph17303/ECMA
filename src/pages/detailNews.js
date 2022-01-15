import Footer from "../components/footer";
import Header from "../components/header";
import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        <div class="container max-w-5xl mx-auto" id="wrapper">
            ${Header.render()}
            <main>  
                <h1>${result.title}</h1>
                <img src="${result.img}"/>
                <p>${result.desc}</p>
            </main>
            ${Footer.render()}
        </div>
        `;
    },
};

export default DetailNewsPage;