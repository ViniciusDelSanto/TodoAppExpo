import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from '../context/ThemeContext';

const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 16px;
  border-radius: 8px;
  margin-vertical: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;

const ArchiveButton = styled.TouchableOpacity`
  margin-top: 8px;
  background-color: #dc3545;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
`;

const TaskCard = ({ task, onMoveNext, showArchiveButton, onArchive }) => {
  const theme = useContext(ThemeContext);

  return (
    <Card theme={theme}>
      <Title theme={theme}>{task.title}</Title>
      {task.description && <Description theme={theme}>{task.description}</Description>}
      {onMoveNext && (
        <Button theme={theme} onPress={onMoveNext}>
          <ButtonText theme={theme}>Move to Next</ButtonText>
        </Button>
      )}
      {showArchiveButton && (
        <ArchiveButton onPress={onArchive}>
          <ButtonText theme={theme}>Arquivar</ButtonText>
        </ArchiveButton>
      )}
    </Card>
  );
};

export default TaskCard;