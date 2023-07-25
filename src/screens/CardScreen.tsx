import React  from 'react';
import { Divider, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { View, Text } from "react-native";
import { CardScreenProps} from '../types/types';
//import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BottomSheetComponent from '../components/BottomSheetComponent';


// Renders Icon, associated with top navigation action component
const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);


const CardScreen = ({ navigation, route}: CardScreenProps) => {
  const { card, index } = route.params;
 

// Defines a go back function. Associated with top navigation action component
  const navigateBack = () => {
    navigation.goBack();
  };


// Renders top navigation action
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

// Renders card details 
  return (
    <React.Fragment>
      <TopNavigation title={card.title} alignment='center' accessoryLeft={BackAction} />
      <Divider />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MapView
          style={{ flex: 1, height: '100%', width: '100%' }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
        <BottomSheetComponent>
           <Text>Content goes here</Text>
         </BottomSheetComponent>

      </View>
    </React.Fragment>
  );
};

export default CardScreen;