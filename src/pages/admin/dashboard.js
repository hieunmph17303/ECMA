import AsideAdmin from "../../components/admin/asideAdmin";

const DashboardPage = {
    render() {
        return /* html */`
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
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        `;
    },
};
export default DashboardPage;