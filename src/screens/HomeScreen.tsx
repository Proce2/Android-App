import React from "react";
import { Layout, Icon } from "@ui-kitten/components";
import { ScrollView, Text} from 'react-native'
import { TopNavigationComponent } from "../components/TopNavigationComponent";
import CardComponent from "../components/CardComponent";
import { Card, HomeScreenProps, CardData } from '../types/types';
import styles from "../styles";


//Renders the HomeScreen 
const HomeScreen = ({navigation}: HomeScreenProps) => {

  const navigateDetails = (card: Card, index: number ) => {
    navigation.navigate('CardDetails', { card, index });
  };


  //Renders TopNavigation component of the HomeScreen
  return (
    <Layout style= {styles.HomeScreen__Layout}>
      <TopNavigationComponent />
      <ScrollView style={styles.HomeScreen__ScrollView}>
        <Layout style={styles.HomeScreen__Layout2} >
          <Text>Gasolineras</Text>
          <Icon name="funnel-outline" style={styles.HomeScreen__FilterIcon}/>
        </Layout >
        {cardData.map((card, index) => <CardComponent card={card} key={index} index={index} navigateDetails={navigateDetails} />)}
      </ScrollView>
    </Layout>
  );
};


const cardData: CardData[] = [
  {title: 'Card 1', description: 'Description for Card 1'},
  {title: 'Card 2', description: 'Description for Card 2'},
  {title: 'Card 3', description: 'Description for Card 3'},
  {title: 'Card 4', description: 'Description for Card 4'},
  {title: 'Card 5', description: 'Description for Card 5'},
  {title: 'Card 6', description: 'Description for Card 6'},
  {title: 'Card 7', description: 'Description for Card 7'},
];


export default HomeScreen;

