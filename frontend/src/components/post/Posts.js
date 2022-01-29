import { useEffect, useReducer } from 'react'
import { getPosts } from '../../redux/actions/postActions'
import { getPostsReducer } from '../../redux/reducers/postReducer'
import SinglePost from './SinglePost'

export default function Posts() {
  const [{ posts, loading, error }, dispatch] = useReducer(getPostsReducer, {})
  // console.log(posts)
  useEffect(() => {
    getPosts(dispatch)
  }, [])
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>Error {error.message}</div>}
      {posts && <div>Success</div>}
      {posts &&
        posts.length !== 0 &&
        posts.map(post => <SinglePost key={post._id} post={post} />)}
    </>
  )
}
