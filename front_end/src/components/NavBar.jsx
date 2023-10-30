import {IoIosLogOut} from "react-icons/io"
import Logo from "../assets/image/logo_gara.png"
import { Link } from "react-router-dom";
const NavBar = (props) =>{
    const listNav = [   {name : "Trang chủ", link : "/manager/home"},
                        { name : "Nhận xe",  link :  "/manager/receive_car"     },
                        { name : "Phân công sửa chữa", link: "/manager/assign_technicalstaff"},
                        { name : "Quản lý", link: ""},
                        {name : "Thống kê", link: ""},
                        {name: "Tính lương", link: ""}]
    return (
        <nav className="fixed h-auto w-[100%] block items-center bg-white drop-shadow-2xl rounded-lg z-10 font-sora" >
            <div className="w-full h-14 inline-block" >
            <div className="inline-block justify-center items-center "> 
            <Link to="/manager/home" className="h-[56px]">
            <img src={Logo} className="ml-6 cursor-pointer inline-block items-center h-[56px] w-auto" alt="Logo" />
                <div className="ml-2 text-20 font-bold text-rose-950 inline-block ">
                    My Gara
                </div>
            </Link>
            </div>
            <Link className="absolute inline-block  right-0 m-4" to="/">
                    <IoIosLogOut className="h-[40px] w-auto pb-4 mr-6 cursor-pointer"/>        
            </Link>
            </div>
            <div className="inline-block w-full bg-[#1D1B16]">
            <ul className="pl-5 text-[#FFF]">
                {/* {openMenu ? ( 
                    <AiOutlineClose size={"24px"} color="rgb(30,58,135)" className="cursor-pointer ml-4" onClick={handleMenu}/>                    
                ):(
                    <GiHamburgerMenu size={"24px"} color="rgb(30,58,135)" className="cursor-pointer ml-4" onClick={handleMenu}/>

                )} */}
                {listNav.map((list) =>
                    <Link key={list.name}  to={list.link}>
                    <div className={`cursor-pointer inline-block p-4 font-arial h-full hover:bg-[#4B3A27] rounded-md active:bg-[#7F2F2E] ${list.link===props.location && 'bg-[#4B3A27]'}`}>
                        <li className="inline-block" >{list.name}</li>
                    </div>
                    </Link>
                )}
            </ul>
            </div>
        </nav>
    )
}
export default NavBar;