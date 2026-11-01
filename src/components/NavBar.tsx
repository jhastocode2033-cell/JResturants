import {Search} from "lucide-react"

export default function NavBar(){

    return(
        <>
        <section className="flex items-center bg-[#3e50b5] text-white px-6 py-2">
            <p className="me-auto font-semibold">Joel Travels</p>
            <div className="flex items-center gap-3">
                <p>Explore New Places</p>
                <div className="flex items-center bg-[#546ae7] px-3 py-0.5 gap-2">
                    <Search size={13}/>
                    <input 
                    placeholder="Lagos..."
                    className="outline-none"/>
                </div>
            </div>
        </section>
        </>
    )
}