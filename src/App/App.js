import {useEffect, useState} from 'react';
import './App.scss';
import Header from '../Header/Header'
import Database from '../Database/Database';
import Counter from '../Counter/Counter';
import HappyPeopleCounter from '../HappyPeopleCounter/HappyPeopleCounter';


const App = () => {
  return (
    <div className = 'App'>
        <Header/>
        <Database/>
        <Counter/>
        <HappyPeopleCounter/>
    </div>
  );
}

export default App;
