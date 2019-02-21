# angular-module-chunk-split-boilerplate

开发过程中通过`webpackChunkName`来指定模块名不够优化，难以维护。


实际生产环境中，往往会有这样的需求：

  1. 项目框架层面代码与项目模块代码分离（代码管理）
  
  2. 项目模块代码更新时，不影响项目框架层面代码（除了引用了第三方库（位于node_modules），下面有说明）
  
  3. 项目模块代码以补丁的形式进行更新
  
  
## 使用说明

1. 请将`angular.json`文件的`namedChunks`设置为`false`

2. 请将`angular.json`文件的`outputHashing`设置为`false`

3. `webpack.extra.config.js`配置`filename: '[name].js'`

4. `outputHashing`设置为`false`后文件名不会发生改变，为了添加文件缓存版本控制， 可如下操作：

引入`ModuleHashWebpackPlugin`插件，此插件会对**入口文件**进行`chunkhash`处理，异步模块不进行处理
再引入 `JsonpMainTemplateWebpackPlugin`插件修改异步加载模块的方法,对js进行version后缀处理（window.version可以通过接口动态获取），这样
就可以控制项目缓存

```javascript

// 位于 runtime.js
function jsonpScriptSrc(chunkId) {
  return __webpack_require__.p + '' + chunkId + '.js?v=' + window.version || '';
}

```

5. 具体配置可参加`webpack.extra.config.js`

## 说明

1. 此`boilerplate`第三方库都将打包入`vendor.js`,一方面让项目模块代码尽可能**小**，同时也解决了其他模块引入此库导致的问题

```javascript
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

```

2. 模块目录自定义配置如下

```javascript
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

```
