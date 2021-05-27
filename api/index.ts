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

import {
    MOBILE_PAIEMENT_IMAGE,
    ONLINE_MOBILE_PAIEMENT_IMAGE,
    SHARED_PAIEMENT_IMAGE,
    ENJOIE_LIFE_IMAGE,
} from 'assets';

const slides = [
    {
        id: 1,
        heading: 'Lorem ipsum',
        description: 'Le lorem ipsum est, en imprimerie, une suite de mots',
        url: MOBILE_PAIEMENT_IMAGE,
        color: '#92E3A9',
    },
    {
        id: 2,
        heading: 'Lorem ipsum',
        description: 'Le lorem ipsum est, en imprimerie, une suite de mots',
        url: ONLINE_MOBILE_PAIEMENT_IMAGE,
        color: '#FF725E',
    },
    {
        id: 3,
        heading: 'Lorem ipsum',
        description: 'Le lorem ipsum est, en imprimerie, une suite de mots',
        url: ENJOIE_LIFE_IMAGE,
        color: '#4E98ED',
    },
    {
        id: 4,
        heading: 'Lorem ipsum',
        description: 'Le lorem ipsum est, en imprimerie, une suite de mots',
        url: SHARED_PAIEMENT_IMAGE,
        color: '#4E98ED',
    },
];

export { slides };
