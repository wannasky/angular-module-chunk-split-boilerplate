const path = require('path');
const LazyChunkName = require('angular-named-lazy-chunks-webpack-plugin');
const webpack = require('webpack');

module.exports = {

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
    new LazyChunkName({
      nameResolver: (filePath) => {
        if(filePath.indexOf('/src/app/modules')) {
          const modulePath = path.relative(path.join(__dirname, 'src/app/modules'), filePath);
          const moduleParse = path.parse(modulePath);
          return moduleParse.dir + '/index';
        }
        return null;
      }
    })
  ]
}
