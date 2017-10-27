import * as React from 'react';

// tslint:disable:interface-name
// tslint:disable:typedef
interface IProps {
    reservations: IReservation[];
    roomID: number;
    onShow(reservation: IReservation): void;
}
export interface IReservation {
    id: number;
    roomId: number;
    subject: string; 
    startDate: Date;
    endDate: Date;
}

interface IState {
    modal: boolean;
}

class Reservations extends React.Component <IProps, IState> {
    // tslint:disable:max-line-length
    constructor(props: IProps) {
        super(props);
    
    }

    handleShow(reservation: IReservation) {
        this.props.onShow(reservation);
    }

    render() {
        return (
            <td className="left">
            {this.props.reservations.filter(item => item.roomId === this.props.roomID).map((reservation, index) => 
            <button key={index} onClick={(event) => this.handleShow(reservation)} className="left reservering btn btn-outline-danger"> {new Date(reservation.startDate).getHours()}:{new Date(reservation.startDate).getMinutes() < 10 ? '0' + (new Date(reservation.startDate).getMinutes()).toString() : new Date(reservation.startDate).getMinutes()} - {new Date(reservation.endDate).getHours()}:{new Date(reservation.endDate).getMinutes() < 10 ? '0' + (new Date(reservation.endDate).getMinutes()).toString() : new Date(reservation.endDate).getMinutes()} </button>
            )}
            </td>
        );
    }
}
export default Reservations;