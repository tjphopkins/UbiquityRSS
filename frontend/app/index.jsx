"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var EntriesStore = require('./stores/EntriesStore');
var AppComponent = require('./AppComponent');


window.RSSFeed = {
    init: function(el, config) {
        EntriesStore.init(config)

        // Render the AppComponent into the DOM into
        // the supplied container element
        ReactDOM.render(<AppComponent />, el);
    }
}
