import React from 'react';

export default class Interested extends React.Component {
    render() {
        return (
            <i 
                className={(this.props.isInterested?'fas':'far') + ' fa-heart'}
                onClick={this.props.onClick}></i>
        );
    }
}