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
 * @typedef TImageType
 * @type { object }
 * @property { any  } url
 * @property { object  } attributes
 * @property { number  } index
 */
type TImageType = {
    attributes: {
        url: any;
        scrollX: Animated.Value;
        index: number;
        width: number;
        resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({
    attributes: { url, index, scrollX, width, resizeMode },
}: TImageType): JSX.Element => {
    /**
     * Get device image
     */

    // inputRange
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    // scale value
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
        extrapolate: 'clamp',
    });
    return <AnimatedImage source={url} style={{ resizeMode, width, transform: [{ scale }] }} />;
};

// Create a AnimatedImage component that'll render a <Image> tag with some styles
const AnimatedImage = styled(Animated.Image)`
    flex: 1;
    display: flex;
`;
