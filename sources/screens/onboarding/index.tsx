/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import some module from node_modules
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { useWindowDimensions } from 'react-native';

// import local modules and enums
import { TScreensParam } from 'models/index';
import { ScreensEnum } from 'enums/index';

import { ImageFlat, TextFlat } from 'components/index';

import { DELIVERY_SERVICE_IMAGE } from 'assets';

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
    const { width, height } = useWindowDimensions();
    return (
        <Contenair style={{ width, height }}>
            <AnimatedImage>
                <ImageFlat attributes={{ url: DELIVERY_SERVICE_IMAGE }} resizeMode="contain" />
            </AnimatedImage>
            <AnimatedText>
                <TextFlat
                    attributes={{
                        heading: 'Lorem ipsum',
                        description:
                            'Le lorem ipsum est, en imprimerie, une suite de mots Le lorem ipsum est, en imprimerie, une suite de mots',
                    }}
                />
            </AnimatedText>
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
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 0;
    padding: 0;
    z-index: 0;
    width: 100%;
`;

const AnimatedImage = styled.SafeAreaView`
    flex: 1;
    position: relative;
`;

const AnimatedText = styled.SafeAreaView`
    position: absolute;
    bottom: 20px;
    z-index: 10;
    width: auto;
    margin: 0 10px 0 40px;
`;
