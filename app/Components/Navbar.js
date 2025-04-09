"use client";
function Navbar(){
    function handelClick(){
        alert("Done")
    }
    return(
        <div>
            <div className="flex w-[1024px] h-[50px] bg-white shadow-md mx-auto my-2.5 rounded-2xl">
                <div className="w-[341.3px] h-7.5 my-2.5">
                    <h1 className="text-black font-bold ml-10">AFP Store</h1>
                </div>
                <div className="w-[341.3px] my-2.5">
                    <div className="mx-auto">
                        <input type="text" className="bg-[#d6d6d6] text-black rounded-2xl w-80 h-7.5 outline-none pl-3" placeholder="Search"/>
                    </div>
                </div>
                <div className="w-[341.3px] h-7.5 text-black flex my-2.5">
                    <div className="mx-[136.65px] flex">
                        <button className="cursor-pointer" onClick={handelClick}><img src="/user.png" className="w-7.5 h-7.5 mx-1" alt="user"/></button>
                        <button className="cursor-pointer" onClick={handelClick}><img src="/cart.png" className="w-7.5 h-7.5 mx-1" alt="cart"/></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar;