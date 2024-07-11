import { NavLink } from "react-router-dom";
function ResponsiveNavbar ({state,setState}) {
    return(
    <div className={`${state ? "": "translate-x-[100%]"}`+" transition-transform duration-700 block fixed top-0 right-0 z-10 w-72 px-10 h-full bg-white md:hidden"}>
        <ul className="mt-36">
            <NavLink to={"/menu"} className="no-underline text-slate-600"><li className="pb-5 font-semibold" onClick={()=>setState(false)} >MENU</li></NavLink>
            <NavLink to={"/"} className="no-underline text-slate-600"><li className="pb-5 font-semibold" onClick={()=>setState(false)}>REWARDS</li> </NavLink>
            <NavLink to={"/gift"} className={"no-underline text-slate-600"}><li className="pb-5 font-semibold" onClick={()=>setState(false)}>GIFT CARDS</li></NavLink>
        </ul>
        <hr className="bg-slate-600" />
        <div className=" flex justify-center items-center mt-5">
        <button className="border-2 mr-4 border-black bg-white text-black rounded-2xl py-1.5 px-4 font-semibold">Sign In</button>
        <button className=" bg-black text-white rounded-2xl py-1.5 px-4 font-semibold">Join Now</button>
        
        </div>
        <span className="flex items-center mt-5"><svg aria-hidden="true" class="valign-middle pr2" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg><p className="font-semibold">Find a store</p></span>
    </div>)
}
export default ResponsiveNavbar;