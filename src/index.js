import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const user = {
  userName: "Zuwaynib",
  age: 22,
  complexion: "dark"
}

function getUser(user) {
  return (user.userName + ".  Your age is: " + user.age + ". You are " + user.complexion);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div id="div-id">
      <p>Hello {getUser(user)}</p>
      <p>Current Time: { new Date().toLocaleTimeString()}</p>
    </div>
  );

  root.render(element);
}

setInterval(tick, 1000);




// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
