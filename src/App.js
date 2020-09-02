import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

import Header from './components/Header';
import AccountBalance from './components/AccountBalance';
import ExpensesIncome from './components/ExpensesIncome';
import ExpenseList from './components/ExpenseList';
import AddExpenses from './components/AddExpenses';
import ExpenseListServer from './components/ExpenseListServer';

import './App.css';


function HomeScreen({navigation}) {
  return (
    <View>
      <Text><Header></Header></Text>
      <div className="container">
        <AccountBalance></AccountBalance>
        <ExpensesIncome></ExpensesIncome>
        <ExpenseList></ExpenseList>
        <Button title="Add Expenses/Saving" onPress={() => navigation.navigate('Add Expenses')}></Button>
      </div>
    </View>
  );
}

function AddExpensesScreen({navigation}) {
  return (
    <div className="container">
      <AddExpenses></AddExpenses>
      <Button title="Load Server Expenses List" onPress={() => navigation.navigate('Server Expenses List')}></Button>
    </div>
  );
}

function ServerExpensesScreen() {
  return (
    <div className="container">
      <ExpenseListServer></ExpenseListServer>
    </div>
  );
}

const Stack = createStackNavigator();

function AppNavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add Expenses" component={AddExpensesScreen} />
      <Stack.Screen name="Server Expenses List" component={ServerExpensesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigationStack />
    </NavigationContainer>
  );
}