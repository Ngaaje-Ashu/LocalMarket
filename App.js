import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image} from 'react-native';
import LoginSVG from './assets/images/girl.svg'
import Create from './screens/Create';
import LoginScreen from './screens/LoginScreen';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shops from './screens/Shops';
import Homescreen from './screens/Homescreen';
import ProductsDetails from './Components/ProductsDetails';
import add_product from './screens/add_product';
import product_image from './screens/product_image';
import Cart from './Components/Cart';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="login" options={{headerShown:false}}/>
        <Stack.Screen component={Create} name="Create" options={{headerShown:false}}/>
        <Stack.Screen component={Shops} name="Shops" options={{headerShown:false}}/>
        <Stack.Screen component={Login} name="Login" options={{headerShown:false}}/>
        <Stack.Screen component={Homescreen} name="Homescreen" options={{headerShown:false}}/>
        <Stack.Screen component={ProductsDetails} name="ProductsDetails" options={{headerShown:false}}/>
        <Stack.Screen component={add_product} name="add_product" options={{headerShown:false}}/>
        <Stack.Screen component={product_image} name="product_image" options={{headerShown:false}}/>
        <Stack.Screen component={Cart} name="Cart" options={{headerShown:false}}/>
        <Stack.Screen component={Cart} name="Cart" />


      </Stack.Navigator>
      
    </NavigationContainer>
    
    // <Create/>
    
  );
}


