const CoursCard = ({ course }) => {
  return (
    <div className=' relative w-[23%] shadow-md rounded-lg bg-[#ececec]'>
      <img
        className=' w-full h-[35%] object-cover rounded-xl abs '
        src={course.thumb}
        alt=''
      />

      <div className='relative p-4 h-[65%] flex flex-col justify-between'>
        <div className=' '>
          <img
            src={course.teacher.thumb}
            alt=''
            className='absolute w-[30%] right-[10px] top-[-25px] p-[2px] shadow-md border-[3px] aspect-square object-cover border-gray-100 rounded-full'
          />
        </div>
        <div className=' w-[65%] text-sm capitalize  text-mainBlue overflow-hidden'>
          {course?.teacher?.firstname} {course?.teacher?.lastname}
        </div>
        <h1 className=' font-semibold line-clamp-3 capitalize h-[45%]'>
          {course.title}
        </h1>
        <p className=' static bottom-0 text-sm  text-gray-900 text-[#808191]'>
          {course.studentCounts} Students
        </p>
      </div>
    </div>
  )
}

export default CoursCard
