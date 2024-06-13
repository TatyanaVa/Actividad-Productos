import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { NewProduct } from '../products/NewProduct';

export type RootStackParamList={
  HomeScreen:undefined;
  ProductScreen:undefined;
  NewProductScreen:undefined;
}
const Stack=createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='HomeScreen'
    screenOptions=
    {{headerShown:false,

    }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="NewProductScreen" component={NewProduct} />
      </Stack.Navigator>
  );
}
