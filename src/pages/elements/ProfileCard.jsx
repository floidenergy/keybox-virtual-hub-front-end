import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import github from '../assets/icons/github.png'
import award from '../assets/award.png'

import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const user = useSelector(state => state.user)

  return (
    <div className=' flex flex-col items-center gap-2 bg-gray-50 py-4 px-10 rounded-xl shadow-md'>
      <img
        className='w-[100px] rounded-[100%] aspect-square object-cover p-[3px] rounded-full border-[3px] p-1 border-[#3085C3]'
        src={user?.user?.thumb}
        alt=''
      />
      <p className='font-bold text-center text-lg capitalize'>
        {user?.user?.firstname} {user?.user?.lastname}
      </p>
      <p className='capitalize text-center text-[#aaa] text-[1rem]'>
        @{user?.user?.username}
      </p>
      <div className=' flex gap-2 py-4 text-2xl font-semibold text-mainBlue items-center border-t-[1px] border-gray-400 border-b-[1px]'>
        <img src={award} alt='' /> [{user?.user?.points}]
      </div>
      <div className=' flex items-center justify-center gap-6 w-full py-4'>
        <img className=' w-[20px]' src={github} alt='' />
        <img className=' w-[20px]' src={instagram} alt='' />
        <img className=' w-[20px]' src={facebook} alt='' />
      </div>
    </div>
  )
}

export default ProfileCard
