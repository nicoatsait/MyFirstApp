/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react' ;
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
  
  const [tasks, setTasks] = React.useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog',
    ]
    );

  const addTask = (task) => {
    // Implement the logic to add a new task to the list of tasks
    if (task) {
      setTasks([...tasks, task]);
    } else {
      alert('Please enter a task');
    }
      
  };


  return (
    <SafeAreaView>
      <Text style={styles.title}>To Do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}


export default App;
