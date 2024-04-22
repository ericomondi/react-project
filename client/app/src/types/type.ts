// src/types/index.d.ts or another appropriate path
export {};

declare global {
  interface Window {
    Raphael: any; // Use 'any' if you're unsure about the type
  }
}
