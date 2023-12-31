import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Api from '../../utils/axios'
import { login } from '../../store/features/user'

import userthumb from '../assets/profile_pic.jpg'
import PostCard from '../elements/PostCard'

export const User = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [editedPic, setEditedPic] = useState(null)
  const [posts, setPosts] = useState([])
  const user = useSelector(state => state.user)

  const GetForumsData = useCallback(
    () =>
      Api.get(`/api/forum/user/${user.user.id}`).then(res =>
        setPosts(res.data)
      ),
    [user.user.id]
  )

  useEffect(() => {
    if (!user.isConnected) return navigate('/login')
    GetForumsData()
  }, [user.isConnected, GetForumsData, navigate])

  const handelPicChange = e => {
    setEditedPic(URL.createObjectURL(e.target.files[0]))
    const data = new FormData()
    data.append('thumb', e.target.files[0])
    Api.post(`/profile/thumb`, data)
      .then(result => {
        setEditedPic(null)
        dispatch(login(result.data))
      })
      .catch(err => {
        console.log(err)
        setEditedPic(null)
      })
  }

  return (
    <>
      <section className='w-full  flex gap-5'>
        <div className='bg-[#fff] flex  flex-col gap-5 rounded-md py-16 items-center  min-w-[350px]'>
          <form>
            <input
              type='file'
              name='thumb'
              id='thumb'
              className='hidden'
              onChange={handelPicChange}
            />
            <span className='relative block'>
              <img
                src={editedPic || user.user?.thumb || userthumb}
                className='w-[150px]  rounded-[50%] border-[3px] p-1 border-[#3085C3] aspect-square object-cover'
              />
              <label htmlFor='thumb'>
                <AiOutlineEdit className='absolute bottom-0 right-0 rounded-[100%] bg-white w-[35%] h-[35%] p-[5px] drop-shadow-lg' />
              </label>
            </span>
          </form>
          <div>
            <p className='font-bold capitalize text-center text-black text-[1.9rem]'>
              {user?.user?.firstname} {user?.user?.lastname}
            </p>
            <p className='capitalize text-center text-[#aaa] text-[1rem]'>
              @{user?.user?.username}
            </p>
          </div>
          <div>
            {/* title */}
            <p className='font-bold text-[1.4rem] capitalize mb-4'>
              personal information
            </p>
            <span className='flex gap-4 items-center justify-center'>
              <p className=''> {user?.user?.email} </p>
              <AiOutlineEdit />
            </span>
            <span className='flex gap-4 items-center justify-center'>
              <p> {user?.user?.mobile} </p>
              <AiOutlineEdit />
            </span>
          </div>

          <div>
            {/* title */}
            <p className='font-bold text-[1.4rem] text-center capitalize mb-4'>
              fields
            </p>
            {user.user?.field?.length > 0 ? (
              user.user?.field?.map((field, index) => (
                <p key={index}>{field.name}</p>
              ))
            ) : (
              <p className='font-semibold capitalize text-[1.2rem] text-gray-300'>
                No field specified yet
              </p>
            )}
          </div>
          {/* <div className='bg-white px-3 w-[260px] text-center text-black py-2 rounded-xl'>
          Advanced robotic student
        </div> */}
        </div>
        <div className='bg-white rounded-md flex-grow py-10 px-8 min-w-[300px]'>
          <div className='font-bold'>Teachers opinion</div>
          <div className='py-5'>
            <div className='flex gap-3 items-center'>
              <img src={userthumb} className='w-5 h-5 rounded-[40%]' />
              <div className='font-bold text-[14px]'>zakarya saoual</div>
            </div>
            <div className='text-[12px] py-2 mx-4 w-[400px]'>
              Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum
              morbi fusce
            </div>
          </div>
          <div className='py-5'>
            <div className='flex gap-3 items-center'>
              <img src={userthumb} className='w-5 h-5 rounded-[40%]' />
              <div className='font-bold text-[14px]'>tamer merad</div>
            </div>
            <div className='text-[12px] py-2 mx-4 w-[400px]'>
              Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum
              morbi fusce
            </div>
          </div>
          <div className='py-5'>
            <div className='flex gap-3 items-center'>
              <img src={userthumb} className='w-5 h-5 rounded-[40%]' />
              <div className='font-bold text-[14px]'>fadi sefih</div>
            </div>
            <div className='text-[12px] py-2 mx-4 w-[400px]'>
              Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum
              morbi fusce
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className='uppercase font-bold text-[#3085C3] text-xl bg-[#fff] my-5 rounded-md p-5 items-center  min-w-[350px]'>
          forum
        </h3>
        {posts.length > 0 ? (
          posts?.map(post => (
            <PostCard
              key={post._id}
              postData={post}
              RefreshData={GetForumsData}
            />
          ))
        ) : (
          <div className='text-center font-bold text-3xl text-gray-300 bg-gray-100 py-8 px-6 rounded-md shadow-md'>
            No Forum Posted Yet
          </div>
        )}
      </section>
    </>
  )
}
