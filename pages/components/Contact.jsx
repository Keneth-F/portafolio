import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useForm } from '../../libs/useForm';
import style from '../../styles/components/Contact.module.css'
function Contact() {
  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      fullname: "", email: "", message: ""
    },
    (formData) => {
      fetch("https://formsubmit.co/ajax/52eb10d05861674ee5d1299dead50034", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
  );
  const { fullname, message, email } = formData
  return (
    <div className={style["contact"]}>
      <section className={style["contact-form"]}>
        <form className={style["form"]} onSubmit={handleSubmit}>
          <div className={style["input-wrapper"]}>
            <input
              type="text"
              name="fullname"
              className={style["form-input"]}
              placeholder="Full name"
              required
              value={fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className={style["form-input"]}
              placeholder="Email address"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className={style["form-input"]}
            placeholder="Your Message"
            required
            value={message}
            onChange={handleInputChange}
          ></textarea>

          <button className={style["form-btn"]} type="submit">
            <RiSendPlaneFill></RiSendPlaneFill>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact