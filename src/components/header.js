const Header = {
    render() {
        return /* html */`
            <div class="bg-gray-800">
                <div class="flex justify-end">
                    <div>
                        <a href="/signin" class="text-white text-sm py-2 px-4">Đăng nhập</a>
                    </div>
                    <div>
                        <a href="/signup" class="text-white text-sm py-2 px-4">Đăng ký</a>
                    </div>
                </div>
            </div>
            <div class="bg-[#272f54]">
                <a href="/">
                    <img src="https://picsum.photos/150/50" alt="" class="m-auto py-3">
                </a>
            </div>
            <div class="flex bg-[#cb7802]">
                <ul class="menu flex px-8">
                    <li class="menu-item">
                        <a href="/" class="menu-item__link">Trang chủ</a>
                    </li>
                    <li class="menu-item">
                        <a href="/about" class="menu-item__link">About</a>
                    </li>
                    <li class="menu-item">
                        <a href="/news" class="menu-item__link">Tin tức</a>
                    </li>
                    <li class="menu-item">
                        <a href="/admin/dashboard" class="menu-item__link">Admin</a>
                    </li>
                </ul>
                <form action="" class="ml-auto pr-2 my-auto">
                    <input type="text" class="border border-[#cccccc] outline-none pl-4">
                    <button class="bg-[#272f54] text-[#e9e7ea] px-2 border border-[#cccccc] outline-none">Tìm kiếm</button>
                </form>
            </div>`;
    },
};

export default Header;