import notificationIcon from '../assets/icons/notification.png'
import coinIcon from '../assets/twemoji_coin.png'

import {useSelector} from 'react-redux'

const TopNavBar = () => {
    const user = useSelector((state) => state.user)

    return ( 
        <div className=" inline-flex w-full justify-between items-center p-4 bg-[white] h-[100%] border-b-[1px] shadow-sm border-gray-200 left-[20%] " >
            <div>
                <h1 className=' font-semibold'>Welcome, @{user?.user?.username}</h1>
                <p>Have a good day !</p>
            </div>
            <div className='w-[60%]'>
                <form className="relative w-[100%]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className=" outline-none block p-2 pl-10 text-sm text-gray-900 border w-[100%] border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                </form>
            </div>    
            <div className=' flex items-center gap-10'>
                <img src={notificationIcon} alt="" />
                <div className=' flex items-center gap-2'>
                    <h1>{user?.user?.points}</h1>
                    <img src={coinIcon} alt="" />
                </div>
            </div>     
    


        </div>
     );
}
 
export default TopNavBar;