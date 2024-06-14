import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../theme/styles';
import { Appbar } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { onValue, ref } from 'firebase/database';
import { dbRealTime } from '../../config/FirebaseConfig';


interface Props extends StackScreenProps<RootStackParamList,"ProductScreen">{};

interface ProductForm{
  id:string;
  name:string,
  author:string,
  price: number,
}
//const [products, setProducts] = useState<ProductForm> ();
const getAllProducts=()=>{
  const dbRef=ref(dbRealTime,'products');
  onValue(dbRef,(snapshot)=>{
    const data=snapshot.val();
    const getKeys=Object.keys(data);
    const listProducts:ProductForm[]=[];
    getKeys.forEach((key)=>{
      const value={...data[key],id:key}
      listProducts.push(value);
    })
    
  })
}
export const ProductScreen = ({navigation}:Props) => {


  return (
    <View style={styles.root}>
        <Text>Productos</Text>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.navigate("HomeScreen")} />
            <Appbar.Content title="Title" />
        </Appbar.Header>

    </View>
  )
}
