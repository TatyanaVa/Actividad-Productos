import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/HomeScreen';
import { NewProduct } from '../products/NewProduct';
import { EditProduct } from '../screens/product/EditProductScreen';
import { ProductList } from '../products/ProductListScreen';
import { ProductCartScreen } from '../screens/product/ProductCartScreen';

interface Product {
  id: string;
  name: string;
  author: string;
  price: number;
}

export type RootStackParamList={
  HomeScreen: undefined;
  NewProductScreen: undefined;
  ProductListScreen: undefined;
  EditProductScreen: { product: Product };
  ProductScreen: undefined;
  ProductCartScreen:undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (

      <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewProductScreen" component={NewProduct} />
        <Stack.Screen name="ProductListScreen" component={ProductList} />
        <Stack.Screen name="EditProductScreen" component={EditProduct} />
        <Stack.Screen name="ProductCartScreen" component={ProductCartScreen} />
      </Stack.Navigator>

  );
}
