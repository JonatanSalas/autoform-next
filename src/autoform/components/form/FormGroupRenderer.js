import React from 'react';
import PropTypes from 'prop-types';

//TODO add validations
export default class FormGroupRenderer extends React.PureComponent {
    static displayName = 'FormGroupRenderer';

    static propTypes = {
        uiAdapter: PropTypes.object.isRequired,
        component: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
    };

    render() {
        const { component, displayName, uiAdapter, ...rest } = this.props;

        switch (displayName) {
            case 'FormGroup':
            default:
                return uiAdapter[component](rest);
        }
    }
}