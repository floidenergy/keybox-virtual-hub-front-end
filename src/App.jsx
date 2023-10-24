import LogIn from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import MainIndex from './pages/Profiles/index'
import LandingPage from './pages/landing_page/Main'
import { Route, Routes } from 'react-router-dom'
import { User } from './pages/Profiles/User'
import { LeaderBoard } from './pages/Profiles/LeaderBoard'
import Forum from './pages/Profiles/forum/Forum'
import PostForum from './pages/Profiles/forum/PostForum'
import Challenge from './pages/Profiles/challenges/Challenge'
import Courses from './pages/Profiles/courses'
import Logout from './pages/Logout'

function App () {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/index' element={<MainIndex />}>
          <Route index element={<User />} />
          <Route path={'leader-bord'} element={<LeaderBoard />} />
          <Route path={'forum'}>
            <Route index element={<Forum />} />
            <Route path="new" element={<PostForum />} />
          </Route>
          <Route path='challenges' >
            <Route index element={<Challenge />} />
          </Route>
          <Route path='courses' element={<Courses />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
