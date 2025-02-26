import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App.js'; // Ensure the path is correct
import appJson from '../App.json';
import { createRoot } from 'react-dom/client';

const appName = appJson.name;

// Initialize app
const app = () => <App />;

// Register the app
AppRegistry.registerComponent(appName, () => app);

// Mount the app
document.addEventListener('DOMContentLoaded', () => {
    const rootTag = document.getElementById('root');
    if (rootTag) {
        console.log("✅ Rendering App on Web...");
        const root = createRoot(rootTag);
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } else {
        console.error("❌ Root element with id 'root' not found. Make sure it exists in index.html.");
    }
});
