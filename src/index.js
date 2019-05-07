import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//id가 root인 곳에 app.js의 함수 APP을 불러와 render 로 출력시킨다.
//이 root는 index.html에 있다.
//한개의 컴포넌트를 render 하고 있다는 것이고 컴포넌트 이름은 app이다.
//그 app 컴포넌트 안에 여러개의 컴포넌트를 만들 수 있지만 출력은 1개만 하고 있다. 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
