import i18next from 'https://deno.land/x/i18next/index.js';
import i18nextMiddleware from 'https://deno.land/x/i18next_http_middleware/index.js';
import Backend from 'https://deno.land/x/i18next_fs_backend/index.js'
import languageService from './languageService.ts';

i18next
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        preload: languageService.allSupported(),
        resources: {
            en: {
                translation: {
                    welcome: 'hello world'
                }
            },
            el: {
                translation: {
                    welcome: 'Γειά σου Κόσμε'
                }
            }
        }
    })

const handle = i18nextMiddleware.handle(i18next);
export { handle, i18next }
