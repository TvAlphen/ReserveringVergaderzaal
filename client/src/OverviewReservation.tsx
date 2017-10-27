import * as React from 'react';

// tslint:disable:interface-name
interface IProps {
    reservation: {};
}
interface IState {
  
}

class OverviewReservation extends React.Component <IProps, IState> {
    // tslint:disable:max-line-length
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className=" row justify-content-center">
                <div className="col-6">
                    <div className=" panel panel-info">
                        <div className="panel-heading">Reservering:</div>
                        <div className="panel-body">Panel Content</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OverviewReservation;