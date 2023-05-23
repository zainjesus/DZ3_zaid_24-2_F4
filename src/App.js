import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: ''
      });
    }
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h1>Список задач (TODO)</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTask} onChange={this.handleChange} placeholder="Введите задачу" />
          <button type="submit">Добавить</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
