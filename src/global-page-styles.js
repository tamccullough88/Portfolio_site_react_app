import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--backgroundImage2",
        "display": "flex",
        "width": "100%",
        "overflow-y": "hidden",
        "overflow-x": "hidden",
        "position": "static",
        "height": "100hv",
        "align-items": "flex-start",
        "justify-content": "center",
        "align-content": "center",
        "min-width": "",
        "min-height": "",
        "flex-direction": "column"
    },
    "index": {
        "background": "--backgroundImage2",
        "display": "flex",
        "width": "100%",
        "overflow-y": "hidden",
        "overflow-x": "hidden",
        "position": "static",
        "height": "100hv",
        "align-items": "flex-start",
        "justify-content": "center",
        "align-content": "center",
        "min-width": "",
        "min-height": "",
        "flex-direction": "column"
    },
    "projects": {
        "background": "--backgroundImage2",
        "display": "flex",
        "width": "100%",
        "overflow-y": "hidden",
        "overflow-x": "hidden",
        "position": "static",
        "height": "100hv",
        "align-items": "flex-start",
        "justify-content": "center",
        "align-content": "center",
        "min-width": "",
        "min-height": "",
        "flex-direction": "column"
    },
    "about": {
        "background": "--backgroundImage2",
        "display": "flex",
        "width": "100%",
        "overflow-y": "hidden",
        "overflow-x": "hidden",
        "position": "static",
        "height": "100hv",
        "align-items": "flex-start",
        "justify-content": "center",
        "align-content": "center",
        "min-width": "",
        "min-height": "",
        "flex-direction": "column"
    },
    "contact": {
        "background": "--backgroundImage2",
        "display": "flex",
        "width": "100%",
        "overflow-y": "hidden",
        "overflow-x": "hidden",
        "position": "static",
        "height": "100hv",
        "align-items": "flex-start",
        "justify-content": "center",
        "align-content": "center",
        "min-width": "",
        "min-height": "",
        "flex-direction": "column"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
