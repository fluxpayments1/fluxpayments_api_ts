// src/polyfills.ts

// Example of adding a process polyfill
(window as any).process = {
    env: { DEBUG: undefined }, // Extend this object as needed
    // Add other properties and methods as required
    version: "v0.20"
  };
  
  // Other polyfills can be added below as needed
  