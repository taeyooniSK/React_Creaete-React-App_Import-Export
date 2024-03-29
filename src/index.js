import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {App as Pizza}  from './App';  export {App}한 것을 Pizza라는 이름으로 이 파일안에서 사용할 수 있음.
import Pet from './Pet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Pet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
