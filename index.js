/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SecondPage from './app/containers/SecondPage'
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SecondPage);
