// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState({ 'In Progress': [], 'In Review': [], Completed: [] });

  const projects = [
    { name: 'Freelance Project', tasks: [] },
    { name: 'SBI Outsource', tasks: [] },
    { name: 'HPCL Project 1', tasks: [] },
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (status, task) => {
    setTasks((prevTasks) => ({ ...prevTasks, [status]: [...prevTasks[status], task] }));
  };

  const deleteTask = (status, taskIndex) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: prevTasks[status].filter((_, index) => index !== taskIndex),
    }));
  };

  return (
    <div className="App">
      <div className="taskboards">
        <h3>Task Boards</h3>
        {projects.map((project, index) => (
          <div key={index} className="project" onClick={() => handleProjectClick(index)}>
            {project.name}
          </div>
        ))}
      </div>

      <div className="center">
        {selectedProject ? (
          <ProjectTasks project={selectedProject} tasks={tasks} openModal={openModal} addTask={addTask} deleteTask={deleteTask} />
        ) : (
          <div>Select a project to view tasks</div>
        )}
      </div>

      {showModal && <AddTaskModal closeModal={closeModal} addTask={addTask} />}
    </div>
  );
};

const ProjectTasks = ({ project, tasks, openModal, addTask, deleteTask }) => {
  return (
    <div className="project-tasks">
      <div className="task-column InProgress">
        <h4 className='col1'>In Progress</h4>
        {tasks['In Progress'].map((task, taskIndex) => (
          <div key={taskIndex} className="task">
            {task.name} - {task.startDate} to {task.deadline}
            <button onClick={() => deleteTask('In Progress', taskIndex)}>Delete</button>
          </div>
        ))}
        <div className="add-btn"  onClick={() => openModal('In Progress')}>
         + Add new
        </div>
      </div>
      <div className="task-column InReview">
        <h4 className='col2'>In Review</h4>
        {tasks['In Review'].map((task, taskIndex) => (
          <div key={taskIndex} className="task">
            {task.name} - {task.startDate} to {task.deadline}
            <button onClick={() => deleteTask('In Review', taskIndex)}>Delete</button>
          </div>
        ))}
        <div className="add-btn" onClick={() => openModal('In Review')}>
          + Add new
        </div>
      </div>
      <div className="task-column Completed">
        <h4 className='col3'>completed</h4>
        {tasks.Completed.map((task, taskIndex) => (
          <div key={taskIndex} className="task">
            {task.name} - {task.startDate} to {task.deadline}
            <button onClick={() => deleteTask('Completed', taskIndex)}>Delete</button>
          </div>
        ))}
        <div className="add-btn" onClick={() => openModal('Completed')}>
          + Add new
        </div>
      </div>
    </div>
  );
};

const AddTaskModal = ({ closeModal, addTask }) => {
  const [task, setTask] = useState({ TaskName: '', startDate: '', deadline: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleAddTask = (status) => {
    const newTask = { ...task, status };
    addTask(status, newTask);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add New Task</h3>
        <label>
          Task Name:
          <input type="text" name="name" value={task.name} onChange={handleInputChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" value={task.startDate} onChange={handleInputChange} />
        </label>
        <label>
          Deadline:
          <input type="date" name="deadline" value={task.deadline} onChange={handleInputChange} />
        </label>
        <button onClick={() => handleAddTask('In Progress')}>Add to In Progress</button>
        <button onClick={() => handleAddTask('In Review')}>Add to In Review</button>
        <button onClick={() => handleAddTask('Completed')}>Add to Completed</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default App;
