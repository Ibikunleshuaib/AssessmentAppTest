import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import App from '../../App'

function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>First Screen</Text>
      <TouchableOpacity  style={styles.buttonStyle} onPress={() => navigation.toggleDrawer()}><Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 15}}>Open Drawer</Text></TouchableOpacity>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="First Screen" component={Feed} 
      />
      <Drawer.Screen name="Application Page" component={App} />
    </Drawer.Navigator>
  );
}

export default function SecondPage() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textStyle: { 
    fontWeight: 'bold', 
    fontSize: 30
  },
  buttonStyle: {
    padding: 10, 
    backgroundColor: '#00BE4D', 
    width: '35%', 
    borderRadius: 10, 
    marginTop: 30
  }
})