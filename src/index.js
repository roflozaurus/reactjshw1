import شسي from './test';

const devIvan = new شسي('Ivan', 27, 'Отдел по борьбе с мемасами');

import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component{
    render(){
        return <div>
            <h1>{devIvan.name}</h1>
            <p>Здратути, меня зовут {devIvan.name}, мне {devIvan.age} лет. Я работю в {devIvan.department} наркоманом по прикрытию</p>
        </div>
    }
}

ReactDOM.render(<Test />, document.querySelector("#root"));