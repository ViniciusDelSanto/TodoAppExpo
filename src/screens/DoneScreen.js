import React, { useContext } from 'react';
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

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const DoneScreen = () => {
  const { doneTasks, archivedTasks, archiveTask } = useContext(TaskContext);
  const theme = useContext(ThemeContext);

  const combinedTasks = [
    { type: 'header', title: 'Tarefas Concluídas' },
    ...doneTasks.map((task) => ({ ...task, type: 'done' })),
    { type: 'header', title: 'Tarefas Arquivadas' },
    ...archivedTasks.map((task) => ({ ...task, type: 'archived' })),
  ];

  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return <SectionTitle theme={theme}>{item.title}</SectionTitle>;
    }

    return (
      <TaskCard
        task={item}
        showArchiveButton={item.type === 'done'}
        onArchive={() => archiveTask(item.id)}
      />
    );
  };

  return (
    <Container theme={theme}>
      <FlatList
        data={combinedTasks}
        keyExtractor={(item) => (item.id ? item.id : item.title)}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default DoneScreen;