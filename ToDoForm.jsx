// ToDoForm.jsx
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';




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

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState('');

    return (
        <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a new task..."
              value={taskText}
              onChangeText={(text) => setTaskText(text)}
            />
            <Button title="Add" onPress={() => { addTask(taskText); setTaskText(''); }} />
        </View>
        );
};

export default ToDoForm;