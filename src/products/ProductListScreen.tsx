import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Appbar, Button, Card } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../theme/styles";
import { RootStackParamList } from "../navigation/StackNavigator";
import { dbRealTime } from "../config/FirebaseConfig";
import { ref, onValue, remove } from "firebase/database";

interface Props
  extends StackScreenProps<RootStackParamList, "ProductListScreen"> {}

interface Product {
  id: string;
  name: string;
  author: string;
  price: number;
}

export const ProductList = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart,setCart]=useState<Product[]>([]);

  useEffect(() => {
    const dbRef = ref(dbRealTime, "products");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const productList = data
        ? Object.keys(data).map((key) => ({ ...data[key], id: key }))
        : [];
      setProducts(productList);
    });
  }, []);

  const handlerDeleteProduct = async (id: string) => {
    const dbRef = ref(dbRealTime, `products/${id}`);
    try {
      await remove(dbRef);
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleAddToCart = (item: Product) => {
    //agregar al carrito, me falta verificar
    //console.log(`Comprando ${item.name}`);
    setCart([...cart,item]);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <Card style={styles.card}>
      <Card.Title title={item.name} subtitle={item.author} />
      <Card.Content>
        <Text>Precio: {item.price}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() =>
          navigation.navigate("EditProductScreen", { product: item })}>Editar</Button>
        <Button onPress={() => handlerDeleteProduct(item.id)}>Eliminar</Button>
        <Button onPress={() => handleAddToCart(item)}>Comprar</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.rootHome}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Descubre un nuevo mundo" />
        <Appbar.BackAction onPress={() => navigation.navigate("HomeScreen")} />
        <Appbar.Action
          size={24}
          icon="plus"
          onPress={() => navigation.navigate("NewProductScreen")}
        />
      </Appbar.Header>
      <FlatList style={styles.header}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
