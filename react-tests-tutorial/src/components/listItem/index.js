import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class ListItem extends Component {

    render() {
        const { title, desc } = this.props;

        return <div data-test="ListItemComponent">
            <h2 data-test="ListItemHeader">{title}</h2>
            <div data-test="ListItemDesc">{desc}</div>
        </div>;
    }
}

ListItem.PropsTypes = {
    title: PropsTypes.string,
    desc: PropsTypes.string
};

export default ListItem;