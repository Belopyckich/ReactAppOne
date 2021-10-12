import {useState, useEffect} from 'react';
import './HappyPeopleCounter.scss';

const HappyPeopleCounter = () => {
    const [timeout, setTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setTime(timeout + 1);
        }, 1000);
        return () => clearInterval()
    })

    return (
        <div className='happyPeopleCounter'>
            <div className='happyPeopleCounter__header'>Количество счастливых людей на планете</div> 
            <div className='HappyPeopleCounter__counter'>{timeout}</div>
        </div>
    )
}

export default HappyPeopleCounter;