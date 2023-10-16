import React, { useRef } from 'react'
import emailjs, { send } from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the form is valid (all required fields are filled)
    if (formRef.current.checkValidity()) {
      emailjs.sendForm('service_s4gk8q2', 'template_se7m3nd', formRef.current, 'fh4KQJ7kuJT_-F0zY')
        .then((result) => {
          console.log(result.text);
          // Optionally, you can reset the form after a successful submission
          formRef.current.reset();
        }, (error) => {
          console.log(error.text);
        });
    } else {
      // Display a message to the user when the form is not valid
      alert('Please fill in all required fields.');
    }
  };

  return (
    <section className='contact'>
      <div className='cp'>
        <h1 className='ct'>Contact Me</h1>
        <p className='pp'>Please fill out the form below to discuss any work opportunities</p>
      </div>
      <div className='conform'>
        <div className="myContact">
          <h1 className='headContact'>Contact info</h1>
          <ul className='infoLi'>
            <li><span>Email </span>: Jainheenacse@gmail.com</li>
            <li><span>Mobile </span>: 8708299622</li>
            <li><span>in</span><a href="https://www.linkedin.com/in/heena-jain-a45356192"> : HeenaJain</a></li>
            <li><span>Loc </span>: Sirsa, Haryana</li>
          </ul>
        </div>
        <div className='form'>
          <form className='form' ref={formRef} onSubmit={sendEmail}>
            <input className='name' type="text" placeholder='NAME' name='your_name' required /><br />
            <input className='email' type="email" name="your_email" id="" placeholder='EMAIL' required /><br />
            <textarea className='message' name="message" id="" cols="30" rows="3" placeholder='MESSAGE' required></textarea><br />
            <button type="submit" value='send'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
