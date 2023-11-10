/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    margin: 20,
  },
});


function App() {
  
  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { title: task }]);
  };

  const deleteTask = (taskIndex) => {
    setTasks((prevTasks) => prevTasks.filter((task, index) => index !== taskIndex));
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>To Do List</Text>
      <ToDoList tasks={tasks}  onDeleteTask={deleteTask}/>
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
}


export default App;
