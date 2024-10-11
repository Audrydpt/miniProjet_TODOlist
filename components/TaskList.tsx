import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TaskItem } from './TaskItem';

interface TaskListProps {
    tasks: string[];
    onCompleteTask: (index: number) => void;
    onDeleteTask: (index: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask, onDeleteTask }) => (
    <View style={styles.container}>
        {tasks.map((task, index) => (
            <TaskItem
                key={index}
                task={task}
                onComplete={() => onCompleteTask(index)}
                onDelete={() => onDeleteTask(index)}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});