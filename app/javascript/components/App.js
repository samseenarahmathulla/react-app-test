//React Router - refer https://www.youtube.com/watch?v=hBm5M4u2jLs

import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


class App extends React.Component {
	render () {
		return (
		<div>
			<switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
			</switch>
		</div>
		)
	}
}
export default App