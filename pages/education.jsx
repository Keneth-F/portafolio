import React from 'react'
import style from '../styles/Education.module.css'
import { FaGraduationCap } from 'react-icons/fa'
import { education, experience } from '../data'
import { AiOutlineRise } from 'react-icons/ai'
function Education() {
  return (
    <article className={style["resume"]}>
      <header>
        <h2 className={"h2 article-title"}>Education</h2>
      </header>

      <section className={style["timeline"]}>
        <div className={style["title-wrapper"]}>
          <div className={"icon-box"}>
            <FaGraduationCap />
          </div>

          <h3 className={"h3"}>Education</h3>
        </div>

        <EducationList data={education} />
      </section>

      <section className={style["timeline"]}>
        <div className={style["title-wrapper"]}>
          <div className={"icon-box"}>
            <AiOutlineRise />
          </div>

          <h3 className={"h3"}>Experience</h3>
        </div>

        <EducationList data={experience} />
      </section>
    </article>
  )
}

const EducationList = ({ data }) => (<ol className={style["timeline-list"]}>
  {data.map(({ title, date, data }) => (
    <li key={title} className={style["timeline-item"]}>
      <h4 className={`h4 ${style["timeline-item-title"]}`}>
        {title}
      </h4>

      <span>{date}</span>

      <p className={style["timeline-text"]}>
        {data}
      </p>
    </li>
  ))}
</ol>)

export default Education