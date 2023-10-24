import { NavLink, useLocation } from 'react-router-dom'
import { BsPerson, BsBarChart, BsFolder2Open } from 'react-icons/bs'
import pacmen from '../assets/icons/pacmenicon.png'
import logout from '../assets/icons/logouticon.png'
import logo from '../assets/Logo.png'
import { BiMessageDetail } from 'react-icons/bi'
const SideNavBar = () => {
  const location = useLocation()
  let isActive = path => {
    return location.pathname === path
  }
  return (
    <aside className='  bg-darkBlue min-w-[100%] px-8 py-6 h-[100%] flex flex-col justify-between text-gray-100 '>
      <img className=' w-[80px]' src={logo} alt='' />
      <ul className=' w-full flex flex-col justify-between gap-8 text-xl font-meduim'>
        <li>
          <NavLink
            to={'/index'}
            className={` flex items-center gap-4 ${
              isActive('/index') ? 'text-[#00C8FF]' : ''
            }`}
          >
            <BsPerson />
            <span>User</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/index/leader-bord'}
            className={`flex items-center gap-4 ${
              isActive('/index/leader-bord') ? 'text-[#00C8FF]' : ''
            }`}
          >
            <BsBarChart />
            <span>Leader Board</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/index/courses'}
            className={`flex items-center gap-4  ${
              isActive('/index/courses') ? 'text-[#00C8FF]' : ''
            }`}
          >
            <BsFolder2Open />
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/index/challenges'}
            className={`flex items-center gap-4  ${
              isActive('/index/challenges') ? 'text-[#00C8FF]' : ''
            }`}
          >
            <img src={pacmen} alt='' />
            <span>Challenges</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/index/forum'}
            className={`flex items-center gap-4  ${
              isActive('/index/forum') ? 'text-[#00C8FF]' : ''
            }`}
          >
            <BiMessageDetail />
            <span>Forum</span>
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink to='/logout' className=' flex items-center justify-between'>
          <span>Log out</span>
          <img src={logout} alt='' />
        </NavLink>
      </div>
    </aside>
  )
}

export default SideNavBar
