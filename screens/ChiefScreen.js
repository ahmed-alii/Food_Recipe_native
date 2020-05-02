import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import ChiefResultlists from "../components/ProjectComponents/Chief/Cheiflist";
import {Context} from "../Context/FoodContext";

export default function ChiefScreen({navigation}) {
  const {state, getcheifdata} = useContext(Context);
  const [Ainemate, setanimate] = useState(true);
  console.disableYellowBox = true;

  console.log("...ChiefScreen")
  console.log("Animate is -> ", Ainemate)

  useEffect(() => {
    if (Ainemate === true ){
      console.log("Reload due to animate = true")
      getcheifdata();
      setTimeout(() => {
        setanimate(false);
      }, 3000);
    }
  }, []);



  return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {Ainemate == true ? (
              <ActivityIndicator
                  color="#0000ff"
                  size="large"
                  style={{marginTop: 300}}
              />
          ) : Ainemate == false ? (
              setanimate({type: "Chief", a_type: false})
          ) : (
              <ChiefResultlists
                  navigation={navigation}
                  title="All Chief's"
                  result={state}
                  del_type={false}
              />
          )}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({});
