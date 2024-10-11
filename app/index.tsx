import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TaskInput} from '../components/TaskInput';
import {TaskList} from '../components/TaskList';

export const index = () => {

    const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>([]);
    const handleAddTask = (task: string) => {
        setTasks((currentTasks) => [...currentTasks, {task, completed: false}]);
    };

    const handleCompleteTask = (index: number) => {
        setTasks((currentTasks) =>
            currentTasks.map((task, i) => (i === index ? {...task, completed: true} : task))
        );
    };

    const handleDeleteTask = (index: number) => {
        setTasks((currentTasks) => currentTasks.filter((task, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <TaskInput onAddTask={handleAddTask}/>
            <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask}></TaskList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default index;