import React, { Component } from 'react'

export default class ContactForm extends Component {

  render () {
    return (
      <div>
        <h2>☎️ Contact ☎️</h2>
        <h4>I'm I'm happy to get in touch with you. Just fill out the form below and I'll get back to you.</h4>
        <form method='POST' action='http://formspree.io/hawkeye.hu@gmail.com'>
          <input type='text' id='name' className='required' name='name' placeholder='name' autoComplete='off' required />
          <input type='email' id='email' className='required' name='email' autoComplete='on' placeholder='Your email' required />
          <textarea name='message' placeholder='message' className='required' required />
          <button type='submit' className='submitSend'>SEND MESSAGE</button>
          <button type='reset' className='submitClear'>CLEAR FORM</button>
        </form>
      </div>
    )
  }

}
