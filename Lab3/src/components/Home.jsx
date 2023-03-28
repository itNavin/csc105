import Navbar from "./Navbar";
import Profile from "./Profile";
import "./Home.css"
function Home(){
    return(
        <div classname = "layout">
            <Profile />
            <Navbar />
        </div>
    );
}
export default Home