
function Navbar(){
    return(
        <div>
            <div className="flex w-[1024px] h-[50px] bg-white shadow-md mx-auto rounded">
                <div className="w-[31%]">
                    <h1 className="text-black m-3 font-bold">AFP Store</h1>
                </div>
                <div className="w-[31%] ">
                    <div className="mx-auto">
                        <button className="w-auto p-2 bg-black rounded m-1">Mac</button>
                        <button className="w-auto p-2 bg-black rounded m-1">iPad</button>
                        <button className="w-auto p-2 bg-black rounded m-1">iPhone</button>
                    </div>
                </div>
                <div className="text-black flex m-3">
                    <img src="/user.png" className="w-7.5 h-7.5 mx-1" alt="user"/>
                    <img src="/cart.png" className="w-7.5 h-7.5 mx-1" alt="cart"/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;