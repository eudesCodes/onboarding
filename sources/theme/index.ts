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

import styled from 'styled-components/native';
import { TTextStyled } from 'models/index';
import { Animated } from 'react-native';

/**
 *  Ttheme interface
 * @property { string } mode
 * @property { string } BACKGROUND_COLOR
 * @property { string } TEXT_COLOR_PRIMARY
 * @property { string } TEXT_COLOR_SECONDARY
 * @property { string } TEXT_COLOR_WHITE
 * @property { string } TEXT_COLOR_BLUE
 */
type Ttheme = {
    mode: string;
    BACKGROUND_COLOR: string;
    TEXT_COLOR_PRIMARY: string;
    TEXT_COLOR_SECONDARY: string;
    TEXT_COLOR_WHITE: string;
    TEXT_COLOR_BLUE: string;
};

/**
 * DARK_THEME : dark theme for application
 * @typedef  { object } DARK_THEME
 * @property { string } mode
 * @property { string } BACKGROUND_COLOR   Background color in dark mode
 */
const DARK_THEME: Ttheme = {
    mode: 'dark',
    BACKGROUND_COLOR: '#6FD98B', // 92E3A9
    TEXT_COLOR_BLUE: '#5E8DFF',
    TEXT_COLOR_WHITE: ' #054752',
    TEXT_COLOR_PRIMARY: ' #054752',
    TEXT_COLOR_SECONDARY: ' rgb(112, 140, 145)',
};

/**
 * LIGHT_THEME :  light theme for application
 * @typedef  { object } LIGHT_THEME
 * @property { string } mode
 * @property { string } BACKGROUND_COLOR   Background color in light mode
 */
const LIGHT_THEME: Ttheme = {
    mode: 'light',
    BACKGROUND_COLOR: 'white',
    TEXT_COLOR_WHITE: '#054752',
    TEXT_COLOR_BLUE: '#5E8DFF',
    TEXT_COLOR_PRIMARY: ' #054752',
    TEXT_COLOR_SECONDARY: ' rgb(112, 140, 145)',
};

// exprt Theme
export { DARK_THEME, LIGHT_THEME };

/**
 * Styled component
 */
export const Text = styled(Animated.Text)<TTextStyled>`
    color: ${(props) => props.color ?? 'rgb(112, 140, 145)'};
    margin: ${(props) => props.margin ?? 0};
    padding: ${(props) => props.padding ?? 0};

    ${({ center, right }) => {
        switch (true) {
            case center:
                return 'text-align: center';
            case right:
                return 'text-align: right';
            default:
                return 'text-align: left';
        }
    }}

    ${({ light, bold, havy }) => {
        switch (true) {
            case light:
                return ` font-weight:200`;
            case bold:
                return ` font-weight:700`;
            case havy:
                return ` font-weight:900`;
            default:
                return ` font-weight:400`;
        }
    }}

    ${({ small, medium, large, title }) => {
        switch (true) {
            case small:
                return ` font-size:11px`;
            case medium:
                return ` font-size:13px`;
            case large:
                return ` font-size:16px`;
            case title:
                return ` font-size:35px`;
            default:
                return ` font-size:10px`;
        }
    }}
`;
