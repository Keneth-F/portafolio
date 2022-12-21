import { useState } from 'react';
import style from '../../styles/components/Navbar.module.css'
import Contact from './Contact';
import Modal from './Modal';
import Navlink from './Navlink'
function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className={style["navbar"]}>
      <ul className={style["navbar-list"]}>
        <li className={style["navbar-item"]}>
          <Navlink activeClassName={style["active"]} className={style["navbar-link"]} href="/">
            Home
          </Navlink>
        </li>

        <li className={style["navbar-item"]}>
          <Navlink activeClassName={style["active"]} className={style["navbar-link"]} href="/CVKenethFariñasGuzman.pdf" target="_blank">
            Resume
          </Navlink>
        </li>

        <li className={style["navbar-item"]}>
          <Navlink activeClassName={style["active"]} className={style["navbar-link"]} href="/portfolio">
            Portfolio
          </Navlink>
        </li>

        <li className={style["navbar-item"]}>
          <Navlink activeClassName={style["active"]} className={style["navbar-link"]} href="/education">
            Education
          </Navlink>
        </li>
        <li className={style["navbar-item"]}>
          <Navlink activeClassName={style["active"]} className={style["navbar-link"]} href="/skills">
            Skills
          </Navlink>
        </li>
        <li className={style["navbar-item"]}>
          <button className={style["navbar-link"]} onClick={() => setShowModal(true)}>Contact</button>
        </li>
      </ul>
      {showModal && <Modal
        onClose={() => setShowModal(false)}
        show={showModal}

        title={<h1 className={`h1`}>Contact</h1>}
      ><Contact />
      </Modal>}
    </nav>
  )
}

export default Navbar