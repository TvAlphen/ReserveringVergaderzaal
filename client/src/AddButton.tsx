import * as React from 'react';
var FaPlus = require('react-icons/lib/fa/plus');
var FaMinus = require('react-icons/lib/fa/minus');
import { Button } from 'reactstrap';

// tslint:disable:interface-name
interface IProps {
    formVisible: boolean;
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
        // tslint:disable:max-line-length
        return (
        <div>
            <Button color="primary" size="lg" block onClick={this.toggleDisplay}>
            {this.props.formVisible ? <span><FaMinus size={20}/> Annuleren</span> : <span><FaPlus size={20}/> Reservering toevoegen</span>} 
            </Button>
        </div>    
        );
    }
}

export default AddButton;