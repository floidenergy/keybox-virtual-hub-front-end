import { useState } from 'react'
import { useSelector } from 'react-redux'

import { BsThreeDots } from 'react-icons/bs'

import Api from '../../utils/axios'

import vector3 from '../assets/icons/vector3.png'

import LikeButton from './LikeButton'
import ForumOwnerData from './ForumOwnerData'

import CommentContent from './CommentContent'

const PostPopUp = ({ postData, onClickOutSide, RefreshData }) => {
  const [isOption, setIsOption] = useState(false)
  const user = useSelector(state => state.user)

  const handelDeleteForum = async () => {
    Api.delete(`/client/forum/${postData._id}`).finally(() => RefreshData())
  }

  const handelCommentSubmit = async e => {
    e.preventDefault()
    setIsOption(false)
    const formData = Object.fromEntries(new FormData(e.currentTarget).entries())

    await Api.post(
      `client/forum/comment/${postData._id}`,
      { ...formData },
      { withCredentials: true }
    )
    e.target.reset()
    RefreshData()
  }

  return (
    <div className='continer w-[100vw] h-[100vh] bg-[#00000099] fixed top-0 right-0 z-10'>
      {/* background */}
      <div
        onClick={onClickOutSide}
        className='continer z-[-1] w-[100vw] h-[100vh] fixed top-0 right-0 z-10'
      ></div>
      <div className='flex fixed overflow-x-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col w-[75%] h-[75%] overflow-y-scroll gap-2 bg-gray-100 pt-4 rounded-md shadow-md'>
        {postData.owner._id === user.user.id && (
          <div className=' absolute top-3 right-3'>
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
        <span className='px-6'>
          <div className='h-[75px]'>
            <ForumOwnerData user={postData.owner} date={postData.createdAt} />
          </div>
          <div className=' flex justify-between items-center'>
            <div className=' flex gap-3'>
              {postData.tags?.map((tag, index) => (
                <span
                  key={index}
                  className=' text-sm bg-gray-300 text-gray-50 px-3 py-1 rounded-xl'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className=' flex items-center gap-4'>
              <div className=' flex items-center gap-2 text-gray-500'>
                <img src={vector3} alt='' /> {postData.comments.length}
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
          <div className=' border-b-[1px] border-gray-300 pb-4'>
            <h1 className=' text-lg capitalize font-semibold'>
              {postData.title}
            </h1>
            <p className=' text-gray-700'>{postData.content}</p>
          </div>
          <div>
            <h1 className=' text-xl font-bold'>Comments :</h1>
            <div className=' flex flex-col gap-4 pl-8'>
              {postData.comments.map(comment => (
                <CommentContent
                  key={comment._id}
                  comment={comment}
                  post={postData}
                  RefreshData={RefreshData}
                />
              ))}
            </div>
          </div>
        </span>
        <form
          className=' flex justify-center gap-[5px] bg-[#eaeef7] flex-row w-[100%] h-20 py-3 sticky bottom-0'
          onSubmit={handelCommentSubmit}
        >
          <input
            type='text'
            name='content'
            className='w-[85%] rounded-md border-[2px] p-[10px] border-gray-300 '
            placeholder='Write Your Comment'
          />
          <button className='w-[10%] text-[#fff] rounded-lg bg-[#3085C3]'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostPopUp
