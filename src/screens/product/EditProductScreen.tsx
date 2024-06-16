import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Appbar, Button, Divider, TextInput } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { ref, set, get } from "firebase/database";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { dbRealTime } from "../../config/FirebaseConfig";
import { styles } from "../../theme/styles";

interface Props
  extends StackScreenProps<RootStackParamList, "EditProductScreen"> {}

interface ProductForm {
  id: string;
  name: string;
  author: string;
  price: number;
}

export const EditProduct = ({ navigation, route }: Props) => {
  const { product } = route.params;
  const [formProduct, setFormProduct] = useState<ProductForm>({
    id: "",
    name: "",
    author: "",
    price: 0,
  });

  useEffect(() => {
    setFormProduct(product);
  }, [product]);

  const handlerSetValues = (key: string, value: string) => {
    setFormProduct({
      ...formProduct,
      [key]: key === "price" ? Number(value) : value,
    });
  };

  const handlerSaveProduct = async () => {
    if (
      !formProduct.id ||
      !formProduct.name ||
      !formProduct.author ||
      !formProduct.price
    ) {
      return;
    }

    const dbRef = ref(dbRealTime, `products/${formProduct.id}`);
    try {
      await set(dbRef, formProduct);
      navigation.navigate("ProductListScreen");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <View style={styles.rootHome}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Editar Libro" />
        <Appbar.BackAction
          onPress={() => navigation.navigate("ProductListScreen")}
        />
      </Appbar.Header>
      <View>
        <TextInput
          mode="outlined"
          label="ID"
          value={formProduct.id}
          disabled
          style={styles.inputs}
        />
        <Divider />
        <TextInput
          mode="outlined"
          label="Nombre"
          placeholder="Escribe el nombre del producto"
          value={formProduct.name}
          onChangeText={(value) => handlerSetValues("name", value)}
          style={styles.inputs}
        />
        <Divider />
        <TextInput
          mode="outlined"
          label="Autor"
          placeholder="Escribe el autor del producto"
          value={formProduct.author}
          onChangeText={(value) => handlerSetValues("author", value)}
          style={styles.inputs}
        />
        <Divider />
        <TextInput
          mode="outlined"
          label="Precio"
          placeholder="Escribe el precio del producto"
          keyboardType="numeric"
          value={String(formProduct.price)}
          onChangeText={(value) => handlerSetValues("price", value)}
          style={styles.inputs}
        />
      </View>
      <View>
        <Button
          style={styles.bottom}
          mode="elevated"
          onPress={handlerSaveProduct}
        >
          Guardar
        </Button>
      </View>
    </View>
  );
};
