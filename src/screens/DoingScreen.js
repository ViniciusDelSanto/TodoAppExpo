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

const DoingScreen = () => {
  const { doingTasks, moveTask } = useContext(TaskContext);
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <SectionTitle theme={theme}>Tarefas em Andamento</SectionTitle>
      <FlatList
        data={doingTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onMoveNext={() => moveTask(item.id, 'doing', 'done')}
          />
        )}
      />
    </Container>
  );
};

export default DoingScreen;