/*global window */

(function () {
    'use strict';

    var App = {
        loadImages: function () {
            var img = new window.Image();
            img.src = 'images/logo/logo.png';
            img.src = 'images/logo/logo-dark.png';
            img = null;
        },

        changeStyle: function () {
            var $app = window.document.getElementById('app');
            $app.className = ((/dark/).test($app.className)) ? '' : 'dark';
        }
    };

    // Loading all used images, to protect lazy loading images.
    App.loadImages();

    // Listen on remote controller.
    window.onkeydown = function (event) {
        event = event || window.event;

        // Ignore developers shortcuts.
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        App.changeStyle();
    };

}());
