import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])
  return (
    <div>
      <h1>You open page post with ID = {params.id} </h1>
      {isLoading ? (
        <loader />
      ) : (
        <div>
          {post.id}.{post.title}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
