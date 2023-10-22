import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import api from '../../../utils/axios'

import ProfileCard from '../../elements/ProfileCard'
import { Input, TextArea } from '../../elements/Input'

let PostSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  // field: Yup.string(),
  // thumb: Yup.mixed(),
  // .test('fileSize', 'File size is too large', value => {
  //   return value && value.size <= 4096000 // 4MB
  // })
  // .test('fileType', 'Invalid File Type', value => {
  //   console.log(value.type);
  //   return value && ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type)
  // }),
  content: Yup.string().required('Post Content is Required')
})
export default function PostForum () {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: PostSchema,
    onSubmit: values => {
      api.post('/client/forum', {...values}, {withCredentials: true}).then(() => {
        formik.resetForm()
        formik.setSubmitting(false)
        navigate('/index/forum');
      })
    }
  })

  return (
    <div className=' flex h-full gap-4 items-start'>
      <div className=' w-[75%] bg-[white] p-[1rem] rounded-xl'>
        <form
          className='flex flex-col gap-2 min-h-max'
          action='Post'
          onSubmit={formik.handleSubmit}
        >
          <Input
            name='title'
            type='text'
            text='Title'
            value={formik.values.title}
            onChange={formik.handleChange('title')}
          />
          <div className='error'>
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
          <TextArea
            name='content'
            text='content'
            rows={20}
            onChange={formik.handleChange('content')}
            value={formik.values.content}
          />
          <div className='error'>
            {formik.touched.content && formik.errors.content ? (
              <div>{formik.errors.content}</div>
            ) : null}
          </div>
          <button
            type='submit'
            className=' float-right py-3 px-5 rounded-lg bg-mainBlue text-gray-100 font-semibold'
          >
            Publish
          </button>
        </form>
      </div>
      <ProfileCard />
    </div>
  )
}
