// React Native polyfills - minimal and compatible
// Note: We'll use type-only import to avoid runtime dependency
declare const Platform: { OS: string };

// Define global for libraries that expect it
if (typeof global === 'undefined') {
  (global as any) = globalThis;
}

// Define self for libraries that expect it (like socket.io)
if (typeof self === 'undefined') {
  (global as any).self = global;
}


// Minimal process polyfill for React Native
if (typeof process === 'undefined') {
  (global as any).process = {
    env: {
      NODE_ENV: 'production' // Default to production
    },
    platform: 'ios', // Default platform
    version: 'v18.0.0' // Mock Node version
  };
}

// Console polyfill (React Native has this, but ensure it's available)
if (typeof console === 'undefined') {
  (global as any).console = {
    log: () => {},
    warn: () => {},
    error: () => {},
    info: () => {},
    debug: () => {}
  };
}

(window as any).isReactNative = true;

// Export for explicit imports
export const isReactNative = true;
export const platform = 'react-native';


//buffer polyfill
if (typeof Buffer === 'undefined') {
  (global as any).Buffer = require('buffer').Buffer;
}
