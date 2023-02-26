import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='logo'>
          <Image src={'/image/logo-dark.svg'} alt={'WLRP application logo'} width={679} height={195} />
        </div>

        <div className='social-networks'>
          <h2>Follow Us On Our Social Media</h2>
          <div className='content-button'>
            <a href='#' className='social-button instagram'>
              <i className='fab fa-instagram'></i>
              <span>Instagram</span>
            </a>
            <a href='#' className='social-button twitter'>
              <i className='fab fa-twitter'></i>
              <span>Twitter</span>
            </a>
            <a href='#' className='social-button facebook'>
              <i className='fab fa-linkedin'></i>
              <span>Linkedin</span>
            </a>
            <a href='#' className='social-button github'>
              <i className='fab fa-github'></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className='copy'>
        <span>Todos los derechos reservados © 2023</span>
      </div>
    </footer>
  );
};
