"use strict";

var React = require('react');

var EntryComponent = React.createClass({

    propTypes: {
        entry: React.PropTypes.shape({
            id: React.PropTypes.string,
            author: React.PropTypes.string,
            link: React.PropTypes.string,
            published: React.PropTypes.string,
            title: React.PropTypes.string,
            summary: React.PropTypes.string,
            favourited: React.PropTypes.bool
        }).isRequired,
    },

    render: function() {
        var favourited = null;
        if (this.props.entry.favourited) {
            favourited = <h2>'Favourited'</h2>;
        }

        return (
            <div className="entry">
                <a href={this.props.entry.linl}>
                    <h1>{this.props.entry.title}</h1>
                </a>
                <h2>{this.props.entry.author}</h2>
                <h3>{this.props.entry.published}</h3>
                <p>{this.props.entry.summary}</p>
                {favourited}
            </div>
        );
    }

})

module.exports = EntryComponent

