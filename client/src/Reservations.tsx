import * as React from 'react';

// tslint:disable:interface-name
// tslint:disable:typedef
interface IProps {
    reservations: IReservation[];
    roomID: number;
    date: Date;
    onShow(reservation: IReservation): void;
}
export interface IReservation {
    reservation_id: number;
    room_id: number;
    subject: string; 
    start_date: Date;
    end_date: Date;
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
            {this.props.reservations.filter(item => item.room_id === this.props.roomID).filter(item => item.start_date.toString().includes(this.props.date.toString())).map((reservation, index) => 
            <button key={index} onClick={(event) => this.handleShow(reservation)} className="left reservering btn btn-outline-danger"> {new Date(reservation.start_date).getHours()}:{new Date(reservation.start_date).getMinutes() < 10 ? '0' + (new Date(reservation.start_date).getMinutes()).toString() : new Date(reservation.start_date).getMinutes()} - {new Date(reservation.end_date).getHours()}:{new Date(reservation.end_date).getMinutes() < 10 ? '0' + (new Date(reservation.end_date).getMinutes()).toString() : new Date(reservation.end_date).getMinutes()} </button>
            )}
            </td>
        );
    }
}
export default Reservations;