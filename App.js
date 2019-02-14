import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Inventory from "./src/Screens/Inventory"





const AppNavigator = createStackNavigator({
  Home: {
    screen: Inventory,
    navigationOptions: { header: null } 
  },
  
 
},


);


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}