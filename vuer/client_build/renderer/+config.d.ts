export declare const config: {
    passToClient: string[];
    clientRouting: true;
    hydrationCanBeAborted: true;
    meta: {
        title: {
            env: {
                server: true;
                client: true;
            };
        };
        dataIsomorph: {
            env: {
                config: true;
            };
            effect({ configDefinedAt, configValue }: {
                configValue: unknown;
                configDefinedAt: import('vike/dist/esm/shared/page-configs/getConfigDefinedAt').ConfigDefinedAt;
            }): {
                meta: {
                    data: {
                        env: {
                            server: true;
                            client: true;
                        };
                    };
                };
            } | undefined;
        };
    };
    hooksTimeout: {
        data: {
            error: number;
            warning: number;
        };
    };
};
declare global {
    namespace Vike {
        interface Config {
            /** The page's `<title>` */
            title?: string;
        }
    }
}
