import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface TaskInputProps {
    onAddTask: (task: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={task} onChangeText={setTask} />
            <TouchableOpacity style={styles.button} onPress={() => onAddTask(task)}>
                <Text style={styles.buttonText}>Ajouter tache</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    button: {
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});