import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const user = {
  userName: "Zuwaynib",
  age: 19,
  complexion: "light"
}

function getUser(user) {
  return (user.userName + ".  Your age is: " + user.age + ". You are " + user.complexion);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const time = (
    <div id="div-id">
      <p>Hello {getUser(user)}</p>
      <p>Current Time: { new Date().toLocaleTimeString()}</p>
    </div>
  );

  root.render(time);
}

setInterval(tick, 2000);

