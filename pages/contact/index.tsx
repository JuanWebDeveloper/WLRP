import { MouseEvent } from 'react';

const ContactUs = () => {
  const labelClick = (e: MouseEvent<HTMLLabelElement>): void => {
    const target: HTMLLabelElement = e.target as HTMLLabelElement;
    const parent: HTMLDivElement = target.parentNode as HTMLDivElement;

    if (parent.querySelector('textarea')) {
      const boundTextare: HTMLTextAreaElement = parent.querySelector('textarea') as HTMLTextAreaElement;
      boundTextare.focus();
    } else {
      const boundInput: HTMLInputElement = parent.querySelector('input') as HTMLInputElement;
      boundInput.focus();
    }
  };

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
          <p>Please use the following form to get in touch with us We&apos;ll get back to you as soon as possible.</p>
          <h3>Thank you for your interest in our company!</h3>
        </div>
        <form className='contact-form' autoComplete='off'>
          <div className='form-item_container'>
            <input type='text' name='fullName' placeholder=' ' />
            <label htmlFor='fullName' onClick={labelClick}>
              Full name
            </label>
          </div>
          <div className='form-item_container'>
            <input type='text' name='lastName' placeholder=' ' />
            <label htmlFor='lastName' onClick={labelClick}>
              Last name
            </label>
          </div>
          <div className='form-item_container'>
            <input type='email' name='email' placeholder=' ' />
            <label htmlFor='email' onClick={labelClick}>
              Email
            </label>
          </div>
          <div className='form-item_container'>
            <input type='text' name='phone' placeholder=' ' />
            <label htmlFor='phone' onClick={labelClick}>
              Phone
            </label>
          </div>
          <div className='form-item_container'>
            <textarea name='message' placeholder=' '></textarea>
            <label htmlFor='message' onClick={labelClick}>
              Message
            </label>
          </div>
          <button className='button-default'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
