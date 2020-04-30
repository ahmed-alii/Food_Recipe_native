import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon, Content } from "native-base";
import ResultlistDetails from "../ConstentListUI/listdetail";
import { Context } from "../../../Context/FoodContext";
import userlogcontext from "../../../connection/userLogContext";

export default list = ({ title, result, del_type, navigation }) => {
  console.disableYellowBox = true;

  if (typeof resultt === "object") {
  }

  if (del_type == undefined) {
    del_type = false;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={() => "" + Math.floor(Math.random() * 99999)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecipeDetail", {
                  id: item.id,
                })
              }
            >
              {item !== null ? (
                <ResultlistDetails
                  result={item}
                  del_type={del_type}
                  navigation={navigation}
                />
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 25,
  },
});
