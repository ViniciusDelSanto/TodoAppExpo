import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import TaskCard from '../components/TaskCard';
import { TaskContext } from '../context/TaskContext';
import { ThemeContext } from '../context/ThemeContext';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Input = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 16px;
  padding-horizontal: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
`;

const DescriptionInput = styled.TextInput`
  height: 80px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 16px;
  padding-horizontal: 8px;
  border-radius: 4px;
  text-align-vertical: top;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
`;

const AddButton = styled.Button``;

const TodoScreen = () => {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const { todoTasks, addTask, moveTask } = useContext(TaskContext);
  const theme = useContext(ThemeContext);

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({
        id: Date.now().toString(),
        title: newTask,
        description: newDescription,
      });
      setNewTask('');
      setNewDescription('');
    }
  };

  return (
    <Container theme={theme}>
      <Input
        placeholder="Título da tarefa"
        placeholderTextColor={theme.colors.text}
        value={newTask}
        onChangeText={setNewTask}
        theme={theme}
      />
      <DescriptionInput
        placeholder="Descrição da tarefa"
        placeholderTextColor={theme.colors.text}
        value={newDescription}
        onChangeText={setNewDescription}
        multiline
        theme={theme}
      />
      <AddButton title="Adicionar Tarefa" onPress={handleAddTask} />
      <FlatList
        data={todoTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onMoveNext={() => moveTask(item.id, 'todo', 'doing')}
          />
        )}
      />
    </Container>
  );
};

export default TodoScreen;