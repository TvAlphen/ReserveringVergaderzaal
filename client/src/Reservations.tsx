import * as React from 'react';

// tslint:disable:interface-name
interface IProps {
    reservations: {id: number, roomId: number, subject: string, startDate: Date, endDate: Date}[];
    roomID: number;
}
interface IState {
    modal: boolean;
}

class Reservations extends React.Component <IProps, IState> {
    // tslint:disable:max-line-length
    constructor(props: IProps) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
           <td className="left">
           {this.props.reservations.filter(item => item.roomId === this.props.roomID).map((reservation, index) => 
           <button key={index} className="left reservering btn btn-outline-danger" data-toggle="modal" data-target="#myModal"> {new Date(reservation.startDate).getHours()}:{new Date(reservation.startDate).getMinutes() < 10 ? '0' + (new Date(reservation.startDate).getMinutes()).toString() : new Date(reservation.startDate).getMinutes()} - {new Date(reservation.endDate).getHours()}:{new Date(reservation.endDate).getMinutes() < 10 ? '0' + (new Date(reservation.endDate).getMinutes()).toString() : new Date(reservation.endDate).getMinutes()} </button>
            )}
            </td>
        );
    }
}
export default Reservations;

// import OverviewReservation from './OverviewReservation';
// var displayReservation = {
//     display: this.state.reservationVisible ? 'block' : 'none'
//   };

{/* <div style={displayReservation}>
<OverviewReservation/>
</div> */}