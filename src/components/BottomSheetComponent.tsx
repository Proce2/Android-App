import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Animated } from 'react-native';

const CustomBottomSheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const screenHeight = Dimensions.get("window").height;
  const animation = useRef(new Animated.Value(0)).current;

  const handleOpen = () => {
 
    setIsOpen(true);
   
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
  
    setIsOpen(false);
  
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -1 * screenHeight],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <Text>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {isOpen && (
        <Animated.View style={[styles.bottomSheet, slideUp]}>
          {children}
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default CustomBottomSheet;