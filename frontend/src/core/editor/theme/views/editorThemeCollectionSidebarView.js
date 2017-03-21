// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Origin = require('coreJS/app/origin');
  var SidebarItemView = require('coreJS/sidebar/views/sidebarItemView');
  var Backbone = require('backbone');

  var EditorThemeCollectionSidebarView = SidebarItemView.extend({
    events: {
      'click .editor-theme-edit-sidebar-save': 'saveEditing',
      'click .editor-theme-edit-sidebar-cancel': 'cancelEditing'
    },

    saveEditing: function(event) {
      event && event.preventDefault();
      this.updateButton('.editor-theme-edit-sidebar-save', window.polyglot.t('app.saving'));
      Origin.trigger('editorThemeEditSidebar:views:save');
    },

    cancelEditing: function(event) {
      event && event.preventDefault();
      Backbone.history.history.back();
    }
  }, {
    template: 'editorThemeCollectionSidebar'
  });

  return EditorThemeCollectionSidebarView;
});
