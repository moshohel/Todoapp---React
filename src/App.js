import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Post from './Components/Post'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app">
          <Navbar />

          <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
          </div>
          {/* Switch tag lode up one component*/}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            {/* <Route path='/posts/:post_id' component={Post} /> */}
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;