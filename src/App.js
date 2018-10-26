import React, { Component } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date:'',
      description: '',
      todos: [
        { date: "2018-09-18", description: "RPL Interview for Multicultural Communication Course" },
        { date: "2018-09-27", description: "Front End Development Exam" },
        { date: "2018-09-27", description: "Database Development Exam" },
        { date: "2018-10-18", description: "Intensive Week" }
      ]
    }
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    const resultsItems = 
      { description: this.state.description, date: this.state.date }
    this.setState({
      todos: [...this.state.todos, resultsItems]
    });
  }

  delTodo = (index) => {
    console.log(index);
    let todosNew = [...this.state.todos];
    todosNew.splice(index, 1);
    this.setState({
      todos: todosNew
    });
  }

  render() {

    return (
      <div className="top rounded">
        
        <h1>Simple To-Do List</h1>
        <hr />

        <form onSubmit={this.addTodo}>
          <div className="form-row">
            <div className="form-group col-lg-8">
              <input type="text" className="form-control" name="description" onChange={this.inputChanged} value={this.state.value} placeholder="Enter Task" required />
            </div>   
            <div className="form-group col-lg-3">
              <input type="date" className="form-control" name="date" onChange={this.inputChanged} value={this.state.value} required />
            </div>
            <div className="form-group col-lg-1">
              <input type="submit" className="btn btn-block btn-success" value="Add" />
            </div>
          </div>
        </form>
        
        <br />

        <TodoTable data={this.state.todos} delete={this.delTodo} />

      </div>
    );
  }
}

export default App;
