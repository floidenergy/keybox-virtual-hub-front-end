import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import Api from '../../utils/axios'

import ForumOwnerData from './forumOwnerData'
import arrowUp from '../assets/icons/arrow-up.png'

const CommentContent = ({ comment, post, RefreshData }) => {
  const user = useSelector(state => state.user)
  const [isOption, setIsOption] = useState(false)

  const handelDeleteComment = async () => {
    setIsOption(false)
    Api.delete(`/client/forum/comment/${post._id}/${comment._id}`).finally(() =>
      RefreshData()
    )
  }

  const handelLikeUnlikeComment = () =>
    Api.put(`/client/forum/comment/${comment._id}`).finally(() => RefreshData())

  return (
    <div className=' relative flex flex-col gap-2 bg-gray-100 w-full py-4 px-6 rounded-2xl shadow-md'>
      {(comment.owner._id === user.user.id ||
        post.owner._id === user.user.id) && (
        <div className=' absolute top-3 right-3'>
          <button onClick={() => setIsOption(!isOption)}>
            <BsThreeDots className=' text-[#aaa]' />
          </button>
          {isOption && (
            <ul className=' absolute right-0 rounded-md w-[10vw] bg-[white] shadow-md text-[#6b6b6b] text-sm capitalize p-1'>
              <li>
                <button
                  onClick={handelDeleteComment}
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
      <div className='h-[60px]'>
        <ForumOwnerData user={comment.owner} date={comment.createdAt} />
      </div>

      <div>
        <p className='pl-[25px]  text-gray-700'>{comment.content}</p>
      </div>
      <div className=' flex justify-between items-center'>
        <div className=' flex items-center gap-4'>
          <button
            onClick={handelLikeUnlikeComment}
            className=' flex items-center gap-2 text-gray-500'
          >
            <img src={arrowUp} alt='' /> {comment.likes.length}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentContent
