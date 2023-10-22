import { Outlet, useNavigate } from "react-router-dom";
import SideNavBar from "../elements/SideNavbar";
import TopNavBar from "../elements/TopNavbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user);
    
    useEffect(()=>{
        if ( !user.isConnected )
            navigate('/login')


    },[user.isConnected, navigate])
    return ( 
        <div className="w-screen h-screen grid grid-cols-5 grid-rows-8 bg-[#EAEEF7]">
            <div className="col-start-1 col-end-2 row-start-1 row-end-9">
                <SideNavBar />
            </div>
            <div className=" col-start-2 col-end-6 row-start-1 row-end-2">
                <TopNavBar />
            </div>
            <div className="box-border px-[2rem] py-[1rem] row-start-2 row-end-9 col-start-2 col-end-6 overflow-y-scroll">
                <Outlet/>
            </div>
            
        </div>
     );
}
 
export default Profile;