import React from 'react';
import './index.css';
import Contacts from './components/Contacts';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    id: '0'
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    id: '1'
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    id: '2'
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    id: '3'
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    id: '4'
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    id: '5'
}];

export default function App() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Contacts contacts={contacts} />
            </div>
        </div>
    );
}