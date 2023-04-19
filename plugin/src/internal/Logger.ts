/**
 * Supported LogLevel by {@link MoEngageLogger}
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
export enum LogLevel {

    /**
     * Log Level Debug Log 
     */
    DEBUG = 0,

    /**
     * Log Level Warning
     */
    WARN = 1,

    /**
     * Log Level Error
     */
    ERROR = 2,

    /**
     * No Log Will be printed (even in debug build)
     */
    NO_LOG = 99
}


/**
 * Logger For MoEngage Segment Plugin
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
export namespace MoEngageLogger {

    /**
     * Min log level which need to be logged on console
     */
    let logLevel: LogLevel = LogLevel.DEBUG;

    /**
     * Whether the log is enabled or not
     * Note: Log is enabled in debug build by default & disabled in released build
     */
    let isEnabled: boolean = __DEV__;

    /**
     * Configure the logging in MoEngage Segment Plugin
     * 
     * @param {LogLevel} logLevel = log level which need to be logged on console
     * @param {boolean} isEnabledForReleaseBuild = whether log is enabled for release build or not
     */
    export function configureLogs(logLevel: LogLevel, isEnabledForReleaseBuild: boolean = false): void {
        logLevel = logLevel;
        isEnabled = isEnabledForReleaseBuild || __DEV__;
    }

    /**
     * Console debug log
     * 
     * @param {string} tag - tag which will be added before message
     * @param {string} message - log message which need to be logged
     */
    export function debug(tag: string, message: string): void {
        if (!isEnabled || logLevel > LogLevel.DEBUG) return;
        console.log(`${tag} ${message}`);
    }

    /**
     * Console warning log
     * 
     * @param {string} tag - tag which will be added before message
     * @param {string} message - log message which need to be logged
     */
    export function warn(tag: string, message: string): void {
        if (!isEnabled || logLevel > LogLevel.WARN) return;
        console.warn(`${tag} ${message}`);
    }

    /**
     * Console error log
     * 
     * @param {string} tag - tag which will be added before message
     * @param {string} message - log message which need to be logged
     */
    export function error(tag: string, message: string): void {
        if (!isEnabled || logLevel > LogLevel.ERROR) return;
        console.error(`${tag} ${message}`);
    }
}