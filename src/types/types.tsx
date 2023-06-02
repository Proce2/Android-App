import { ViewStyle } from "react-native/types";

//Types for the HomeScreen
export interface Card {
    title: string;
    description: string;
  }
  
  export interface HomeScreenProps {
    navigation: any; // replace `any` with the correct type for your navigation prop
  }

  export interface CardData {
    title: string;
    description: string;
  }


//Types for CardScreen
export interface CardScreenProps {
    navigation: any; // replace `any` with the correct type for your navigation prop
    route: any; // replace `any` with the correct type for your navigation prop
  }

  
//Types for cardComponent
export interface CardComponentProps {
    card: any;
    index: any;
    navigateDetails: any;
    style?: ViewStyle;
  }

 
