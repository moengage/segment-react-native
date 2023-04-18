export enum LogLevel {
    DEBUG = 0,
    WARN = 1,
    ERROR = 2
}

export namespace MoEngageLogger {
    let logLevel: LogLevel = LogLevel.DEBUG;
    let isEnabled: Boolean = __DEV__;

    export function configureLogs(logLevel: LogLevel, isEnabledForReleaseBuild: Boolean = false) {
        logLevel = logLevel;
        isEnabled = isEnabledForReleaseBuild || __DEV__;
    }

    export function debug(tag: string, message: string) {
        if (!isEnabled || logLevel > LogLevel.DEBUG) return;
        console.log(`${tag} ${message}`);
    }

    export function warn(tag: string, message: string) {
        if (!isEnabled || logLevel > LogLevel.WARN) return;
        console.warn(`${tag} ${message}`);
    }

    export function error(tag: string, message: string) {
        if (!isEnabled || logLevel > LogLevel.ERROR) return;
        console.error(`${tag} ${message}`);
    }
}