const styles = {
    task: {
      // your styles here
    },
    completed: {
      // your styles here
    },
    taskText: {
      // your styles here
    },
  };
  
  const ToDoList = () => {
    return (
      <ScrollView>
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
      </ScrollView>
    );
  };
  
  export default ToDoList;