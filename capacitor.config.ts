import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "AconcaguaCup2022",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.100.33:3000",
    cleartext: true,
  },
};

export default config;
