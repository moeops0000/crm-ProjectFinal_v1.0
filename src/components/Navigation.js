import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ROI Home" component={LandingPage} />
      <Tab.Screen name="Employee List" component={PeopleList} />
      <Tab.Screen name="Add Employee" component={AddPerson}/>
      <Tab.Screen name="Department List" component={CompanyList} />
    </Tab.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
