import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Auth} from '@aws-amplify/auth';
import {AuthContext} from '../context/Authcontext';
import TabRoot from './OrdinaryTabnav';

const Drawer = createDrawerNavigator();
export default drawerRoot = () => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={async () => {
                await Auth.signOut().then(() => signOut());
              }}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={TabRoot} />
    </Drawer.Navigator>
  );
};
