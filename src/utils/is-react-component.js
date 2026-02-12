/* We cannot use type `unknown` instead of `any` here because it will break the type assertion `isReactComponent` function is providing. */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";



/**
 * Checks if a given value is a function component.
 */
export const isFunctionComponent = (component) is React.FC<any> => {
    return typeof component === "function";
};

/**
 * Checks if a given value is a class component.
 */
export const isClassComponent = (component) is React.ComponentClass<any, any> => {
    return typeof component === "function" && component.prototype && (!!component.prototype.isReactComponent || !!component.prototype.render);
};

/**
 * Checks if a given value is a forward ref component.
 */
export const isForwardRefComponent = (component) is React.ForwardRefExoticComponent<any> => {
    return typeof component === "object" && component !== null && component.$$typeof.toString() === "Symbol(react.forward_ref)";
};

/**
 * Checks if a given value is a valid React component.
 */
export const isReactComponent = (component) is ReactComponent => {
    return isFunctionComponent(component) || isForwardRefComponent(component) || isClassComponent(component);
};

