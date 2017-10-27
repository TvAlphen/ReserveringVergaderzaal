import * as React from 'react';
import { Button } from 'reactstrap';
var FaPlus = require('react-icons/lib/fa/plus');

interface MyProps {

}

class AddButton extends React.Component<MyProps> {
    // tslint:disable:jsx-boolean-value
    render() {
          return (
            <div>
                        <Button outline color="primary " size="lg" block > 
                            <FaPlus size={20}/> Reservering toevoegen
                        </Button>
            </div>    
        );
    }
}

export default AddButton;