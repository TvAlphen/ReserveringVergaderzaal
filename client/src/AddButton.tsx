import * as React from 'react';
var FaPlus = require('react-icons/lib/fa/plus');
import { Button } from 'reactstrap';

// tslint:disable:interface-name
interface IProps {
    onShow(): void;
}
interface IState {
 
}

class AddButton extends React.Component<IProps, IState> {
    // tslint:disable:jsx-boolean-value
    constructor(props: IProps) {
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);

    }

    toggleDisplay() {
        this.props.onShow();
    }

    render() {

        return (
        <div>
            <Button outline color="primary" size="lg" block onClick={this.toggleDisplay}>
                <FaPlus size={20}/> Reservering toevoegen
            </Button>
        </div>    
        );
    }
}

export default AddButton;