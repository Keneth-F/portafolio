import Image from 'next/image'
import { useState } from 'react'
import style from '../../styles/components/Sidebar.module.css'
import { AiOutlineDown } from 'react-icons/ai'
import { contact, socials } from '../../data.js'
function Sidebar() {
  const [active, setActive] = useState(false)
  return (
    <aside className={`${style["sidebar"]} ${active ? style["active"] : ""}`}>
      <div className={style["sidebar-info"]}>
        <figure className={style["avatar-box"]}>
          <Image
            src="/avatar.jpg"
            alt="Keneth Fariñas"
            width="80"
            height="120"

          />
        </figure>

        <div className={style["info-content"]}>
          <h1 className={style["name"]} title="Keneth Fariñas">Keneth Fariñas G.</h1>

          <p className={style["title"]}>Full Stack Developer</p>
        </div>

        <button className={style["info_more-btn"]} onClick={() => setActive(val => !val)}>
          <span>Show Contacts</span>

          <AiOutlineDown name="chevron-down"></AiOutlineDown>
        </button>
      </div>

      <div className={style["sidebar-info_more"]}>
        <div className={"separator"} />

        <ul className={style["contacts-list"]}>
          {contact.map(({ Icon, title, url, data }) => (<li key={title} className={style["contact-item"]}>
            <div className={"icon-box"}>
              <Icon />
            </div>

            <div className={style["contact-info"]}>
              <p className={style["contact-title"]}>{title}</p>

              <a href={url} target={"_blank"} rel="noreferrer" className={style["contact-link"]}
              >{data} </a>
            </div>
          </li>
          ))}

        </ul>

        <div className={"separator"}></div>

        <ul className={style["social-list"]}>
          {socials.map(({ Icon, url }) => (
            <li key={url} className={style["social-item"]}>
              <a href={url} target={"_blank"} rel="noreferrer" className={style["social-link"]}>
                <Icon></Icon>
              </a>
            </li>)
          )}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar