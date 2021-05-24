// import some module from node_modules
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import local modules and enums
import { TScreensParam } from 'models/index';
import { ScreensEnum } from 'enums/index';

// import Screen
import { OnboardingScreen } from 'screens/index';
/**
 * Created a stack navigator object
 * @constant StackNavigator
 */
const StackNavigator = createStackNavigator<TScreensParam>();

// eslint-disable-next-line react/display-name
export default () => (
    <StackNavigator.Navigator headerMode="none">
        <StackNavigator.Screen
            name={ScreensEnum.ONBOARDING_SCREEN}
            component={OnboardingScreen}
        ></StackNavigator.Screen>
    </StackNavigator.Navigator>
);
