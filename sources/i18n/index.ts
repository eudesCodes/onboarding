import i18next from 'i18next';
import { en } from '_locale.json';

i18next.init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'en',
    resources: {
        en: {
            translation: en,
        },
    },
});

export default i18next;
