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

const ThemeToggleButton = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Button
      title={theme.isDarkMode ? 'Light Mode' : 'Dark Mode'}
      onPress={theme.toggleTheme}
    />
  );
};

const MainApp = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme.isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          headerRight: () => <ThemeToggleButton />,
          tabBarStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          tabBarActiveTintColor: theme.colors.buttonBackground, 
          tabBarInactiveTintColor: theme.colors.text, 
          headerStyle: {
            backgroundColor: theme.colors.cardBackground, 
          },
          headerTintColor: theme.colors.text,
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

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <MainApp />
      </TaskProvider>
    </ThemeProvider>
  );
}