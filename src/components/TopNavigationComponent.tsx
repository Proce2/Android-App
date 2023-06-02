import React from 'react';
import { Image } from 'react-native';
import { Icon, TopNavigation, Layout, TopNavigationAction, OverflowMenu, MenuItem  } from '@ui-kitten/components';
import styles, { HomeScreenStyles } from '../styles';


// Renders the menu icon for the TopNavigationAction component 
const MenuIcon = (props: any) => (
  <Icon {...props} name='menu-outline'/>
);


// Renders the InfoIcon for the OverflowMenu
const InfoIcon = (props: any) => (
  <Icon {...props} name='info'/>
);


// Renders a logout icon for the OverflowMenu
const LogoutIcon = (props: any) => (
  <Icon {...props} name='log-out'/>
);


// HERE RENDERS THE TopNavigationComponent
export const TopNavigationComponent = () => {

  
  const [menuVisible, setMenuVisible] = React.useState(false);


// Toggles the visibility of the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


// Renders TopNavigationAction component as renderMenuAction
  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  );


// Renders the overflow menu action along with its associated menu
  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        style={styles.CustomOverflowMenu}
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>    
        <MenuItem accessoryLeft={InfoIcon} title='About'/>
        <MenuItem accessoryLeft={LogoutIcon} title='Logout'/>
      </OverflowMenu>
    </React.Fragment>
  );


  // Renders a component in the TopNavigation component
  const renderTitle = () => (
    <Layout style={styles.HomeScreen__Layout3}>
      <Image
        style={HomeScreenStyles.HomeScreen__Image}
        source={require('../assets/image.png')}
      />
    </Layout>

  );


// Renders the TopNavigation component 
  return (
    <TopNavigation
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
    />
  );
};

