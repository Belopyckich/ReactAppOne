import {useState} from 'react';

const Database = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [users, setUsers] = useState([
        {name: 'serega',age: '21',job: 'Programmer'},
        {name: 'igor',age: '23',job: 'Operator'},
        {name: 'eugene',age: '26',job: 'President'}
    ])
    const [countUsers, setCountUsers] = useState(users.length);

    const user = users.map(us => {
        return <div>Имя: {us.name},Возраст: {us.age},Работа: {us.job}</div>
    })
        
    const addUser = () => {
        setUsers([...users, {name, age, job}]);
        setName('');
        setAge('');
        setJob('');
        setCountUsers(users.length+1);
    }

    return (
        <div className='database'>
            <div className = "database__header text">Текущее количество пользователей {countUsers} </div>
            <div className = "database__content text">{user}</div>
            <input value = {name} placeholder = 'Введите имя' onChange = {(event) => setName(event.target.value)}></input>
            <input value = {age} placeholder = 'Введите возраст' onChange = {(event) => setAge(event.target.value)}></input>
            <input value = {job} placeholder = 'Введите работу' onChange = {(event) => setJob(event.target.value)}></input>
            <button onClick = {(event) => addUser()}>addUser</button>
        </div>
    )
}

export default Database;
