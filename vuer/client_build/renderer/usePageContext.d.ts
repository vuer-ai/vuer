import { default as React } from 'react';
import { PageContext } from 'vike/types';
export { PageContextProvider };
export { usePageContext };
declare function PageContextProvider({ pageContext, children }: {
    pageContext: PageContext;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function usePageContext(): PageContext;
