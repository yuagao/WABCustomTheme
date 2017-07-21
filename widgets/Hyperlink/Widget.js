///////////////////////////////////////////////////////////////////////////
// Copyright © 2015 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/_base/html',
    'dojo/when',
    'dojo/on',
    'dojo/aspect',
    'dojo/query',
    'dojo/keys',
    'dojo/Deferred',
    'dojo/promise/all',
    'jimu/BaseWidget',
    'jimu/LayerInfos/LayerInfos',
    'jimu/utils',
    'esri/dijit/Search',
    'esri/tasks/locator',
    'esri/layers/FeatureLayer',
    'esri/InfoTemplate',
    'esri/lang',
    'dojo/NodeList-dom'
  ],
  function(declare, lang, array, html, when, on, aspect, query, keys, Deferred, all,
    BaseWidget, LayerInfos, jimuUtils, Search, Locator,
    FeatureLayer, InfoTemplate, esriLang, utils) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      name: 'Hyperlink',
      baseClass: 'jimu-widget-hyperlink',
      searchDijit: null,
      searchResults: null,

      _startWidth: null,

      postCreate: function() {
        if (this.closeable || !this.isOnScreen) {
          html.addClass(this.linkNode, 'default-width-for-openAtStart');
        }

        this.listenWidgetIds.push('framework');
      },

      startup: function() {
        this.inherited(arguments);

        if (!(this.config && this.config.sources)) {
          this.config.sources = [];
        }

        this.linkTextNode.innerHTML = this.config.linkText;
        this.linkTextNode.href = this.config.linkHref;

      },


      setPosition: function(position) {
        this.inherited(arguments);
      },

      resize: function() {

      },

      destroy: function() {

        this.inherited(arguments);
      }
    });
  });
