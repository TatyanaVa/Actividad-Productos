import React from "react";
import { Linking, View, useWindowDimensions } from "react-native";
import {Appbar,Button,Card, Divider,IconButton,Text,TextInput,} from "react-native-paper";
import { styles } from "../../theme/styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import WebView from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.rootHome}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Los libros, mundos infinitos" />
        <IconButton
          icon="book-open-variant"
          size={30}
          onPress={() => navigation.navigate("NewProductScreen")}
        />
      </Appbar.Header>
      <Divider />

      <View>
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri: "https://imagenes.elpais.com/resizer/v2/D2WW45XMHBE3BIM6PKZ6C2G24I.jpg?auth=709d33fa1e9c9e194cf113368522a3b3ec8e9a1546b3fef4d860fc4723c5fc92&width=414",
            }}
          />
        </Card>
        <View>
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaEiIhj6byB-HEEQDcfdF0zeMaIJ2mT_jvn5ZveNx9RWP2FiFXeA6j-apKYJkjnfcJPc&usqp=CAU",
            }}
          />
        </Card>
        </View>
      </View>
      <Divider />

      <View>
        <Button
          style={styles.bottom}
          mode="elevated"
          onPress={() => navigation.navigate("ProductListScreen")}
        >
          Navega en nuestro mundo
        </Button>
      </View>
    </View>
  );
};
