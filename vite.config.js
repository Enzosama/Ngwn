export default defineConfig({
    server: {
      host: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
    build: {
      manifest: true,
      outDir: 'public/build',
    },
  });