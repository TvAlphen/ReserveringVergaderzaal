import * as React from 'react';

// tslint:disable-next-line:interface-name
interface IProps {

}

class Reservation extends React.Component <IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    render() {

        return(
                <tr>
                    <th scope="row"> hello</th>
                </tr>    
        );
    }
}

export default Reservation;