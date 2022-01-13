import data from "../data";

const NewsList = {
    render() {
        return data.map((post) => `
        <div class="p-4 border-solid border border-[#c2c2c2]">
            <a href="/news/${post.id}">
                <img src="${post.img}" alt="">
                <h3 class="text-[#ae3e00] text-lg font-bold py-2">${post.title}
                </h3>
                <p class="text-sm">${post.desc}
                </p>
            </a>
        </div>`).join("");
    },
};

export default NewsList;