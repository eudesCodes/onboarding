/* eslint-disable no-undef */
// import some module from node_modules
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';

// import local modules and enums
import { TScreensParam } from 'models/index';
import { ScreensEnum } from 'enums/index';

/**
 * @typedef TOnboardingScreenTypes
 * @type { object }
 * @property {  } navigation
 */
type TOnboardingScreenTypes = {
    navigation: StackNavigationProp<TScreensParam, ScreensEnum.ONBOARDING_SCREEN>;
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ navigation }: TOnboardingScreenTypes): JSX.Element => {
    console.log(navigation.toString());
    return (
        <Contenair>
            <Text>Onboarding Screen avec la navigation</Text>
        </Contenair>
    );
};

// export { OnboardingScreen as default };

// Add  styles
// Create a Contenair component that'll render a <View> tag with some styles
const Contenair = styled.View`
    position: relative;
    background-color: white;
    flex: 1;
    height: 100%;
    flex-direction: column;

    /* background-color: #c7c4eb; */
`;

const Text = styled.Text``;
