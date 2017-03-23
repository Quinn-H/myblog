import React, { Component } from 'react'

import styles from './index.css'

export default class ContactForm extends Component {
  render () {
    return (
      <div className={styles.formstyle}>
        <h2>☎️ Contact Me ☎️</h2>
        <h4>I 'm happy😊 to get in touch with you. Just fill out this cool form and I'll get back to you.</h4>
        <form method='POST' action='http://formspree.io/hawkeye.hu@gmail.com'>
          <input type='text' id='name' className='required' name='name' placeholder='Name' autoComplete='off' required />
          <input type='email' id='email' className='required' name='email' autoComplete='on' placeholder='Your email' required />
          <textarea name='message' placeholder='Message' className='required' required />
          <button type='submit'>SEND MESSAGE</button>
          <button type='reset'>CLEAR FORM</button>
        </form>
      </div>
    )
  }

}
