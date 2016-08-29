"use strict";

var AppDispatcher = require('../utils/AppDispatcher');
var ActionTypes = require('../constants').ActionTypes;


var UIActions = {

    markAsFavourite: function(entry_id) {
        AppDispatcher.handleUIAction({
            actionType: ActionTypes.MARK_FAVOURITE,
            entry_id: entry_id,
        });
    },

};

module.exports = UIActions
