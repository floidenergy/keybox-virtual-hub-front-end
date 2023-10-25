import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsThreeDots } from 'react-icons/bs'

import Api from '../../utils/axios'

import ForumOwnerData from './ForumOwnerData'
import LikeButton from './LikeButton'
import PostPopUp from './postPopUp'

import vector3 from '../assets/icons/vector3.png'

const PostCard = ({ postData, RefreshData }) => {
  const user = useSelector(state => state.user)
  const [isPopUp, setIsPopUp] = useState(false)
  const [isOption, setIsOption] = useState(false)

  const handelDeleteForum = async () => {
    setIsOption(false)
    Api.delete(`/client/forum/${postData._id}`).finally(() => RefreshData())
  }

  return (
    <div className='flex flex-col gap-2 bg-gray-100 py-4 px-6 rounded-md shadow-md'>
      {isPopUp && (
        <PostPopUp
          postData={postData}
          onClickOutSide={() => setIsPopUp(false)}
          RefreshData={RefreshData}
        />
      )}
      <div className='relative'>
        {postData.owner._id === user.user.id && (
          <div className=' absolute top-0 right-0'>
            <button onClick={() => setIsOption(!isOption)}>
              <BsThreeDots className=' text-[#aaa]' />
            </button>
            {isOption && (
              <ul className=' absolute right-0 rounded-md w-[10vw] bg-[white] shadow-md text-[#6b6b6b] text-sm capitalize p-1'>
                <li>
                  <button
                    onClick={handelDeleteForum}
                    onBlur={() => setIsOption(false)}
                    className='w-full text-left hover:bg-[#e0e0e0] px-2 py-1 rounded-sm'
                  >
                    delete
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <span onClick={() => setIsPopUp(true)}>
        <div className='h-[70px]'>
          <ForumOwnerData user={postData.owner} date={postData.createdAt} />
        </div>
        <div>
          <h1 className=' text-lg capitalize font-semibold'>
            {postData?.title}
          </h1>
          <p className=' text-gray-700'>{postData?.content}</p>
        </div>
        <div className=' flex justify-between items-center'>
          <div className=' flex gap-3'>
            {postData?.tags?.map((tag, index) => (
              <span
                key={index}
                className=' text-sm bg-gray-300 text-gray-50 px-3 py-1 rounded-xl'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </span>
      <div className=' flex items-center gap-4'>
        <div className=' flex items-center gap-2 text-gray-500'>
          <img src={vector3} alt='' /> {postData?.comments?.length}
        </div>
        <div>
          <LikeButton
            type='post'
            likes={postData.likes}
            id={postData._id}
            onFinish={RefreshData}
          />
        </div>
      </div>
    </div>
  )
}

export default PostCard
