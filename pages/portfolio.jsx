import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { projects as projectsData } from '../data'
import style from '../styles/Portfolio.module.css'
function Portfolio({ projects, categories }) {
  const [active, setActive] = useState(false)
  const [content, setContent] = useState(projects);
  const [filter, setFilter] = useState("all");

  const handlerFilterCategory = (category) => {
    if (category === "all") {
      setContent(projects);
      setFilter(category);
      setActive(false)
      return;
    }

    const newData = projects.filter((project) =>
      project.category.includes(category)
    );
    setContent(newData);
    setFilter(category);
    setActive(false)
  };
  return (
    <article className={style["portfolio"]}>
      <header>
        <h2 className={`h2 article-title`}>Portfolio</h2>
      </header>

      <section className={style["projects"]}>

        <ul className={style["filter-list"]}>
          {categories.map((e) => (<li key={e} className={style["filter-item"]}>
            <button className={filter === e ? style["active"] : null} onClick={(evt) => { handlerFilterCategory(e) }}>{e}</button>
          </li>))}
        </ul>
        <div className={style["filter-select-box"]}>
          <button className={`${style["filter-select"]}`} onClick={(e) => { setActive((val) => !val) }}>
            <div className={style["select-value"]}>
              {filter}
            </div>

            <div className={style["select-icon"]}>
              <AiOutlineDown name="chevron-down"></AiOutlineDown>

            </div>
          </button>

          {active && <ul className={style["select-list"]}>
            {categories.map(e => (<li key={e} className={style["select-item"]}>
              <button onClick={(evt) => { handlerFilterCategory(e) }}>{e}</button>
            </li>))}
          </ul>}
        </div>

        <ul className={style["project-list"]}>
          {content.map(({ name, image_path, deployed_url, github_url, description, key_techs }) => (<li key={name}
            className={`${style["project-item"]}`}

          >
            <a href={github_url}>
              <div className={style["project-img"]}>
                <div className={`has-scrollbar ${style["project-item-content"]}`}>
                  <p>
                    {description}
                  </p>
                  <div

                  >{key_techs.map(tag => (<div key={tag} className={style['tag']}> {tag} </div>
                  ))}
                  </div>
                </div>

                <Image
                  fill
                  src={image_path}
                  alt={name}
                  loading="lazy"
                />
              </div>

              <h3 className={style["project-title"]}>{name}</h3>

              <p className={style["project-category"]}>{filter}</p>
            </a>
          </li>))}

        </ul>
      </section >
    </article >
  )
}
export async function getStaticProps(context) {
  const cat = []
  for (const project of projectsData) {
    cat.push(...project['category'])
  }
  const categories = ["all", ...new Set(cat)]
  return {
    props: { projects: projectsData, categories },
  }
}
export default Portfolio