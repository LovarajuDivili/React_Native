//import liraries
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../CategoriesImages/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../CategoriesImages/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../CategoriesImages/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../CategoriesImages/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../CategoriesImages/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../CategoriesImages/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../CategoriesImages/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        //backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
