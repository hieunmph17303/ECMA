import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */ `
        <div class="container max-w-5xl mx-auto" id="wrapper">
            ${Header.render()}
            <main>
                <h1 class="text-2xl font-bold m-4">About Page</h1>
            </main>
            ${Footer.render()}
        </div>
        `;
    },
};

export default AboutPage;