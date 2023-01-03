import React from 'react'
import style from '../styles/Error.module.css'
export default function Custom404() {
  return (
    <article>
      <header>
        <h2 className={`h2 article-title`}>Error</h2>
      </header>
      <div className={style["wrapper"]}>
        <h1 className={style["glitch"]}>404</h1>
        <h1 className={style["text"]}>PAGE NOT FOUND</h1>
      </div>
    </article>
  )
}


