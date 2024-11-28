import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    entryFileNames: '[name].js',
  },
  plugins: [typescript()],
};
