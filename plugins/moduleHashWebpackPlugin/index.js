
class ModuleHashWebpackPlugin {

  constructor() {

  }

  apply(compiler) {
    compiler.hooks.compilation.tap("ModuleHashWebpackPlugin", compilation => {
      compilation.hooks.chunkHash.tap("ModuleHashWebpackPlugin", (chunk, chunkHash) => {
        if(chunk.name) {
          chunk.name = chunk.name + '.' + chunkHash.digest('hex').slice(0, 10);
        }
        chunkHash.digest = function () {
          return '';
        };
      });
    });
  }
}

module.exports = ModuleHashWebpackPlugin;
