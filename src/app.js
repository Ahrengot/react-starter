// elm-css
import './css/main.css';

import React from 'react'
import ReactDOM from 'react-dom'

const initialState = {
  title: "Hello from React",
  repoLink: "https://github.com/Ahrengot/react-starter"
}

let state = initialState;

const App = props => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>{ props.title }</h1>
        <a href={ props.repoLink }>View project on GitHub</a>
      </header>
    </div>
  )
}

const container = document.querySelector("#app");
const render = state => {
  ReactDOM.render (<App {...state} />, container );
}

render(state);
