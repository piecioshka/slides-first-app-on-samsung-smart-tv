(function () {
    'use strict';

    var Player = window.Player;

    Player.events = {
        init: function () {
            App.plugin.Player.OnCurrentPlayTime = "Player.events.OnCurrentPlayTime";
            App.plugin.Player.OnStreamInfoReady = "Player.events.OnStreamInfoReady";

            App.plugin.Player.OnBufferingStart = "Player.events.OnBufferingStart";
            App.plugin.Player.OnBufferingProgress = "Player.events.OnBufferingProgress";
            App.plugin.Player.OnBufferingComplete = "Player.events.OnBufferingComplete";
            App.plugin.Player.OnRenderingComplete = "Player.events.OnRenderingComplete";

            App.plugin.Player.OnRenderError = "Player.events.OnRenderError";
            App.plugin.Player.OnAuthenticationFailed = "Player.events.OnAuthenticationFailed";
            App.plugin.Player.OnConnectionFailed = "Player.events.OnConnectionFailed";
            App.plugin.Player.OnNetworkDisconnected = "Player.events.OnNetworkDisconnected";
            App.plugin.Player.OnStreamNotFound = "Player.events.OnStreamNotFound";
        },
        OnCurrentPlayTime: function (miniseconds) {
            // console.log("OnCurrentPlayTime");
        },
        OnStreamInfoReady: function (args) {
            // console.log("OnStreamInfoReady");
        },
        OnBufferingStart: function (args) {
            // console.log("OnBufferingStart");
        },
        OnBufferingProgress: function (args) {
            // console.log("OnBufferingProgress: " + args + "%");
        },
        OnBufferingComplete: function (args) {
            // console.log("OnBufferingComplete");
        },
        OnRenderingComplete: function (args) {
            // console.log("OnRenderingComplete");
            Player.replay(Player.URL);
        },
        OnRenderError: function (err) {
            // console.log("OnRenderError");
        },
        OnAuthenticationFailed: function (err) {
            // console.log("OnAuthenticationFailed");
        },
        OnConnectionFailed: function (err) {
            // console.log("OnConnectionFailed");
        },
        OnNetworkDisconnected: function () {
            // console.log("OnNetworkDisconnected");
        },
        OnStreamNotFound: function (err) {
            // console.log("OnStreamNotFound");
        }
    };

}());
