/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import showGuidePage from './src/showGuidePage';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => showGuidePage);
