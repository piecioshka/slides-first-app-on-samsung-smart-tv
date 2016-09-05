(function () {
    'use strict';

    var Player = window.Player = {
        URL: 'http://www.nasa.gov/multimedia/nasatv/NTV-Public-IPS.m3u8|COMPONENT=HLS',

        init: function () {
            App.plugin.ObjectTVMW.SetMediaSource();
            App.plugin.Player.SetTotalBufferSize(5 * 1024 * 1024);
            App.plugin.Player.SetInitialBuffer(128 * 1024);
            App.plugin.Player.SetDisplayArea(0, 0, 960, 540);

            Player.events.init();
        },

        play: function (url) {
            App.plugin.Player.Play(url);
        },

        stop: function () {
            App.plugin.Player.Stop();
        },

        replay: function (url) {
            App.plugin.Player.Play(url);
        }
    };

}());
