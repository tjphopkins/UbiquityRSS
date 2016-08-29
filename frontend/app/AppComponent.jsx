"use strict";

var _ = require('lodash');
var React = require('react');

var EntriesStore = require('./stores/EntriesStore')
var EntryComponent = require('./EntryComponent');


var getStateFromStores = function() {
    return {
        entries: EntriesStore.getEntries(),
    }
};


// Create an App component, extending the React base 'Component' class
var AppComponent = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },

    // Immediately after initial render, register a listener function for when
    // EntriesStore emits a change
    componentDidMount: function() {
        EntriesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        EntriesStore.removeChandwdgeListener(this._onChange);
    },

    _onChange: function() {
            var newState = getStateFromStores();
            if (! _.isEqual(newState, this.state)) {
                this.setState(newState);
            }

        },
    render: function() {

        var entriesToRender = [];
        for (var entry of this.state.entries) {
            // Only display the 10 latest entries
            if (entriesToRender.length <= 9) {
                entriesToRender.push(
                    <EntryComponent entry={entry} />
                );
            }
        }

        return (
            <div>
                {entriesToRender}
            </div>
        );
    }
})

module.exports = AppComponent  // CommonJS modularize

