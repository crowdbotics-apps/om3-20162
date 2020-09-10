import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging999887Navigator from '../features/Messaging999887/navigator';
import NotificationList1099886Navigator from '../features/NotificationList1099886/navigator';
import Settings1199885Navigator from '../features/Settings1199885/navigator';
import SignIn21399883Navigator from '../features/SignIn21399883/navigator';
import Tutorial1499882Navigator from '../features/Tutorial1499882/navigator';
import BlankScreen099881Navigator from '../features/BlankScreen099881/navigator';
import Settings99866Navigator from '../features/Settings99866/navigator';
import Settings99695Navigator from '../features/Settings99695/navigator';
import Settings99676Navigator from '../features/Settings99676/navigator';
import Settings99657Navigator from '../features/Settings99657/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging999887: { screen: Messaging999887Navigator },
NotificationList1099886: { screen: NotificationList1099886Navigator },
Settings1199885: { screen: Settings1199885Navigator },
SignIn21399883: { screen: SignIn21399883Navigator },
Tutorial1499882: { screen: Tutorial1499882Navigator },
BlankScreen099881: { screen: BlankScreen099881Navigator },
Settings99866: { screen: Settings99866Navigator },
Settings99695: { screen: Settings99695Navigator },
Settings99676: { screen: Settings99676Navigator },
Settings99657: { screen: Settings99657Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
