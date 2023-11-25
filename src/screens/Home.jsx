import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});


function Home({ navigation }){
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
        <MainLayout>
            <>
                <View>
                    <SafeAreaView>
                        <Text style={styles.title}>To Do List</Text>
                        <ToDoList tasks={tasks} />
                        <ToDoForm addTask={addTask} />

                        <Button
                            title="Go to About"
                            onPress={() => navigation.navigate('About')}
                        />
                    </SafeAreaView>
                </View>
            </>
        </MainLayout>
        
    );
}

export default Home