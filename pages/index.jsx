import React from 'react'
import { services } from '../data'
import style from '../styles/Home.module.css'

function Home() {
  function createMarkup(about) {
    return {
      __html: about,
    }
  }
  return (
    <article className={style["about"]}>
      <header>
        <h2 className={`h2 article-title`}>About me</h2>
      </header>

      <section className={style["about-text"]}>
        <p>
          I am currently pursuing B.Tech Degree in Computer Science
          Engineering from UNED. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching
          and easy to use. My aim is to bring across your message and
          identity in the most creative way.
        </p>
      </section>



      <section className={style["service"]}>
        <h3 className={`h3 ${style["service-title"]}`}>{`What i'm doing`}</h3>

        <ul className={style["service-list"]}>
          {services.map(({ Icon, title, about }) => (<li key={title} className={`${style["service-item"]}`}>
            <div className={style["service-icon-box"]}>
              <Icon width={"40px"} />
            </div>

            <div className={style["service-content-box"]}>
              <h4 className={`h4 ${style["service-item-title"]}`}>{title}</h4>

              <p className={style["service-item-text"]} dangerouslySetInnerHTML={createMarkup(about)} />
            </div>
          </li>))}
        </ul>
      </section>
    </article>
  )
}

export default Home