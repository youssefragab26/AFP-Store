let BestSellerContent = [
    {id:1 , photoSRC: "/iphone16pro.png" , title: "iPhone 16 Pro"},
    {id:2 , photoSRC: "/macbookAir.png" , title: "MacBook Air M4"},
    {id:3 , photoSRC: "/macMini.png" , title: "Mac Mini M4"},
    // {id:4 , photoSRC: "/airpods.png" , title: "AirPods Pro 2"},
    // {id:4 , photoSRC: "/watch10.png" , title: "Apple Watch 10"},
    // {id:4 , photoSRC: "/ipadAir.png" , title: "iPad Air"},
    // {id:4 , photoSRC: "/macbook.png" , title: "Macbook M4 Pro"},
    // {id:4 , photoSRC: "/watchUltra.png" , title: "Apple Watch Ultra 2"},
]


function BestSeller(){
    let content = BestSellerContent.map(
        function(best){
            return (
            <div className="w-[300px] h-[400px] bg-[#fff] rounded-2xl overflow-hidden m-2.5 shadow-2xl">
                <div className="h-[300px] w-[300px]">
                    <img src={best.photoSRC} alt="iPhone16Pro" className="w-[300px] h-[300px] object-cover rounded-t-2xl"/>
                </div>
                <div className="w-[300px]">
                    <h1 className="text-black text-2xl font-bold ml-6 font-roboto mt-2">{best.title}</h1>
                    {/* <h2 className="text-black ml-5 font-roboto">From $999</h2> */}
                </div>
                <div className="mx-2 my-1 h-auto">
                    <button className="bg-black hover:bg-gray-900 text-white w-[120px] h-[40px] mr-1 ml-4 rounded-2xl font-mono cursor-pointer">Pay Naw</button>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white w-[120px] h-[40px] ml-1 mr-4 rounded-2xl font-mono cursor-pointer">More</button>
                </div>
            </div>
            )
        }
    )
    return (
        <>
           <div className=" w-[1024px] mx-auto">
               <h1 className="font-roboto m-2.5 text-4xl text-black">Best Seller</h1>
           </div>
           <div className="flex w-[1024px] mx-auto">
               {content}
           </div>
        </>
    )
}
export default BestSeller;