import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { Appbar, Avatar, Button, Divider, TextInput } from 'react-native-paper';
import { styles } from '../../theme/styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';


interface Props extends StackScreenProps<RootStackParamList,"HomeScreen">{};

export const HomeScreen = ({navigation}:Props) => {
  const {height} =useWindowDimensions();
  
  return (
    <View style={styles.rootHome}>
        
        <Appbar.Header>
            <Appbar.Content title="Registrar Libros" />
            <Appbar.Action size={24} icon="cart" onPress={() =>navigation.navigate("ProductScreen")} />
            <Appbar.Action size={24} icon="book-open-variant" />
        </Appbar.Header>
        <View>
            <Button style={styles.bottom}
            mode="elevated" 
            onPress={() => console.log('Pressed')}>
            Guardar</Button>
        </View>
        <View>
          <Button style={styles.bottom}
          mode='elevated'
          onPress={()=>navigation.navigate('NewProductScreen')}
          >Nuevo</Button>
        </View>
    </View>
  )
}
