import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class SharedButton extends Component {

    submitEvent = () => {
        if (this.props.emitEvent)
            this.props.emitEvent();
    };

    render() {
        const { buttonText } = this.props;

        return <button data-test="buttonComponent" onClick={this.submitEvent}>
            {buttonText}
        </button>;
    }
}

SharedButton.PropsTypes = {
    buttonText: PropsTypes.string,
    emitEvent: PropsTypes.func,
};

export default SharedButton;