import data from "../../data";

const TableNews = {
    render() {
        return /* html */ `
        <table class="min-w-full">
            <thead>
            <tr>
                <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                STT
                </th>
                <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                Image
                </th>
                <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                Title
                </th>
                <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                Description
                </th>
                <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                ></th>
            </tr>
            </thead>

            <tbody class="bg-white">
            ${data.map((post) => /* html */`
                <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                        >${post.id}
                    </td>
                    <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                    >
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-20 w-20">
                        <img class="h-20 w-20 rounded-full"
                            src="${post.img}"
                            alt=""
                        />
                        </div>
                    </div>
                    </td>
                    <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                    >
                    <div class="text-sm leading-5 text-gray-900">
                        ${post.title}
                    </div>
                    </td>
                    <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >
                         ${post.desc}
                    </td>
                    <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                    >
                    <a href="/admin/news/${post.id}/edit"
                        class="text-indigo-600 hover:text-indigo-900"
                        >Edit</a
                    >
                    </td>
                </tr>
            `).join("")}
            
            </tbody>
        </table>
        `;
    },
};

export default TableNews;