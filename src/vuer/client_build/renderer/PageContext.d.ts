import { ReactElement } from 'react';
declare global {
    namespace Vike {
        interface PageContext {
            Page: Page;
            data?: {
                title?: string;
            };
            config: {
                /** Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
                title?: string;
            };
            abortReason?: string;
            someAsyncProps?: number;
        }
    }
}
type Page = () => ReactElement;
export {};
