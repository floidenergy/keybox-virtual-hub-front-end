import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../store/features/user'
import Api from '../../utils/axios'

import { Input } from '../elements/Input'
import lettreBox from '../assets/letterBox.png'
import passwordIcon from '../assets/passwordIcon.png'
import googlelogo from '../assets/googlelogo.png'
import loginImg from '../assets/loginImg.png'

let userSchema = Yup.object({
  username: Yup.string().required('username is required'),
  password: Yup.string()
    .required('password is required')
    .min(4, 'Password must be at least 4 characters long')
})

const LogIn = () => {
  const [loginSucc, setLoginSucc] = useState('')
  const [errorLogin, setErrorLogin] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.isConnected) {
      navigate('/index')
    }
  }, [user.isConnected, navigate])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: userSchema,
    onSubmit: values => {
      Api
        .post(`/auth/login`, values)
        .then(res => {
          const userData = res.data
          dispatch(login(userData))

          setLoginSucc(res?.data?.message || 'successfully logged in')
          setTimeout(() => {
            navigate('/index')
          }, 1500)
        })
        .catch(err => {
          console.log(err)
          setErrorLogin(
            err?.response.data.message || 'An error occurred while logging in.'
          )
        })
    }
  })

  return (
    <div className='flex h-[100dvh] items-center justify-between container mx-auto'>
      <div className='w-[40%] text-center flex i flex-col gap-4'>
        <h1 className=' text-4xl font-bold'>Login to your Account</h1>
        <p className=' text-lg text-gray-500'>
          Welcome back! Select method to log in:
        </p>
        <div className='inline-flex justify-center items-center'>
          <div className='w-[7.5rem] h-[2px] bg-gray-400' />
          <div className='w-[13.3125rem] h-[1.5625rem] text-gray-400 text-center text-[.9375rem] font-medium leading-6'>
            or continue with email
          </div>
          <div className='w-[7.5rem] h-[2px] bg-gray-400' />
        </div>
        <div className='text-green-500 text-[14px]'>{loginSucc}</div>
        <form
          action='POST'
          onSubmit={formik.handleSubmit}
          className='flex flex-col  justify-between gap-4'
        >
          <Input
            type={'text'}
            img={lettreBox}
            text={'User name'}
            onChange={formik.handleChange('username')}
            value={formik.values.username}
          />
          <div className='error'>
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <Input
            type={'password'}
            img={passwordIcon}
            text={'Password'}
            onChange={formik.handleChange('password')}
            value={formik.values.password}
          />
          <div className='error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='flex justify-between w-full'>
            <div className='flex gap-2'>
              <input type='checkbox' />
              <label htmlFor='remember'>Remember me</label>
            </div>
            <span className='text-sm text-gray-400 '>Forgot Password ?</span>
          </div>
          <div className='error'>{errorLogin}</div>
          <button
            className=' uppercase py-4 mt-4 bg-mainBlue w-full rounded-lg text-gray-100 font-semibold text-xl'
            type='submit'
          >
            log in
          </button>
        </form>
        <Link
          to='#'
          className='flex self-center items-center gap-2 border-[1px] w-fit py-2 px-8 border-gray-400 rounded-lg'
        >
          <img src={googlelogo} alt='' />
          <h1 className='  text-gray-900 text-xl'>Google</h1>
        </Link>
        <p className=' text=sm text-gray-400 '>
          Don’t have account? &nbsp;
          <Link to='/signup' className=' underline'>
            Create an account
          </Link>
        </p>
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

export default LogIn
