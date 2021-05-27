/* eslint-disable no-undef */
import * as React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { useFonts } from '@use-expo/font'; // useFonts Hooks
import AppLoading from 'expo-app-loading';
import { ROBOTO_MEDIUM } from 'assets'; // import Fonts

import { Text as Font } from 'theme/index';

/**
 * @typedef TTickerType
 * @type { object }
 * @property { any  } url
 * @property { object  } attributes
 * @property { number  } index
 */
type TTickerType = {
    attributes: {
        title?: string;
        scrollX?: Animated.Value;
        index?: number;
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes }: TTickerType): JSX.Element => {
    // import font
    let [fontsLoaded] = useFonts({
        'Roboto-medium': ROBOTO_MEDIUM,
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <TickerContenair>
            <Font title style={{ fontFamily: 'Roboto-medium' }}>
                {attributes?.title}
            </Font>
        </TickerContenair>
    );
};

// Create a AnimatedTicker component that'll render a <View> tag with some styles

const TickerContenair = styled.SafeAreaView`
    flex-direction: column;
    flex: 1;
    position: relative;
    width: 100%;
`;
