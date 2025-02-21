import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Ensure the path is correct
import appJson from '../App.json';
import { createRoot } from 'react-dom/client';

const appName = appJson.name;

document.addEventListener('DOMContentLoaded', () => {
    const rootTag = document.getElementById('app');

    if (rootTag) {
        console.log("✅ Rendering App on Web...");
        const root = createRoot(rootTag);
        root.render(<React.StrictMode><App /></React.StrictMode>);
    } else {
        console.error("❌ Root element with id 'app' not found. Make sure it exists in index.html.");
    }
});

AppRegistry.registerComponent(appName, () => App);
