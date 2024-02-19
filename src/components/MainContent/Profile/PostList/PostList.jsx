import React, { memo } from 'react'
import cl from './PostList.module.css'
import { addPost, selectProfile } from '../../../../redux/reducers/profileReducer'
import { connect } from 'react-redux'
import PostForm from './PostForm'


const PostItem = ({content, likesCount}) => {
  return (
    <div className={cl.item}>
      <img src="https://images.unsplash.com/photo-1615751072497-5f5169febe17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" />
      {content}
      <div className={cl.likes}>
        Likes {likesCount}
      </div>
    </div>

  )
}

const PostList = memo(({posts, addPost}) => {
  const onSubmit = (formData) => {
    addPost(formData.post)
  }

  return (
    <div className={cl.postList}>
      <h3>
        My Posts
      </h3>
      <PostForm onSubmit={onSubmit} />
      {posts.map(({content, likesCount, id}) => <PostItem content={content} likesCount={likesCount} key={id} />)}
    </div>
  )
})

const mapStateToProps = (state) => ({
  posts: selectProfile(state).posts,
});

const mapDispatchToProps = {
  addPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)