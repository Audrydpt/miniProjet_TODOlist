import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskItemProps {
    task: { task: string; completed: boolean };
    onComplete: () => void;
    onDelete: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete }) => (
    <View style={styles.container}>
        <Text style={[styles.text, task.completed ? styles.completed : null]}>{task.task}</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={onComplete}>
                <Text style={styles.buttonText}>👍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onDelete}>
                <Text style={styles.buttonText}>❌</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,
    },
    text: {
        flex: 1,
    },
    completed: {
        color: 'gray',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#FF7F7F',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 5,
    },
    buttonText: {
        color: 'white',
    },
});