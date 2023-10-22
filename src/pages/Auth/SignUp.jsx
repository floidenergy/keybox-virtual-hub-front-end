import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {Input} from '../elements/Input'

import lettreBox from '../assets/letterBox.png'
import passwordIcon from '../assets/passwordIcon.png'
import googlelogo from '../assets/googlelogo.png'
import loginImg from '../assets/loginImg.png'
import profileImg from '../assets/person.png'

import {Radio} from "../elements/Input"

let userSchema = Yup.object({
  username: Yup.string().required('username is required'),
  firstname: Yup.string().required('firstname is required'),
  lastname: Yup.string().required('lastname is required'),
  password: Yup.string()
    .required('password is required')
    .min(4, 'Password must be at least 4 characters long'),
  email: Yup.string().required('email is required'),
  mobile: Yup.string().required('mobile is required'),
  accountType: Yup.string().required('account type is required'),
  role: Yup.string().required('Role type is required')
})

const SignUp = () => {
  const [errorLogin, setErrorLogin] = useState('')
  const [createdSucc, setCreatedSucc] = useState('')
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      mobile: '',
      accountType: '',
      role: ''
    },
    validationSchema: userSchema,
    onSubmit: values => {
      setErrorLogin('')
      axios
        .post(`${import.meta.env.VITE_SERVER_LINK}/auth/register`, values)
        .then(res => {
          setCreatedSucc(res?.data?.message)
          setTimeout(() => {
            navigate('/login')
          }, 1500)
        })
        .catch(err => {
          setErrorLogin(err?.message)
        })
    }
  })

  return (
    <div className='flex min-h-[100dvh] items-center justify-between container mx-auto'>
      <div className='w-[40%] text-start flex i flex-col gap-2'>
        <h1 className=' text-4xl font-bold'>Create your Account</h1>
        <p className=' text-lg text-gray-500'>Unlock all features!</p>

        <form
          className='flex flex-col justify-between gap-2'
          action='POST'
          onSubmit={formik.handleSubmit}
        >
          <div className='text-green-500 text-[14px]'>{createdSucc}</div>
          <Input
            type={'text'}
            onChange={formik.handleChange('username')}
            value={formik.values.username}
            img={profileImg}
            text={'user name'}
          />
          <Input
            type='text'
            onChange={formik.handleChange('firstname')}
            value={formik.values.firstname}
            img={profileImg}
            text={'first name'}
          />
          <Input
            type='text'
            onChange={formik.handleChange('lastname')}
            value={formik.values.lastname}
            img={profileImg}
            text={'last name'}
          />
          <div className='error'>
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <Input
            type={'email'}
            onChange={formik.handleChange('email')}
            img={lettreBox}
            text={'email'}
          />
          <div className='error'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <Input
            type={'password'}
            onChange={formik.handleChange('password')}
            img={passwordIcon}
            text={'Password'}
          />
          <div className='error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <Input
            type={'mobile'}
            onChange={formik.handleChange('mobile')}
            img={passwordIcon}
            text={'mobile'}
          />
          <div className='error'>
            {formik.touched.mobile && formik.errors.mobile ? (
              <div>{formik.errors.mobile}</div>
            ) : null}
          </div>

          <Radio
            label={'Account Type'}
            values={[
              { value: 'child', id: 'child', label: 'Child' },
              { value: 'adult', id: 'adult', label: 'Adult' }
            ]}
            name='type'
            onChange={formik.handleChange('accountType')}
          />

          <Radio
            label={'i am'}
            values={[
              { value: 'teacher', id: 'teacher', label: 'Teacher' },
              { value: 'student', id: 'student', label: 'Student' }
            ]}
            name='role'
            onChange={formik.handleChange('role')}
          />

          <div className='error'>
            {formik.touched.accountType && formik.errors.accountType ? (
              <div>{formik.errors.accountType}</div>
            ) : null}
          </div>
          <div className='error'>{errorLogin}</div>
          <button
            className=' uppercase py-2 mt-4 bg-mainBlue w-full rounded-lg text-gray-100 font-semibold text-xl'
            type='submit'
          >
            log in
          </button>
        </form>
        <p className=' text=sm text-gray-400 '>
          Already have an account?
          <Link to='/login'> Login</Link>
        </p>
        <div className='flex self-center items-center gap-2 border-[1px] w-fit py-2 px-8 border-gray-400 rounded-lg'>
          <img src={googlelogo} alt='' />
          <h1 className='  text-gray-900 text-xl'>Google</h1>
        </div>
      </div>
      <div className='w-[50%] '>
        <img src={loginImg} alt='' />
        <div className=' text-center text-mainBlue mt-4'>
          <h1 className=' capitalize font-bold text-lg'>
            Log In to check your progress
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum?
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
