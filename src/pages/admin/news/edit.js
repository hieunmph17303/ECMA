import AsideAdmin from "../../../components/admin/asideAdmin";
import data from "../../../data";

const EditNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        <div class="flex h-screen bg-gray-200">
            ${AsideAdmin.render()}
            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                    <div class="flex items-center">
                        <div class="relative mx-4 lg:mx-0">
                            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
                                type="text" placeholder="Search" />
                        </div>
                    </div>
                </header>
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
                        <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>

                        <div class="mt-8"></div>

                        <div class="flex flex-col mt-8">
                            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                    <form class="w-full">
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            >
                                            Tiêu đề
                                            </label>
                                            <input
                                            class="block w-full text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-indigo-500"
                                            type="text" value="${result.title}"
                                            />
                                        </div>
                                        <div class="w-full px-3">
                                            <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            >
                                            Link Ảnh
                                            </label>
                                            <input
                                            class="block w-full text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-indigo-500"
                                            type="text" value="${result.img}"
                                            />
                                        </div>
                                        </div>
                                
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            >
                                            Mô tả
                                            </label>
                                            <textarea
                                            rows="5"
                                            class="block w-full text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-indigo-500"
                                            >${result.desc}
                                            </textarea>
                                        </div>
                                        <div class="flex justify-center w-full px-3">
                                            <button data-id=${result.id}
                                            class="btn shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                            type="submit"
                                            >
                                            Cập nhật
                                            </button>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                console.log(id);
            });
        });
    },
};
export default EditNewsPage;