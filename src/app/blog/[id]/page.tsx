import React from 'react'


async function getData(id:string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error(' fAILED TO FETCH DATA')
  }

  return res.json()
}
const BlogPost = async({params}) => {

  const data = await getData(params.id)
  return (
    <div>BlogPost</div>
  )
}

export default BlogPost