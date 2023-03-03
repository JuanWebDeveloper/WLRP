const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='content'>
        <div className='contact-text'>
          <h2>
            <span>Contact Us!</span>
          </h2>
          <p>
            Do you have any questions, comments, or suggestions you&apos;d like to share with us? We&apos;d love to hear from you
            and help in any way we can.
          </p>
          <p>
            Please use the following form to get in touch with us. You can also email us directly at our email address or give us
            a call. We&apos;ll get back to you as soon as possible.
          </p>
          <h3>Thank you for your interest in our company!</h3>
        </div>
        <form className='contact-form' autoComplete='off'>
          <div className='form-item_container'>
            <input type='text' name='fullName' placeholder=' ' />
            <label htmlFor='fullName'>Full name</label>
          </div>
          <div className='form-item_container'>
            <input type='text' name='lastName' placeholder=' ' />
            <label htmlFor='lastName'>Last name</label>
          </div>
          <div className='form-item_container'>
            <input type='email' name='email' placeholder=' ' />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='form-item_container'>
            <input type='text' name='phone' placeholder=' ' />
            <label htmlFor='phone'>Phone</label>
          </div>
          <div className='form-item_container'>
            <textarea name='message' placeholder=' '></textarea>
            <label htmlFor='message'>Message</label>
          </div>
          <button className='button-default'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
