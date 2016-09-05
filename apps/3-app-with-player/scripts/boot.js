/*global window */

(function () {
    'use strict';

    // Alias to launched widget. `||` for browser protection.
    var launchWidget = window.curWidget || {};

    // Smart Hub call method `onload` on launch widget.
    window.onload = function () {
        // Inform Smart Hub, that app is ready.
        if (typeof launchWidget.setPreference === 'function') {
            launchWidget.setPreference('ready', 'true');
        }

        App.init();

        Player.init();
        Player.play(Player.URL);
    };

    // Listen on remote controller.
    window.onkeydown = function () {
        Player.stop();
        App.plugin.Player.ClearScreen();

        // Inform Smart Hub, that app is ready.
        if (typeof launchWidget.setPreference === 'function') {
            launchWidget.setPreference('return', 'true');
        }
    };

}());
