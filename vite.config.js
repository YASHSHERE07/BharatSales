import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Setting host to '0.0.0.0' allows devices on the same network to access the dev server
    host: "0.0.0.0",
    port: 3000, // Optional: you can change the port where the dev server will run
    open: true, // Automatically opens the browser when the server starts
    cors: true, // Enables CORS. Adjust as necessary for your development needs
    https: false, // Set to true if you need HTTPS, e.g., for service workers
  },
});
