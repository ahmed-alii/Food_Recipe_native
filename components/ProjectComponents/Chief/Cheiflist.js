import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Icon } from "native-base";
import { Context } from "../../../Context/FoodContext";
import userlogcontext from "../../../connection/userLogContext";
import { ListItem } from "react-native-elements";
import { AsyncStorage } from "react-native";

export default list = ({ title, result, navigation, del_type }) => {
  const { data1, data2 } = useContext(userlogcontext);
  const [id, setid] = useState();

  //This file is used to render the list of all the present chief in the API and also in the Favourite list
  
  AsyncStorage.getItem("DataKey").then((value) => {
    setid(JSON.parse(value).id);
  });

  console.disableYellowBox = true;
  const { delfavchief } = useContext(Context);

  if(result) {
    const filteredResults = result.filter(function(item) {
      return item != null;
    });

    return (
        <View style={{flex: 1}}>
          <Text style={styles.title}>{title}</Text>
          <ScrollView style={{flex: 1}}>
            {filteredResults.map((item, key) => (
                <ListItem
                    key={key}
                    leftAvatar={{
                      source: require("../../../assets/images/Chief.jpeg"),
                    }}
                    title={item.name}
                    subtitle={<Text numberOfLines={1}>{item.about}</Text>}
                    bottomDivider
                    rightAvatar={
                      del_type === true ? (
                          <TouchableOpacity
                              style={{
                                fontSize: 22,
                                marginLeft: 50,
                              }}
                              onPress={() => {
                                delfavchief(item.id, id, () => {
                                  navigation.navigate("Profile");
                                });
                              }}
                          >
                            <Icon
                                name="trash-alt"
                                style={{ color: "red", fontSize: 32 }}
                                type="FontAwesome5"
                            />
                          </TouchableOpacity>
                      ) : null
                    }
                    chevron={true}
                    onPress={() => {
                      navigation.navigate("ChiefProfile", {
                        cid: item.id,
                      });
                    }}
                />
            ))}
            <Text style={{marginVertical: 50, textAlign: "center"}}>...</Text>
          </ScrollView>
        </View>
    );
  }
  else{
    return (
        <View>
          <Text style={styles.title}>{title}</Text>
          <ScrollView>
            <Text style={{textAlign: "center"}}>No Favourites found.</Text>
          </ScrollView>
        </View>
    )
  }

};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 25,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

// <FlatList
//     vertical
//     showsHorizontalScrollIndicator={false}
//     data={result}
//     keyExtractor={() => "" + Math.floor(Math.random() * 99999)}
//     renderItem={({item}) => {
//       return (
//           <TouchableOpacity
//               onPress={() =>
//                   navigation.navigate("ChiefProfile", {
//                     cid: item.id,
//                   })
//               }
//           >
//             {item !== null ? (
//                 <View>
//                   <View
//                       style={{
//                         marginHorizontal: 10,
//                       }}
//                   >
//                     <View>
//                       <Card style={{marginVertical: 10}}>
//                         <CardItem>
//                           <Image
//                               style={styles.image}
//                               source={{
//                                 uri: item.pic,
//                               }}
//                           />
//                         </CardItem>
//                         <CardItem>
//                           <Body>
//                             <Text style={{fontSize: 18}}>{item.name}</Text>
//                           </Body>
//                           <Right>
//                             {del_type == true && item !== null ? (
//                                 <TouchableOpacity
//                                     style={{
//                                       fontSize: 22,
//                                     }}
//                                     onPress={() => {
//                                       delfavchief(item.id, id, () => {
//                                         navigation.navigate("Profile");
//                                       });
//                                     }}
//                                 >
//                                   <Icon
//                                       name="trash-alt"
//                                       style={{color: "red", fontSize: 32}}
//                                       type="FontAwesome5"
//                                   />
//                                 </TouchableOpacity>
//                             ) : null}
//                           </Right>
//                         </CardItem>
//                         <CardItem footer style={{flexDirection: "row"}}>
//                           <Left>
//                             <Text style={{fontSize: 18, paddingRight: 10}}>
//                               <Icon
//                                   style={{fontSize: 18, color: "red"}}
//                                   name="silverware-fork-knife"
//                                   type="MaterialCommunityIcons"
//                               />
//                               {item.category === undefined
//                                   ? "NaN"
//                                   : result.category}
//                             </Text>
//                           </Left>
//                           <Body
//                               style={{
//                                 flexGrow: 1,
//                                 borderLeftWidth: 1,
//                                 borderRightWidth: 1,
//                               }}
//                           >
//                             <AirbnbRating
//                                 count={
//                                   item.rate !== undefined
//                                       ? item.rate
//                                       : Math.floor(Math.random() * 5) + 1
//                                 }
//                                 reviews={[
//                                   "Terrible",
//                                   "Bad",
//                                   "OK",
//                                   "Good",
//                                   "Delicus",
//                                 ]}
//                                 size={20}
//                             />
//                           </Body>
//                           <Right
//                               style={{
//                                 flexDirection: "row",
//                                 justifyContent: "flex-end",
//                               }}
//                           >
//                             <Text style={{fontSize: 18}}>
//                               {item.views !== undefined
//                                   ? item.views
//                                   : Math.floor(Math.random() * 5) + 1}
//                             </Text>
//                             <Icon
//                                 name="eye"
//                                 type="FontAwesome5"
//                                 style={{fontSize: 20}}
//                             />
//                           </Right>
//                         </CardItem>
//                       </Card>
//                     </View>
//                   </View>
//                 </View>
//             ) : null}
//           </TouchableOpacity>
//       );
//     }}
// />
