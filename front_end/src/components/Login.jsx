const Login =()=>{
    return(
<div className="py-40">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover"
            style={{ backgroundImage : "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}
        >
        </div>
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">My Gara</h2>
            <p className="text-xl text-gray-600 text-center">Chúc bạn một ngày làm việc vui vẻ!</p>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
                    <a href="#" className="text-xs text-gray-500"> Quên mật khẩu?</a>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Đăng nhập</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 uppercase">Đăng ký</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>
    )
}
export default Login;