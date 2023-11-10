// ToDoForm.jsx
import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';




const styles = {
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
};

const ToDoForm = ({ onAddTask }) => {
    
    const [input, setInput] = React.useState('');

    const handleAddTask = () => {
        if (input.trim() === '') {
            Alert.alert('Please enter a task');
        } else {
            onAddTask(input);
            setInput('');
        }
        
        
    };

    return (
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={input}
            onChangeText={setInput}
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
        );
};

export default ToDoForm;