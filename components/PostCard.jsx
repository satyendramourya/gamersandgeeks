import React from 'react'

const PostCard = ({ post }) => {
    return (

        <div>
            {post.title}
            <br />
            {post.excerpt}
            <hr />
        </div>

    )
}

export default PostCard