import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { logout } from '../store/features/user'

import { base_url } from '../utils/base_url'

export default function Logout () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  useEffect(() => {
    axios.get(`${base_url}/auth/logout`, {withCredentials: true})
    .finally(() => {
      dispatch(logout())
      navigate('/login')
    })
  }, [dispatch, navigate])

  return <div>redirecting...</div>
}
