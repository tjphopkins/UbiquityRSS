"use strict";

var React = require('react');

var SearchComponent = React.createClass({

    propTypes: {
        filterEntries: React.PropTypes.func.isRequired,
        numberEntries: React.PropTypes.number,
    },

    _filter: function(event) {
        var filterText = document.getElementsByName(
            "filterEntries")[0].value;
        this.props.filterEntries(filterText);
    },

    render: function() {
        return (
            <div className="search-box">
                <input
                    type="text" name="filterEntries"
                    onKeyUp={this._filter}
                    placeholder={`Search all ${this.props.numberEntries} items`}
                />
            </div>
        )
    }

})

module.exports = SearchComponent

