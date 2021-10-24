import { applySnapshot, flow, onSnapshot, types } from "mobx-state-tree";
import axios from 'axios';

const userModel = types

.model('user', {
    userID: types.string,
    userName: types.string,
    math: types.number,
    english: types.number
})

.actions((self) => ({

    setMath(value){
        self.math = parseInt(value);
    }, 
    setEnglish(value){
        self.english = parseInt(value);
    },
    getNewMarks: flow(function* getNewMarks(){
        const data = yield axios.get('https://jsonplaceholder.typicode.com/users'); 
        console.log(data.data[0].id);
        applySnapshot(self, {
            ...self,
            math: data.data[0].id
        })
    }),

    afterCreate(){
        onSnapshot(self, (snapshot) => console.log(snapshot))
        console.log('i am called');
    }
}))

.views((self) => ({
    get totalMarks() {
        return self.english + self.math;
    }
}))

const users = userModel.create({
    userID: 'hf234',
    userName: 'umar faruk',
    math: 83,
    english: 29
})

export default users;