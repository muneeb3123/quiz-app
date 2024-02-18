import React from 'react'

function Contact() {
  return (
    <div>
    <h1>Contact</h1>
    <h4>Get in touch</h4>
    <p>PAragraph</p>
    <p>Contact info</p>
    <p>contact links</p>
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
