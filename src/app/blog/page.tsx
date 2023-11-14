import React from 'react'
import styles from './page.module.css'

async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
  {next:{revalidate:10}})

  if(!res.ok){
    throw new Error(' fAILED TO FETCH DATA')
  }

  return res.json()
}
const Blog = async() => {

  const data = await getData()
  
  console.log(data)
  return (
    <div className='styles.container'>Blog</div>
  )
}

export default Blog