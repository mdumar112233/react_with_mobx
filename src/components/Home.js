import { observer } from 'mobx-react-lite';
import React from 'react';
import userInfo from './UserStore';

const Home = () => {
    const newMath = () => {
        userInfo.setMath('80')
    }
    const newEnglish = () => {
        userInfo.setEnglish('90')
    }
    const apiData = () => {
        userInfo.getNewMarks();
    }
    return (
        <div>
            <h1>Student Information</h1>
            <h2>Name = {userInfo.userName} id -  {userInfo.userID}</h2>
            <h2>Math mark = {userInfo.math}</h2>
            <h2>English mark = {userInfo.english}</h2>
            <h2>Total mark = {userInfo.totalMarks}</h2>

            <button onClick={newMath}>Math mark change</button>
            <button onClick={newEnglish}>English mark change</button>
            <button onClick={apiData}>Call api</button>
        </div>
    );
};

export default observer(Home);