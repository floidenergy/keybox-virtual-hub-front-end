import { getTimeDiff } from "../../utils/Date"
import profilePic from '../assets/profile_pic.jpg'
import {BsFillBriefcaseFill, BsPerson} from 'react-icons/bs'

export default function ForumOwnerData({user, date}) {


  return (
    <div className=' flex h-[100%] w-[100%] items-center gap-2'>
        <img
          className='h-[100%] rounded-full aspect-square object-cover border-2 p-1 border-[#3085C3]'
          src={user?.thumb || profilePic}
          alt={user?.username}
        />
        <div>
        <p className='text-base capitalize font-semibold'>
                {user?.firstname} {user?.lastname} {user.role !== 'student' ? <BsPerson className="inline"/> : <BsFillBriefcaseFill className="inline"/>} -{' '}
                <span className='text-[#595959] normal-case font-normal'>
                  @{user?.username}
                </span>
              </p>
          {date && <span className=' text-xs text-[green] text-gray-600'>{getTimeDiff(date)}</span>}
        </div>
      </div>
  )
}
