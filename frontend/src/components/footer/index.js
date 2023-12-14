import style from './footer.module.scss'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
  } from 'react-icons/fa';
  
  const iconeProps = {
    color: 'white',
    size: 24,
  }
const Footer = ()=>{
    return(
        <footer className={style.footer}>
        <div>
          <FaFacebook {...iconeProps} />
          <FaTwitter {...iconeProps} />
          <FaInstagram {...iconeProps} />
        </div>
        <span>
          Desenvolvido por Alura.
        </span>
      </footer>
    )
}

export default Footer