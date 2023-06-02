import React from "react";
import { Image, View } from "react-native";
import { Text, Avatar } from "@ui-kitten/components";
import { CardComponentProps } from "../types/types";
import styles, { CardComponentStyles } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";


//Renders each card in the list
const CardComponent = ({ card, index, navigateDetails }: CardComponentProps) => (
  <TouchableOpacity style={styles.CardComponent__TouchableOpacity} hitSlop={{top: -20, bottom: -20, left: 0, right: 0}} onPress={() => navigateDetails(card, index)}>
    <View style={styles.CardComponent__View} key={index} >
      <View style={styles.CardComponent__View2}>
        <View style={styles.CardComponent__View3}>
          <Text category="s1">{card.title}</Text>
          <Text category="s1">{card.title}</Text>
          <Text category="s1">{card.title}</Text>
          <Avatar source={require('../assets/image2.png')} />
        </View>
        <View style={styles.CardComponent__View4} >
          <Image style={CardComponentStyles.CardComponent__Image} source={require('../assets/image3.png')} />
        </View>
      </View>
      <View style={styles.CardComponent__View5} >
        <Text>{card.description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default CardComponent;