import vue from 'rollup-plugin-vue'
import alias from 'rollup-plugin-alias'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import css from 'rollup-plugin-css-only'
import babel from '@rollup/plugin-babel'

const plugins = [
  peerDepsExternal(),
  alias({
    resolve: ['.js', '.vue'],
    '~': __dirname + '/src'
  }),
  babel({
    babelHelpers: 'runtime',
    skipPreflightCheck: true
  }),
  commonjs(),
  css({ 
    output: 'dist/fmv-layout.css' 
  }),
  vue({
    css: false,
    style: {
      preprocessOptions: {
        scss: {
          includePaths: ['node_modules']
        }
      }
    }
  }),
  buble({
    objectAssign: 'Object.assign'
  })
]

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/fmv-layout.esm.js'
    },
    plugins,
    external: [/@babel\/runtime/]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'FmvLayout',
      file: 'dist/fmv-layout.umd.js',
      globals: {
        'material-design-kit': 'MDK'
      }
    },
    plugins: plugins,
    external: [/@babel\/runtime/]
  }
]
