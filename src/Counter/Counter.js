import {useState} from 'react';
import './Counter.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [buttons, setButtons] = useState([{name: '++'} ,{name: '--'} , {name: 'reset'}]);

    const changeNumber = (event) => {

    switch (event) {
        case '++':
            setCounter(counter + 1)
        break;
        case '--':
            setCounter(counter - 1)
        break;
        case 'reset':
            setCounter(0)
        break;
        
        default:
        break;
        }
    }

    const button = buttons.map(item => {
        return <button name = {item.name} onClick={(event) => changeNumber(event.target.name)}>{item.name}</button>
    })
    
    return (
        <div className = 'counter'>
            <div className = 'counter__header'>Простейший счетчик</div>
            <div className = 'counter__counter'></div>{counter}
            <div className = 'counter__buttons'>{button}</div>
        </div>
      )
}

export default Counter;