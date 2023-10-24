import { useSelector } from 'react-redux'

import Api from '../../utils/axios'
import { BiLike } from 'react-icons/bi'

export default function LikeButton ({ type, likes, id, onFinish }) {
  const user = useSelector(state => state.user)

  const handelLikeUnlikeComment = () =>
    Api.put(`/client/forum/likes/${type}/${id}`).finally(onFinish)

  return (
    <button
      onClick={handelLikeUnlikeComment}
      className=' flex items-center gap-2 text-gray-500'
    >
      <BiLike
        className={
          likes.find(like => like === user.user.id) && ' text-[#41a0f8]'
        }
      />{' '}
      {likes.length}
    </button>
  )
}
