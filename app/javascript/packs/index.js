
import React from 'react'
import ReactDOM from 'react-dom'
//we have to do yarn add react-router and then yarn add react-router-dom
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
    	<Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
