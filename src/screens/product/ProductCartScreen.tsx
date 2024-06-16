import React from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/StackNavigator";


interface Props extends StackScreenProps<RootStackParamList, "ProductCartScreen"> {}

interface Product {
  id: string;
  name: string;
  author: string;
  price: number;
}

export const ProductCartScreen = ({ navigation }: Props) => {
  const cart: Product[] = []; 

  const renderItem = ({ item }: { item: Product }) => (
    <Card style={{ margin: 10 }}>
      <Card.Title title={item.name} subtitle={item.author} />
      <Card.Content>
        <Text>Precio: {item.price}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={() => navigation.goBack()}>Volver</Button>
    </View>
  );
};