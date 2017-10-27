import * as React from 'react';
import { IReservation } from './Reservations';
var FaClose = require('react-icons/lib/fa/close');
var FaTrash = require('react-icons/lib/fa/trash');

// tslint:disable:interface-name
interface IProps {
    reservation: IReservation;
    meetingRooms: {id: number, name: string}[];
    onNoShow(): void;
}
interface IState {
  
}

class OverviewReservation extends React.Component <IProps, IState> {
    // tslint:disable:max-line-length
    constructor(props: IProps) {
        super(props);
    }

    handleNoShow() {
        this.props.onNoShow();
    }

    render() {
        let naam = this.props.meetingRooms.filter(item => item.id === this.props.reservation.roomId);
        naam.push({id: 99, name: 'niet bestaande vergaderzaal'});
        return (
            <div className=" row justify-content-center">
                <div className="left col-6">
                    <div className=" panel panel-info">
                        <div className="panel-header panel-heading">
                            Reservering: {new Date(this.props.reservation.startDate).getDate() + '-' + (new Date(this.props.reservation.startDate).getMonth() + 1).toString() + '-' + new Date(this.props.reservation.startDate).getFullYear()}
                            <button onClick={(event) => this.handleNoShow()} className="cancelButton"><FaClose size={20}/></button>
                            <button className="deleteButton">Delete <FaTrash size={20}/></button></div>
                        <div className="panel-body">
                            <dl className="dl-horizontal">
                            <dt>Vergaderzaal:</dt><dd> {naam[0].name} </dd>
                            <dt>Van:</dt><dd>{new Date(this.props.reservation.startDate).getHours()}:{new Date(this.props.reservation.startDate).getMinutes() < 10 ? '0' + (new Date(this.props.reservation.startDate).getMinutes()).toString() : new Date(this.props.reservation.startDate).getMinutes().toString()}</dd>
                            <dt>Tot:</dt><dd>{new Date(this.props.reservation.endDate).getHours()}:{new Date(this.props.reservation.endDate).getMinutes() < 10 ? '0' + (new Date(this.props.reservation.endDate).getMinutes()).toString() : new Date(this.props.reservation.endDate).getMinutes().toString()}</dd>
                            <dt>Onderwerp:</dt><dd>{this.props.reservation.subject}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OverviewReservation;