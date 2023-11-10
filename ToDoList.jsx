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
  
  const ToDoList = () => {
    return (
      <>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable>
      </>
    );
  };
  
  export default ToDoList;