import BestSeller from "./Components/BestSeller";
import Navbar from "./Components/Navbar";

function Home(){
    return(
      <div>
        <title>AFP Store</title>
        <div>
          <Navbar />
          <BestSeller />
        </div>
        
      </div>
    )
}
export default Home;