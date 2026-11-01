import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import MapSection from "../components/MapSection"

export default function Home(){

    return(
        <>
        <NavBar/>

        <div className="px-6 py-3">
            <SideBar/>
            <MapSection/>
        </div>
        </>
    )
}