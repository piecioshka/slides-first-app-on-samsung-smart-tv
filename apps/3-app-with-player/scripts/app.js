(function () {
    'use strict';

    var App = window.App = {
        init: function () {
            window.widgetAPI = new Common.API.Widget();
            window.pluginAPI = new Common.API.Plugin();
            window.widgetAPI.sendReadyEvent();

            App.plugin.Player = document.getElementById("pluginPlayer");
            App.plugin.Audio = document.getElementById("pluginAudio");
            App.plugin.Screen = document.getElementById("pluginScreen");
            App.plugin.Network = document.getElementById('pluginNetwork');
            App.plugin.ObjectTVMW = document.getElementById("pluginObjectTVMW");
            App.plugin.ObjectNNavi = document.getElementById("pluginObjectNNavi");
        },

        plugin: {}
    };

}());
