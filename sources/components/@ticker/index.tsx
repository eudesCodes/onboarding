/*
 Copyright (c) 2020 - 2021 https://eudes.codes/
 @author: Eudes Evrard BOBBOH - EBO
 @country: France
 @email: evrard@eudes.codes
 @website: https://eudes.codes/

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

/* eslint-disable no-undef */
import * as React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { useFonts } from '@use-expo/font'; // useFonts Hooks
import AppLoading from 'expo-app-loading';
import { ROBOTO_BOLD } from 'assets'; // import Fonts

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
        scrollX: Animated.Value;
        slides: any[];
        width: number;
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes: { slides, scrollX, width } }: TTickerType): JSX.Element => {
    // import font
    let [fontsLoaded] = useFonts({
        'Roboto-bold': ROBOTO_BOLD,
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <TickerContenair>
            {slides?.map((item: any, key: number) => {
                // // translateY value
                const translateY = scrollX.interpolate({
                    inputRange: [-width, 0, width],
                    outputRange: [40, 0, -40],
                });

                return (
                    <Font
                        color={item?.color}
                        title
                        key={key.toString()}
                        style={{
                            transform: [{ translateY }],
                            fontFamily: 'Roboto-bold',
                            lineHeight: 40,
                        }}
                    >
                        {item?.heading}
                    </Font>
                );
            })}
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
