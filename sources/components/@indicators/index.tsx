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

/**
 * @typedef TIndicatorsType
 * @type { object }
 * @property { any  } url
 * @property { object  } attributes
 * @property { number  } index
 */
type TIndicatorsType = {
    attributes: {
        scrollX: Animated.Value;
        slides: any[];
        width: number;
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes: { slides, scrollX, width } }: TIndicatorsType): JSX.Element => {
    // import font

    return (
        <IndicatorsContenair>
            {slides?.map((_: any, index: number) => {
                const dotWidth = scrollX.interpolate({
                    inputRange: [(index - 1) * width, index * width, (index + 1) * width],
                    outputRange: [8, 20, 8],
                    extrapolate: 'clamp',
                });
                return <AnimatedView key={index.toString()} style={{ width: dotWidth }} />;
            })}
        </IndicatorsContenair>
    );
};

// Create a IndicatorsContenair component that'll render a <SafeAreaView> tag with some styles

const IndicatorsContenair = styled.SafeAreaView`
    flex: 1;
    position: relative;
    width: auto;
    flex-direction: row;
`;

// Create a AnimatedView component that'll render a <View> tag with some styles
const AnimatedView = styled(Animated.View)`
    position: relative;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    margin-right: 10px;
    background-color: #92e3a9;
`;
