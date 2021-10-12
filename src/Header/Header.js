import {useEffect, useState} from 'react';
import './Header.scss';

const Header = () => {
    const [switcher, setSwitcher] = useState(0);

    const ToggleTheme = () => {
        setSwitcher(switcher + 1);
        if (switcher % 2) {
          document.querySelector('.App').style.backgroundColor = 'aqua';
          document.querySelectorAll('.text').forEach(element => {
            element.style.color = 'black';
          });
        }
        else {
          document.querySelector('.App').style.backgroundColor = '#2e2828';
          document.querySelectorAll('.text').forEach(element => {
            element.style.color = 'azure';
          });
        }
      }

    return (
        <header className = "header">
        <div className = "header__statistic text">Добро пожаловать в базу данных пользователей</div>
        <div className = "header__blackTheme">
          <div className = "header__blackTheme__descr text">Смена темы</div>
          <label class="switch">
              <input type="checkbox" value={switcher} onChange={(event) => ToggleTheme()}/>
              <span className="slider round"></span>
          </label>
        </div>
      </header>
    )
}

export default Header;