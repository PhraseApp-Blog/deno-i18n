export interface IAppConfig {
    supportedLocales: {
        [key: string]: string
    }
}

export const appConfig: IAppConfig = {
    supportedLocales: {
        'en': 'English',
        'gr': 'Greek',
    }
}