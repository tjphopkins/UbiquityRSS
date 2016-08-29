"use strict";

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var $ = require('jquery');

var AppDispatcher = require('../utils/AppDispatcher');
var ActionTypes = require('../constants').ActionTypes;

var CHANGE_EVENT = 'change';
var _entries = [];

var EntriesStore = assign({}, EventEmitter.prototype, {

    // Synchronously calls each of the listeners registered by components for
    // the change event
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    // Method for components to register their listener function for the change
    // event
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    init: function(config) {
        _entries = config.entries;
    },

    getEntries: function() {
        // Return a clone so that the state can't be to modified externally
        return _.cloneDeep(_entries);
    },

    markFavourite: function(id) {
        var theEntry = _.find(_entries, ['id', id]);

        var jqXHR = $.ajax({
            type: 'POST',
            url: "/mark_entry_favourite",
            data: {
                id: id
            }
        });
        return jqXHR

        // TODO: only set this if the request is successful
        theEntry.favourited = true;
    }
})

module.exports = EntriesStore;

EntriesStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case ActionTypes.MARK_FAVOURITE:
            EntriesStore.markFavourite(action.entry_id);

    }

    EntriesStore.emitChange();

    return true; // required by promise in Dispatcher
})
