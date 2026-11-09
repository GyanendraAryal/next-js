import React from 'react'

async function Blog({ params }) {
    const { blog } = await params;
    // console.log(await params);
    return <div>Blog {blog }</div>;
}

export default Blog;
