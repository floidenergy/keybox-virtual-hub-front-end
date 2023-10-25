import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { logout } from '../store/features/user'
import Api from '../utils/axios'


export default function Logout () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  useEffect(() => {
    Api.get(`/auth/logout`)
    .finally(() => {
      dispatch(logout())
      navigate('/login')
    })
  }, [dispatch, navigate])

  return <div>redirecting...</div>
}
