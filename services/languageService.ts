import { keys } from 'http://deno.land/x/lodash@4.17.11-es/lodash.js';
import { appConfig } from '../config/i18nConfig.ts';

class LanguageService {
    allSupported(): string[] {
        return keys(appConfig.supportedLocales);
    }

    isSupported(code: string): boolean {
        return !!appConfig.supportedLocales[code];
    }

    value(code: string): string {
        return appConfig.supportedLocales[code];
    }
}

export default new LanguageService();