import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import NewsCard from '../elements/NewsCard'
import CoursCard from '../elements/courseCard'

import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'

import api from '../../utils/axios'

export default function Courses () {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_SERVER_LINK}/api/course`)
      .then(r => setCourses(r.data))
  }, [])

  return (
    <div>
      <section className=''>
        <div className=' pt-20 pb-10 flex gap-[40px] justify-between '>
          <NewsCard
            img={news1}
            style={{ width: '40%' }}
            title={'Learning and teaching online , made easy.'}
            content={
              'Gain subject certification or earn money while teaching online with GlobalTalk.'
            }
            url='#'
          />
          <NewsCard
            img={news2}
            style={{ width: '28%' }}
            title={'We made challenges'}
            content={
              'Empower minds with interactive challenges on our virtual hub'
            }
            url='#'
          />
          <NewsCard
            img={news3}
            style={{ width: '28%' }}
            title={'Our New mobile applcation'}
            content={
              'Your all-in-one virtual hub for seamless collaboration, communication, and productivity.'
            }
            url='#'
          />
        </div>
      </section>
      <section className='bg-[white] p-4 pb-0 rounded-lg shadow-md relative mt-[2rem] mb-[2rem]'>
        <h1 className=' mb-4 capitalize text-3xl text-gray-900 font-bold'>
          current courses
        </h1>
        <div className='pb-5 flex gap-[40px] justify-between'>
          {courses?.map(course => (
            <CoursCard key={course._id} course={course} />
          ))}
        </div>
        <div className='text-right pb-[10px] font-bold underline'>
          <Link to={'/'}>See More &gt; </Link>
        </div>
      </section>
      <section className='bg-[white] p-4 pb-0 rounded-lg shadow-md relative mt-[2rem] mb-[2rem]'>
        <h1 className=' mb-4 capitalize text-3xl text-gray-900 font-bold'>
          exclusive courses
        </h1>
        <div className='pb-5 flex gap-[40px] justify-between'>
          {courses?.map(course => (
            <CoursCard key={course._id} course={course} />
          ))}
        </div>
        <div className='text-right pb-[10px] font-bold underline'>
          <Link to={'/'}>See More &gt; </Link>
        </div>
      </section>
    </div>
  )
}
