const Window = require('window');
const window = new Window();
const document = window.document;
var objVue ={};
global.kendo = require('kendo-ui-core');
global.Vue = require('vue');
global.jQuery = require('jquery');
require('@bbn/bbn');
require('../src/bbn-vue');

require("../vendor.css");

bbn.vue.defineComponents();

global.$ = kendo.jQuery;
global.jQuery = global.$;

require('../core-components/all-components');


//In case if we only want to pass only the item for the creation of the vue object
  if ( cfgVue !== undefined ){
    if ( $.type(cfgVue) === "string"){
      objVue.el = cfgVue;
    }
    else if ( $.type(cfgVue) === "object"){
      //If the property of the construction vue also includes the property el
      if( cfgVue.el !== undefined ){
        objVue = cfgVue;
      }//Otherwise it does not contain the property and then integrates passed parameters with the default element with id = container
      else{
        objVue.el = "#¢ontainer";
        $.extend(objVue, cfgVue);
      }
    }
    new Vue(objVue);
  }//If you do not pass any parameters, create a vue object with element id = container
  else{
    new Vue({
      el:'#container'
    });
  }
console.log("entrato",objVue);
