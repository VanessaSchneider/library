import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
function FeedPage ({posts, commentForm, setCommentForm, setPosts}) {
  const [me, setUser] = useState(null)
  function showCommentForm () {
    setCommentForm(commentForm => true)
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

console.log("user",me)

  let post = []

  function runPost(){
    setPosts(posts)
    console.log(posts)
    post = posts.map(post => (
      <div key={post.id}>
      
        <div className='user-feed-container'>
          <img className='feedSize' src={post.user.photo}></img>{' '}
          <div className='username'>
            <Link to={`/users/${post.user.username}`}>
              {post.user.username}
            </Link>
        
          </div>
          <div className='post-space'>
            <Link to={`/posts/${post.id}`}>
              <button className='button2'>{post.content}</button>
            </Link>
          </div>
          <div className='writepost'>
            <Link to={`/posts/${post.id}`}>
              <button className ="clear" onClick={showCommentForm}>Make Comment</button>
            </Link>
          </div>
          <div className='post-container2'>
            <Link to={`/shows/${post.show.name}`}>#{post.show.name}</Link>
          </div>
          <div className='see-comments'>
            <Link to={`/posts/${post.id}`}>
              <button className='button2'>See Comments</button>
            </Link>
          </div>
        </div>
      </div>
    ))}


 runPost()

  console.log(commentForm)
  return (
    <div className='user-feed-container'>
      <div className='user-feed-container'>{post}</div>
    </div>
  )
}

export default FeedPage
