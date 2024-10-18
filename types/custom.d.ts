declare module '@wdio/types' {
    interface Capabilities {
        'wdio:vscodeOptions'?: {
            extensionPath: string;
            userSettings?: Record<string, any>;
        };
    }
}