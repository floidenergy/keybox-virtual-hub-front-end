import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../utils/axios'

import vector4 from '../../assets/icons/vector4.png'
import vector2 from '../../assets/icons/vector2.png'
import arrowUpRight from '../../assets/icons/arrow-up-right.png'

import PostCard from '../../elements/PostCard'
import ProfileCard from '../../elements/ProfileCard'

const Forum = () => {
  const [posts, setPosts] = useState()

  const GetPosts = () => {
    api
      .get(`/api/forum`)
      .then(r => {
        setPosts(r.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    GetPosts()
    // setPosts([
    //   {
    //     _id: '46f40168-ce51-59d3-8c73-5d59de49559c',
    //     title: '',
    //     owner: {
    //       _id: '1dab53dd-ab32-5588-80be-48071910ae8f',
    //       username: 'Bessie Mathis',
    //       thumb: '',
    //       email: 'zaeczu@wirwosguj.uz',
    //       mobile: '',
    //       hash: '',
    //       salt: '',
    //       pending: '',
    //       accountType: '',
    //       role: '',
    //       field: ''
    //     },
    //     content: '',
    //     likes: ['', '', ''],
    //     comments: [
    //       {
    //         _id: '3749a4be-36fb-5f88-b1d6-989aab541e6e',
    //         owner: {
    //           _id: '52e9b376-7609-5f74-a489-2c147c7e872d',
    //           username: 'Christina Fowler',
    //           thumb: '',
    //           email: 'ilvanmu@ot.dk',
    //           mobile: '',
    //           hash: '',
    //           salt: '',
    //           pending: '',
    //           accountType: '',
    //           role: '',
    //           field: ''
    //         },
    //         content: '',
    //         likes: ''
    //       }
    //     ],
    //     createdAt: '',
    //     updatedAt: ''
    //   },
    //   {
    //     _id: '5c14908d-18ef-5e79-926d-e89c92dcfef0',
    //     title: '',
    //     owner: {
    //       _id: '3d6820ad-6853-5cdc-8d46-3e1f655a5f05',
    //       username: 'Phoebe Logan',
    //       thumb: '',
    //       email: 'he@basjiag.sb',
    //       mobile: '',
    //       hash: '',
    //       salt: '',
    //       pending: '',
    //       accountType: '',
    //       role: '',
    //       field: ''
    //     },
    //     content: '',
    //     likes: ['', '', ''],
    //     comments: [
    //       {
    //         _id: 'a27d7e5b-504b-5276-a17b-e492117c4e8b',
    //         owner: {
    //           _id: '6aee93bb-50dc-524c-b976-7650aa6009fb',
    //           username: 'Rhoda Frank',
    //           thumb: '',
    //           email: 'kesmup@fud.pr',
    //           mobile: '',
    //           hash: '',
    //           salt: '',
    //           pending: '',
    //           accountType: '',
    //           role: '',
    //           field: ''
    //         },
    //         content: '',
    //         likes: ''
    //       }
    //     ],
    //     createdAt: '',
    //     updatedAt: ''
    //   },
    //   {
    //     _id: 'd945cc96-dd97-5cde-9ead-2864625ca098',
    //     title: '',
    //     owner: {
    //       _id: 'ec20889d-37dd-5915-a05e-5542135e1057',
    //       username: 'Julia Chavez',
    //       thumb: '',
    //       email: 'sombe@hiveme.sy',
    //       mobile: '',
    //       hash: '',
    //       salt: '',
    //       pending: '',
    //       accountType: '',
    //       role: '',
    //       field: ''
    //     },
    //     content: '',
    //     likes: ['', '', ''],
    //     comments: [
    //       {
    //         _id: '71f400f4-a64e-5fa5-a67e-56a9c151e0e1',
    //         owner: {
    //           _id: '712e5e5a-3d3b-558b-8d9d-43a645733650',
    //           username: 'Mollie Hogan',
    //           thumb: '',
    //           email: 'lilu@wafnaipo.se',
    //           mobile: '',
    //           hash: '',
    //           salt: '',
    //           pending: '',
    //           accountType: '',
    //           role: '',
    //           field: ''
    //         },
    //         content: '',
    //         likes: ''
    //       }
    //     ],
    //     createdAt: '',
    //     updatedAt: ''
    //   },
    //   {
    //     _id: 'e1bd7da7-019b-5f9a-ac81-b8f7fe8940e2',
    //     title: '',
    //     owner: {
    //       _id: '45e7a440-ae65-5efc-8849-0982c5dbe394',
    //       username: 'Terry Jacobs',
    //       thumb: '',
    //       email: 'muso@jirto.hu',
    //       mobile: '',
    //       hash: '',
    //       salt: '',
    //       pending: '',
    //       accountType: '',
    //       role: '',
    //       field: ''
    //     },
    //     content: '',
    //     likes: ['', '', ''],
    //     comments: [
    //       {
    //         _id: '615b9ecb-34f2-5353-a470-9b7fa5786e74',
    //         owner: {
    //           _id: '4f211512-e179-5ea9-a4ae-28a8cbde0612',
    //           username: 'Rosetta Howard',
    //           thumb: '',
    //           email: 'retwu@zohgu.kp',
    //           mobile: '',
    //           hash: '',
    //           salt: '',
    //           pending: '',
    //           accountType: '',
    //           role: '',
    //           field: ''
    //         },
    //         content: '',
    //         likes: ''
    //       }
    //     ],
    //     createdAt: '',
    //     updatedAt: ''
    //   },
    //   {
    //     _id: '1cb41c71-eff0-517d-b085-e4c520219d62',
    //     title: '',
    //     owner: {
    //       _id: '96c4db25-09a5-5b85-9e3a-6b02a9820428',
    //       username: 'Mattie Holt',
    //       thumb: '',
    //       email: 'gewikut@ketdo.cx',
    //       mobile: '',
    //       hash: '',
    //       salt: '',
    //       pending: '',
    //       accountType: '',
    //       role: '',
    //       field: ''
    //     },
    //     content: '',
    //     likes: ['', '', ''],
    //     comments: [
    //       {
    //         _id: '6cfa2f85-bc67-515b-bf05-034e6f641626',
    //         owner: {
    //           _id: 'db217a5d-f327-5092-b943-198129c286c4',
    //           username: 'Garrett Jensen',
    //           thumb: '',
    //           email: 'padazuve@idkiz.ni',
    //           mobile: '',
    //           hash: '',
    //           salt: '',
    //           pending: '',
    //           accountType: '',
    //           role: '',
    //           field: ''
    //         },
    //         content: '',
    //         likes: ''
    //       }
    //     ],
    //     createdAt: '',
    //     updatedAt: ''
    //   }
    // ])
  }, [])

  return (
    <div className=' flex justify-between'>
      <div className=' mainthing w-[70%] flex flex-col gap-10 overflow-x-hidden'>
        <div className='filter-bar flex items-center justify-between '>
          <div className=' flex items-center gap-4 '>
            <button className=' flex gap-2 items-center py-2 px-3 text-sm bg-gray-200 rounded-3xl'>
              <img src={arrowUpRight} alt='' />
              top
            </button>
            <button className=' flex gap-2 items-center py-2 px-3 text-sm bg-gray-200 rounded-3xl'>
              <img src={vector2} alt='' />
              chikour
            </button>
            <button className=' flex gap-2 items-center py-2 px-3 text-sm bg-gray-200 rounded-3xl'>
              <img src={vector4} alt='' />
              closed
            </button>
          </div>
          <button className='py-4 px-5 rounded-2xl bg-mainBlue text-gray-100 font-semibold '>
            <img src='' alt='' />
            <Link to='new'>Ask a question</Link>
          </button>
        </div>
        <div className=' flex flex-col gap-4 overflow-hidden'>
          {posts?.map(post => (
            <PostCard
              key={post._id}
              postData={post}
              RefreshData={GetPosts}
            />
          ))}
        </div>
      </div>
      {/* TODO: fix this shit */}
      <div className=' w-[25%] min-h-max'>
        <ProfileCard />
      </div>
    </div>
  )
}

export default Forum
