import { StyleSheet } from 'react-native';
import { StyleProp, ImageStyle } from 'react-native';

export default StyleSheet.create({
  HomeScreen__Layout: {
    height: '100%',
  },
  HomeScreen__ScrollView: {
   
  },
  HomeScreen__Layout2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: 10,

  },
  HomeScreen__Layout3: {
    flexDirection: 'row',
    width: '100%',
    height: '13%',
    flexWrap: 'wrap',
  },
  HomeScreen__Text: {

  },
  HomeScreen__FilterIcon: {
    height: 25,
    width: 30,

  },
  CustomOverflowMenu: {
    transform: [
      { translateX: 10 },
      { translateY: -50 },
    ],
  },
  CardComponent: {

  },
  CardComponent__TouchableOpacity: {
    borderWidth: 0.3, 
    borderColor: 'Grey', 
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 6,
    hitSlop: {top: 0, bottom: 0, left: 0, right: 0},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
      },
      backgroundColor: 'white',
    elevation: 4,
  },
  CardComponent__View: {
    
    

  },
  CardComponent__View2: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  
  },
  CardComponent__View3: {
    marginTop: 0,
    marginLeft: 10,

  },
  CardComponent__View4: {
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  CardComponent__View5: {
    borderWidth: 0.3,
    alignItems: 'center',
   
  },
});

export const HomeScreenStyles = {
  HomeScreen__Image: {
    width: "30%",
    height: "90%",
    aspectRatio: 10,
  } as StyleProp<ImageStyle>,
};

export const CardComponentStyles = {
  CardComponent__Image: {
    width: '45%',
    height: 'auto',
    aspectRatio: 1,
    
  } as StyleProp<ImageStyle>,
};

