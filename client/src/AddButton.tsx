import * as React from 'react';
var FaPlus = require('react-icons/lib/fa/plus');
var FaMinus = require('react-icons/lib/fa/minus');
import { Button } from 'reactstrap';

// tslint:disable:interface-name
interface IProps {
    onShow(): void;
}
interface IState {
    formOpen: boolean;
}

class AddButton extends React.Component<IProps, IState> {
    // tslint:disable:jsx-boolean-value
    constructor(props: IProps) {
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.state = {
            formOpen: false
        };
    }

    toggleDisplay() {
        this.props.onShow();
        this.setState({formOpen: !this.state.formOpen});
    }

    render() {
        // tslint:disable:max-line-length
        return (
        <div>
            <Button color="primary" size="lg" block onClick={this.toggleDisplay}>
            {this.state.formOpen ? <span><FaMinus size={20}/> Annuleren</span> : <span><FaPlus size={20}/> Reservering toevoegen</span>} 
            </Button>
        </div>    
        );
    }
}

export default AddButton;