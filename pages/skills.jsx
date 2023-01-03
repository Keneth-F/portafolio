import React from 'react'
import style from '../styles/Education.module.css'
import { languages, tools } from '../data'
function Skills() {
  return (
    <article className={style["resume"]}>
      <header>
        <h2 className={"h2 article-title"}>skills</h2>
      </header>
      <div className={style["skill-list"]}>

        <section className={style["skill"]}>
          <h3 className={`h3 ${style["skills-title"]}`}>Lenguages</h3>

          <ul className={`${style["skills-list"]} content-card`}>
            {languages.map(({ name, level }) => (
              <li key={name} className={style["skills-item"]}>
                <div className={style["title-wrapper"]}>
                  <h5 className={"h5"}>{name}</h5>
                  {/* <data value={level}>{level}%</data> */}
                </div>

                <div className={style["skill-progress-bg"]}>
                  <div className={style["skill-progress-fill"]} style={{ width: `${level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className={style["skill"]}>
          <h3 className={`h3 ${style["skills-title"]}`}>Tools</h3>

          <ul className={`content-card ${style["skills-list"]}`}>
            {tools.map(({ name, level }) => (
              <li key={name} className={style["skills-item"]}>
                <div className={style["title-wrapper"]}>
                  <h5 className={"h5"}>{name}</h5>
                  {/* <data value={level}>{level}%</data> */}
                </div>

                <div className={style["skill-progress-bg"]}>
                  <div className={style["skill-progress-fill"]} style={{ width: `${level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article >
  )
}

export default Skills