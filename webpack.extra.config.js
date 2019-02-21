const path = require('path');
const LazyChunkName = require('angular-named-lazy-chunks-webpack-plugin');
const ModuleHashWebpackPlugin = require('./plugins/moduleHashWebpackPlugin');
const JsonpMainTemplateWebpackPlugin = require('./plugins/jsonpMainTemplateWebpackPlugin');

module.exports = {

  output: {
    filename: '[name].js'
  },

  optimization: {
    splitChunks: {

      cacheGroups: {

        node_modules: {
          test: (chunk) => {
            if(chunk && chunk.userRequest) {
              return chunk.userRequest.includes('node_modules');
            }
            return false;
          },
          name: () => {
            return 'vendor';
          },
          chunks: 'all'
        }
      }

    }
  },

  plugins: [
    new JsonpMainTemplateWebpackPlugin(),

    new LazyChunkName({
      nameResolver: (filePath) => {
        if(filePath.indexOf('/src/app/modules')) {
          const modulePath = path.relative(path.join(__dirname, 'src/app/modules'), filePath);
          const moduleParse = path.parse(modulePath);
          return moduleParse.dir + '/index';
        }
        return null;
      }
    }),

    new ModuleHashWebpackPlugin()
  ]
}
