import React from 'react';
import { ScrollView, Pressable, View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 20,
        padding: 5,
        borderWidth: 2.5,
        borderRadius: 5,
        borderColor: '#ccc',
    },
  });
  
  const ToDoList = ({tasks}) => {
    return (
      <>
        <ScrollView>
          {tasks.map((task, index) => (
            <Pressable key={index}>
              <View style={[styles.task]}>
                <Text style={[styles.taskText]}>{task}</Text>
              </View>
            </Pressable>
            ))}
        </ScrollView>
      </>
    );
  };
  
  export default ToDoList;