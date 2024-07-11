import { NavLink } from "react-router-dom"
import hamburger from "../assets/hamburger.png"
import { useState } from "react"
import close from "../assets/close.png"
import ResponsiveNavbar from "./responsive-nav"
import logo from "../assets/logo.jpg"
function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClose = () => {
        
        setClicked(false);
    }
    const handleOpen  = () => {
        setClicked(true);
    }
    return (
        <header>
            <ResponsiveNavbar state={clicked} setState={setClicked} />
            <nav className="flex w-full h-24 px-10 items-center justify-between bg-white shadow-md z-40">
            <ul className="flex items-center gap-x-7">
                <img src={logo} className="h-14 w-14" alt="" />
                <div className={"hidden items-center md:flex gap-x-7"}>
                <NavLink to={"/menu"} className={({isActive})=> isActive ? " text-black underline underline-offset-[35px] decoration-8 decoration-custom-light-green" : "text-black no-underline"}><li onClick={handleClose} className={"text-lg tracking-widest font-bold "}>MENU</li></NavLink>
                <NavLink to={"/"} className={({isActive})=> isActive? "text-black underline underline-offset-[35px] decoration-8 decoration-custom-light-green" : "text-black no-underline"}><li onClick={handleClose} className={"text-lg tracking-widest font-bold"}>REWARDS</li></NavLink>
                <NavLink to={"/gift"} className={({isActive})=> isActive ? "text-black underline underline-offset-[35px] decoration-8 decoration-custom-light-green" : "text-black no-underline"}><li onClick={handleClose} className={"text-lg tracking-widest font-bold"}>GIFT CARDS</li></NavLink></div>
            </ul>
            <ul className="hidden md:flex">
                <span className="flex items-center mr-14"><svg aria-hidden="true" class="valign-middle pr2" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg><p className="font-semibold">Find a store</p></span>
                <button className="border-2 mr-4 border-black bg-white text-black rounded-2xl py-1.5 px-4 font-semibold">Sign In</button>
                <button className=" bg-black text-white rounded-2xl py-1.5 px-4 font-semibold">Join Now</button>
            </ul>
            <img src={hamburger} onClick={handleOpen} className="h-5 w-8 md:hidden" alt="" />
            <img src={close} onClick={handleClose} className={"h-3 w-3 " + `${clicked ? "block z-20":"hidden"}` }alt="" />
            
            </nav>
        </header>
    )
}
export default Navbar