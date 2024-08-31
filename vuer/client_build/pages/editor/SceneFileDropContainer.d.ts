import { FileDropContainerProps, ServerEvent, Store } from '@vuer-ai/vuer';
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    stream: Store<ServerEvent>;
} & Omit<FileDropContainerProps, 'onLoad'>>;
export declare const SceneFileDropContainer: ({ stream, children, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
