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
import { ROBOTO_MEDIUM, ROBOTO_LIGHT } from 'assets'; // import Fonts

import { Text as Font } from 'theme/index';

/**
 * @typedef TTextType
 * @type { object }
 * @property { any  } url
 * @property { object  } attributes
 * @property { number  } index
 */
type TTextType = {
    attributes: {
        description?: string;
        scrollX?: Animated.Value;
        index?: number;
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes: { description } }: TTextType): JSX.Element => {
    // import font
    let [fontsLoaded] = useFonts({
        'Roboto-medium': ROBOTO_MEDIUM,
        'Roboto-light': ROBOTO_LIGHT,
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <TextContenair>
            <Font center large style={{ fontFamily: 'Roboto-light' }}>
                {description}
            </Font>
        </TextContenair>
    );
};

// Create a AnimatedText component that'll render a <Text> tag with some styles

const TextContenair = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    position: relative;
    width: auto;
`;
