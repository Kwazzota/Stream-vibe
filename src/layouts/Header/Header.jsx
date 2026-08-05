import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import Button from '@/components/Button'
import BurgerButton from "../../components/BurgerButton";

const Header = (props) => {
  const { url, isFixed } = props

  // Получаем базовый путь автоматически (будет '/' локально и '/Stream-vibe/' на GitHub)
  const baseUrl = import.meta.env.BASE_URL

  const menuItems = [
    {
      label: 'Home',
      href: `${baseUrl}`,
    },
    {
      label: 'Movies & Shows',
      href: `${baseUrl}movies`,
    },
    {
      label: 'Support',
      href: `${baseUrl}support`,
    },
    {
      label: 'Subscriptions',
      href: `${baseUrl}subscriptions`,
    },
  ]

  return (
      <header
          className={classNames('header', {
            'is-fixed': isFixed,
          })}
          data-js-overlay-menu=""
      >
        <div className="header__inner container">
          <Logo
              className="header__logo"
              loading="eager"
          />
          <dialog
              className="header__overlay-menu-dialog"
              data-js-overlay-menu-dialog=""
          >
            <nav className="header__menu">
              <ul className="header__menu-list">
                {menuItems.map(({ label, href }, index) => (
                    <li className="header__menu-item" key={index}>
                      <a
                          className={classNames('header__menu-link', {
                            'is-active': href === url
                          })}
                          href={href}
                      >
                        {label}
                      </a>
                    </li>
                ))}
              </ul>
            </nav>
            <div className="header__actions">
              <Button
                  className="header__button"
                  label="Search"
                  isLabelHidden
                  mode="transparent"
                  iconName="search"
                  hasFillIcon={false}
              />
              <Button
                  className="header__button"
                  label="Notifications"
                  isLabelHidden
                  mode="transparent"
                  iconName="notification"
                  hasFillIcon={false}
              />
            </div>
          </dialog>
          <BurgerButton
              className="header__burger-button visible-tablet"
              extraAttrs = {{
                'data-js-overlay-menu-burger-button': '',
              }}
          />
        </div>
      </header>
  )
}

export default Header