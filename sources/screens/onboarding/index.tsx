/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import some module from node_modules
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { useWindowDimensions, Animated } from 'react-native';

// import local modules and enums
import { TScreensParam } from 'models/index';
import { ScreensEnum } from 'enums/index';
import { slides } from 'api';

import { ImageFlat, TextFlat, Ticker, Indicators } from 'components/index';
import { CONNECTED_EARTH_IMAGE } from 'assets';

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
    /**
     * Get device image
     */
    const { width, height } = useWindowDimensions();

    /**
     * @constant
     * @name scrollX
     */
    const scrollX: Animated.Value = React.useRef(new Animated.Value(0)).current;

    return (
        <Contenair style={{ width, height }}>
            <AnimatedTicker>
                <Ticker attributes={{ title: 'Lorem ipsum ' }} />
            </AnimatedTicker>
            <Animated.FlatList
                data={slides}
                renderItem={({ item, index }: any) => {
                    return (
                        <Contenair style={{ width, height }}>
                            <AnimatedImage>
                                <ImageFlat
                                    attributes={{
                                        ...item,
                                        index,
                                        width,
                                        scrollX,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </AnimatedImage>
                            <AnimatedText>
                                <TextFlat attributes={{ ...item, index, scrollX }} />
                            </AnimatedText>
                        </Contenair>
                    );
                }}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                scrollEventThrottle={32}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
            />

            <AnimatedIndicator>
                <Indicators attributes={{ slides, scrollX, width }} />
            </AnimatedIndicator>
        </Contenair>
    );
};

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
    bottom: 10%;
    z-index: 10;
    width: auto;
    margin: 0 10%;
`;

const AnimatedTicker = styled.SafeAreaView`
    position: absolute;
    top: 10%;
    z-index: 10;
    width: auto;
    margin: 0 10%;
`;

const AnimatedIndicator = styled.SafeAreaView`
    position: absolute;
    bottom: 2%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    padding-right: 20px;
`;
