import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import { Header } from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import TodosState from './context/Todos/TodosState'

const App: React.FC = () => {
  return (
    <TodosState>
      <div className="App container-fluid">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </TodosState>
  )
}

export default App
