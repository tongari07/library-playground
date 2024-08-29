// eslint-disable-next-line import/no-extraneous-dependencies
import { build } from 'esbuild';

const entryPoints = ['src/**/*.ts', 'src/**/*.tsx'];

await Promise.all([
  build({
    entryPoints,
    format: 'esm',
    outdir: 'dist/esm',
    target: 'es2022',
    sourcemap: false,
    outExtension: { '.js': '.mjs' },
    bundle: true,
    plugins: [
      {
        name: 'replace-imports',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            if (args.kind === 'entry-point') return;

            if (args.importer.endsWith('src/index.ts')) {
              return { path: `${args.path}/index.mjs`, external: true };
            }

            if (args.path.startsWith('./') || args.path.startsWith('../')) {
              return { path: `${args.path}.mjs`, external: true };
            }

            return { path: args.path, external: true };
          });
        },
      },
    ],
  }),
  build({
    entryPoints,
    format: 'cjs',
    outdir: 'dist/cjs',
    target: 'es2022',
    sourcemap: false,
  }),
]);
