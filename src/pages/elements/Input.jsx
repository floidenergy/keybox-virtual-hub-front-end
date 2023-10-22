export const Input = props => {
  return (
    <div className='w-full'>
      <div className='relative h-10 w-full min-w-[200px]'>
        <div className='absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500'>
          <img src={props.img} alt='' />
        </div>
        <input
          className='peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-mainBlue focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
          placeholder=' '
          {...props}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-mainBlue peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-mainBlue peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-mainBlue peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {props.text}
        </label>
      </div>
    </div>
  )
}

export const TextArea = props => {
  return (
    <div className='w-full'>
      <div className='relative min-h-max w-full min-w-[200px]'>
        <div className='absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500'>
          <img src={props.img} alt='' />
        </div>
        <textarea
          className='peer w-full block rounded-[7px] border border-blue-gray-200 resize-none bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-mainBlue focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
          placeholder=' '
          {...props}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-mainBlue peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-mainBlue peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-mainBlue peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {props.text}
        </label>
      </div>
    </div>
  )
}

export const Radio = ({ onChange, name, label, values }) => {
  return (
    <>
      <h2>{label} :</h2>
      <div className='flex  gap-10'>
        {values.map((value, index) => (
          <div key={index} className='inline-flex items-center'>
            <input
              id={`${value.id}-${index}`}
              name={name}
              type='radio'
              value={value.value}
              onChange={onChange}
              // className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-mainBlue transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainBlue checked:before:bg-mainBlue hover:before:opacity-10"
              // checked
            />
            <label
              className='mt-px cursor-pointer pl-2 select-none font-light text-gray-700'
              htmlFor={`${value.id}-${index}`}
            >
              {value.label}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}
