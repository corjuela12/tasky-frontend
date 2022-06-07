import { Box } from '@mui/material';
import React from 'react';
import axios from 'axios';

/** Componente dummy usando el API dummy de tasksy */
class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/tasks').then((res) => {
      const tasks = res.data;
      this.setState({ tasks });
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <h1>tasks</h1>
          <ul>
            {tasks.map((task) => (
              <li>
                <b>{task.descripcion}</b>
              </li>
            ))}
          </ul>
        </Box>
      </div>
    );
  }
}

export default TaskPage;
