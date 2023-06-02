import React, { useRef } from 'react';
import { Divider, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { View, Animated } from "react-native";
import { CardScreenProps} from '../types/types';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { PanGestureHandler } from 'react-native-gesture-handler';


// Define BackIcon component in the TopNavigationAction component
const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);


// Define CardScreen 
const CardScreen = ({navigation, route}: CardScreenProps) => {
  const { card, index } = route.params;
  // For the animated view
  const translateY = useRef(new Animated.Value(0)).current;


  // Define onGestureEvent function for the PanGestureHandler
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );




// Define navigateBack function for the TopNavigationAction
  const navigateBack = () => {
    navigation.goBack();
  };


// Define BackAction component for the TopNavigation component
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
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View
           style={{
            transform: [
              {
                translateY: translateY,
              },
            ],
            backgroundColor: 'blue',
            width: 400,
            height: 100,
          }}
          >

            <Animated.Text>"Drag it or touch it to scaled it up"</Animated.Text>



        </Animated.View>
        </PanGestureHandler>
      </View>
    </React.Fragment>
  );
};

export default CardScreen;