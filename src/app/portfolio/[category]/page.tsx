import React from 'react'
import  styles from './page.module.css'
const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>



<div className={styles.item}>
<div className={styles.content}>
<h1 className={styles.content}>
  Test
</h1>

</div>
</div>
 </div>
  )
}

export default Category