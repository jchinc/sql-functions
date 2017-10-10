import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
	entry: './dist/index.js',
	dest: './dist/bundles/sql-functions.umd.js',
	format: 'umd',
	moduleName: 'sqlFunctions',
	plugins: [
		resolve(),
		sourcemaps()
	]
}