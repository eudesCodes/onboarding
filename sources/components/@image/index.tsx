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
        url?: any;
        scrollX?: Animated.Value;
        index?: number;
    };
    width?: string | number | Animated.Value | Animated.AnimatedInterpolation;
    resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes: { url }, resizeMode, width }: TImageType): JSX.Element => {
    return <AnimatedImage source={url} style={{ resizeMode, width }} />;
};

// Create a AnimatedImage component that'll render a <Image> tag with some styles
const AnimatedImage = styled(Animated.Image)`
    flex: 1;
    display: flex;
`;
