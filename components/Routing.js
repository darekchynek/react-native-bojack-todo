import LoginComponent from './LoginComponent';
import CameraComponent from './CameraComponent';
import { createStackNavigator } from 'react-navigation'; 
import ItemsComponent from './ItemsComponent';
import AddItemComponent from './AddItemComponent';

const Routing = createStackNavigator({
  Login: { 
    screen: LoginComponent,
    navigationOptions: () => ({
      header: null
    })
  },
  ItemList: { 
    screen: ItemsComponent,
    navigationOptions: () => ({
      header: null
    })
  },
  AddItem: {
    screen: AddItemComponent,
    navigationOptions: () => ({
      title: "Add New Item"
    })
  },
  Camera: { screen: CameraComponent }
  
})

export default Routing;