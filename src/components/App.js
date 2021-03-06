/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * commits made to GitHub https://github.com/moeops0000/crm-ProjectFinal_v1.0 
 * Matthew Funnell - 375494205
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, Image,View} from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import reducers from '../reducers/PeopleReducer';
 import Navigation from './Navigation';
 import { Appbar } from 'react-native-paper';
 
 const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
       <Provider store={store}>
         <Appbar.Header style={{backgroundColor: '#c64c38'}}>
           <Appbar.Content color={'#262626'} style={{backgroundColor: '#cb6d4f'}} title="CRM APP" subtitle={'Developed with React Native Developed by Matthew Funnell'} />
         </Appbar.Header>
         <Navigation />
       </Provider>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ffffff',
   },
 });
