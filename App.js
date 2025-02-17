import * as React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './src/screens/TodoScreen';
import DoingScreen from './src/screens/DoingScreen';
import DoneScreen from './src/screens/DoneScreen';
import { TaskProvider } from './src/context/TaskContext';
import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';
import { Button } from 'react-native';

const Tab = createBottomTabNavigator();

// Componente para alternar o tema
const ThemeToggleButton = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Button
      title={theme.isDarkMode ? 'Light Mode' : 'Dark Mode'}
      onPress={theme.toggleTheme}
    />
  );
};

// Componente principal do aplicativo
const MainApp = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme.isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          headerRight: () => <ThemeToggleButton />,
          tabBarStyle: {
            backgroundColor: theme.colors.cardBackground, // Cor de fundo da hotbar
          },
          tabBarActiveTintColor: theme.colors.buttonBackground, // Cor do ícone ativo
          tabBarInactiveTintColor: theme.colors.text, // Cor do ícone inativo
          headerStyle: {
            backgroundColor: theme.colors.cardBackground, // Cor de fundo do cabeçalho
          },
          headerTintColor: theme.colors.text, // Cor do título do cabeçalho
        }}
      >
        <Tab.Screen
          name="Todo"
          component={TodoScreen}
          options={{ title: 'Tarefas' }}
        />
        <Tab.Screen
          name="Doing"
          component={DoingScreen}
          options={{ title: 'Em Andamento' }}
        />
        <Tab.Screen
          name="Done"
          component={DoneScreen}
          options={{ title: 'Concluídas' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Componente raiz do aplicativo
export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <MainApp />
      </TaskProvider>
    </ThemeProvider>
  );
}