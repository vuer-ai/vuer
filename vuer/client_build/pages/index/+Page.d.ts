import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';
import * as THREE from 'three';
import * as JSX from 'react/jsx-runtime';
import * as FIBER from '@react-three/fiber';
import * as VUER from '@vuer-ai/vuer';
import * as Drei from '@react-three/drei';
import * as XR from '@react-three/xr';
declare global {
    interface Window {
        React: typeof React;
        ReactDOM: typeof ReactDOM;
        VUER: typeof VUER;
        THREE: typeof THREE;
        JSX: typeof JSX;
        FIBER: typeof FIBER;
        XR: typeof XR;
        Drei: typeof Drei;
    }
}
declare function Page(): JSX.JSX.Element;
export default Page;
