/**
 * @author jaye
 * @date 2018/8/24
 */
const Template = require("webpack/lib/Template");

class JsonpMainTemplate {

  apply(mainTemplate) {
    const needChunkOnDemandLoadingCode = chunk => {
      for (const chunkGroup of chunk.groupsIterable) {
        if (chunkGroup.getNumberOfChildren() > 0) return true;
      }
      return false;
    };
    const needChunkLoadingCode = chunk => {
      for (const chunkGroup of chunk.groupsIterable) {
        if (chunkGroup.chunks.length > 1) return true;
        if (chunkGroup.getNumberOfChildren() > 0) return true;
      }
      return false;
    };
    const needEntryDeferringCode = chunk => {
      for (const chunkGroup of chunk.groupsIterable) {
        if (chunkGroup.chunks.length > 1) return true;
      }
      return false;
    };
    mainTemplate.hooks.localVars.tap('JsonpMainTemplatePlugin',  (source, chunk, hash) => {
      const extraCode = [];
      extraCode.push(
        "",
        "var installedModules = {};"
      )
      if (needChunkLoadingCode(chunk)) {
        extraCode.push(
          "",
          "var installedChunks = {",
          Template.indent(
            chunk.ids.map(id => `${JSON.stringify(id)}: 0`).join(",\n")
          ),
          "};",
          "",
          needEntryDeferringCode(chunk) ? "var deferredModules = [];" : ""
        );
      }
      if (needChunkOnDemandLoadingCode(chunk)) {
        extraCode.push(
          "",
          "function jsonpScriptSrc(chunkId) {",
          Template.indent([
            `return ${mainTemplate.requireFn}.p + '' + chunkId + '.js?v=' + window.version || '';`
          ]),
          "}"
        );
      }
      return Template.asString(extraCode);
    });
  }
}


class JsonpTemplate {

  apply(compiler) {
    compiler.hooks.compilation.tap("JsonpTemplatePlugin", compilation => {
      new JsonpMainTemplate().apply(compilation.mainTemplate);
    });
  }
}

module.exports = JsonpTemplate;
