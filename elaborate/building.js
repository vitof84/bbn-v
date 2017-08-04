/*module.exports.building = function(){
  var path = require('path'),
    fs = require('fs'),
    browserify = require('browserify'),
    dest = path.join( __dirname + '/../../../bbn-vue.js'),
    vueify = require('vueify');
    babelify = require('babelify').configure({
      presets: ["es2015"]
    }),
    aliasify = require('aliasify').configure({
      aliases: {
        "vue": path.join(__dirname, "../", "node_modules/vue/dist/vue.js");
      }
    });

  vueify.compiler.applyConfig({
    aliases: {
      "vue": path.join(__dirname, "../", "node_modules/vue/dist/vue.js")
    }
  })

  browserify('../main.js').transform(vueify,babelify, aliasify).bundle().pipe(fs.createWriteStream(dest));
}*/


module.exports = function(cfg) {
//require(path.join(__dirname, "/progress.js"));
  global.cfgVue = cfg;

  var fs = require('fs');
  var path = require('path');
  var browserify = require('browserify');
  var vueify = require('vueify');
  var main =  path.join(__dirname, "/main.js");
  var dest = path.join( __dirname + '/../../../bbn-vue.js');



  var babelify = require('babelify').configure({
    presets: ["es2015"]
  });


  var aliasify = require('aliasify').configure({
    aliases: {
      "vue": path.join(__dirname, "../", "node_modules/vue/dist/vue.js")
    }
  });



  vueify.compiler.applyConfig({
    aliases: {
      "vue": path.join(__dirname, "../", "node_modules/vue/dist/vue.js")
    }
  })

  browserify(main).transform(vueify,babelify, aliasify).bundle().pipe(fs.createWriteStream(dest));

}
