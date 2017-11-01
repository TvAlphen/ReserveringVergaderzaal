import * as React from 'react';
var _ = require('lodash');

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
    start_date: string;
    end_date: string;
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
        let reservations = this.props.reservations.filter(item => item.room_id === this.props.roomID).filter(item => item.start_date.toString().includes(this.props.date.toString()));
        let orderedReservations = _.orderBy(reservations, function(item: IReservation) {return item.start_date; }, 'asc');
        return (
            <td className="left">
            {orderedReservations.map((reservation: IReservation, index: number) => 
            <button key={index} onClick={(event) => this.handleShow(reservation)} className="left reservering btn btn-outline-danger">
            {new Date(reservation.start_date).getHours()}:
            {new Date(reservation.start_date).getMinutes() < 30 ? '0' + (new Date(reservation.start_date).getMinutes()).toString() : new Date(reservation.start_date).getMinutes()} - {new Date(reservation.end_date).getHours()}:
            {new Date(reservation.end_date).getMinutes() < 10 ? '0' + (new Date(reservation.end_date).getMinutes()).toString() : new Date(reservation.end_date).getMinutes()} 
            </button>
            )}
            </td>
        );
    }
}
export default Reservations;