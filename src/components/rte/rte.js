/**
 * Created by BBN on 11/01/2017.
 */
(function($){
  "use strict";

  /**
   * Classic input with normalized appearance
   */
  $.trumbowyg.svgPath = bbn_root_url + 'lib/Trumbowyg/v2.5.1/dist/ui/icons.svg';

  Vue.component('bbn-rte', {
    mixins: [bbn.vue.vueComponent],
    template: '#bbn-tpl-component-rte',
    props: {
      pinned: {},
      top: {},
      left: {},
      bottom: {},
      right: {},
      height:{},
      cfg: {
        type: Object,
        default: function(){
          return {
            pinned: true,
            top: null,
            left: null,
            bottom: 5,
            right: 5,
          }
        }
      }
    },
    data: function(){
      return bbn.vue.treatData(this);
    },
    methods: {
    },
    mounted: function(){
      var vm = this,
          cfg = vm.getOptions(),
          $ele = $(vm.$el);
      vm.widget = $ele.trumbowyg({
        lang: 'fr',
        resetCss: true
      });
      $ele.on("tbwchange", function(ev){
        vm.update(ev.target.value)
      })

    },
  });
})(jQuery);
