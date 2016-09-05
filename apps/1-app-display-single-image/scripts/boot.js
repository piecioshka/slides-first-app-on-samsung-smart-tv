// Alias to launched widget. `||` for browser protection.
var launchWidget = window.curWidget || {};
// Smart Hub call method `onload` on launch widget.
window.onload = function () {
    // Inform Smart Hub, that app is ready.
    if (typeof launchWidget.setPreference === 'function') {
        launchWidget.setPreference('ready', 'true');
    }
};