import './Header.css'
import { Link } from 'react-router'

function Header() {

  return (
    <header className='header'>
      <h1 className="hidden">Бронирование номеров в отелях Lagoona</h1>
      <div className="container">
        <div className="container-top">
          <img className="header-logo" src='../src\img\logo.svg' alt="Логотип" />
          <a className="nomber" href="tel:+74953225448"> +7&nbsp;495&nbsp;322-&nbsp;54-&nbsp;48 </a>
          <a className="keyboard_tab" href="#">
            <svg className='svg__header' width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 1.41L14.17 5H0V7H14.17L10.58 10.59L12 12L18 6L12 0L10.59 1.41ZM19 0V12H21V0H19Z" fill="#CC9933" />
            </svg>
            Личный&nbsp;кабинет</a>
        </div>
        <div className="header__bottom">
          <nav className="nav">
            <ul className="nav__lists list-reset">
              <li className="nav__list"><Link to={'/about'}> О нас</Link></li>
              <li className="nav__list"><Link to={'/'}> Главная</Link> </li>
              <li className="nav__list"><Link to={'/map'}> Карта</Link></li>
            </ul>
          </nav>
          <div className="header_wrap-btn">
            <a href="#" className="btn header__btn">Хочу&nbsp;тур</a>
            <button className="btn header__btn">Обратный&nbsp;звонок</button>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header