import React, { useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { Appbar, Avatar, Button, Divider, TextInput } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/styles';
import { RootStackParamList } from '../navigation/StackNavigator';
import { dbRealTime } from '../config/FirebaseConfig';
import { push, ref, set } from 'firebase/database';


interface Props extends StackScreenProps<RootStackParamList,"NewProductScreen">{};

/*interface Props{
  showModalMessage: boolean;
  setShowModalMessage: Function;
}*/
interface ProductForm{
  id:string;
  name:string,
  author:string,
  price: number,
}
export const NewProduct = ({navigation}:Props) => {

  const [formProduct, setFormProduct] = useState<ProductForm>({
    id:'',
    name:'',
    author:'',
    price:0
  })

  const handlerSetValues=(key:string,value:string)=>{
    setFormProduct({...formProduct,[key]:value})
  }
  const handlerSaveProduct= async()=>{
    if(!formProduct.id || !formProduct.name|| !formProduct.author || !formProduct.price){
      return;
    }

    //console.log(formProduct);

    const dbRef=ref(dbRealTime,'products' );
    const saveProduct =push(dbRef);
    try{
      await set(saveProduct,formProduct);
      setFormProduct({
        id:'',
        name:'',
        author:'',
        price:0
      })
    }catch(ex){
    console.log(ex);
  }
  


  }
  return (
    <View style={styles.rootHome}>
        
        <Appbar.Header>
            <Appbar.Content title="Registrar Libros" />
            <Appbar.BackAction onPress={() => navigation.navigate("HomeScreen")} />
            <Appbar.Action size={24} icon="cart" onPress={() =>navigation.navigate("HomeScreen")} />
            <Appbar.Action size={24} icon="book-open-variant" />
        </Appbar.Header>
        <View >
        <TextInput
            mode='outlined'
            label="ID"
            placeholder='Escribe el ID producto'
            onChangeText={(value)=>handlerSetValues('id',value)}
            style={styles.inputs}
            //onChangeText={()=>}
            />
            <Divider/>
            <TextInput
            mode='outlined'
            label="nombre"
            placeholder='Escribe el nombre del producto'
            onChangeText={(value)=>handlerSetValues('name',value)}
            style={styles.inputs}
            //onChangeText={()=>}
            />
            <Divider/>
            <TextInput
            mode='outlined'
            label="autor"
            placeholder='Escribe el autor del producto'
            onChangeText={(value)=>handlerSetValues('author',value)}
            style={styles.inputs}
            //onChangeText={()=>}
            />
            <Divider/>
            <TextInput
            mode='outlined'
            label="precio"
            placeholder='Escribe el precio del producto'
            onChangeText={(value)=>handlerSetValues('price',value)}
            style={styles.inputs}
            //onChangeText={()=>}
            />
        </View>
        
        <View>
            <Button style={styles.bottom}
            mode="elevated" 
            onPress={handlerSaveProduct}>
            Guardar</Button>
        </View>
    </View>
  )
}

//vista la clase del 10 de junio has la 1:22:54
//falta la actualizacion de los campos - agregar imagenes-mejorar diseño