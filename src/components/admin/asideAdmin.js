const AsideAdmin = {
    render() {
        return /* html */`
        <div class="fixed z-30 inset-y-0 left-0 w-64 bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                    <span class="text-white text-2xl mx-2 font-semibold">Dashboard</span>
                </div>
            </div>

            <nav class="mt-10">
                <a class="flex items-center m-2 py-4 px-6 rounded text-black bg-gray-200 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-200"
                    href="/admin/news"><span class="mx-3">News</span>
                </a>
                <a class="flex items-center m-2 py-4 px-6 rounded text-black bg-gray-200 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-200"
                    href="/admin/users"><span class="mx-3">Users</span>
                </a>
            </nav>
        </div>
        `;
    },
};
export default AsideAdmin;