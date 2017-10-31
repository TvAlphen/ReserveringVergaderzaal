import * as React from 'react';
import { Button, Alert } from 'reactstrap';
import { IReservation } from './Reservations';

// tslint:disable:interface-name
interface IProps {
    meetingRooms: {room_id: number, room_name: string}[];
    date: Date | null;
    reservations: IReservation[];
    onShow(): void;
}
interface IState {
    vergaderzaal?: string;
    subject?: string;
    starttijd?: string;
    eindtijd?: string;
    disabled: boolean;
}

class AddReservation extends React.Component <IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            vergaderzaal: 'vergaderzaal 1',
            eindtijd: '09:30',
            starttijd: '09:00',
            disabled: false
        };
    }

    handleAdd() {
        // create reservation_id
        var meetingroom = this.props.meetingRooms.filter(item => item.room_name === this.state.vergaderzaal);
        let a = Math.floor((Math.random() * 100 + 1)).toString();
        let b = Math.floor((Math.random() * 100) + 1).toString();
        let c = a + b;
        let id = Number(c);
        // not unique -> create new id
        while (!(typeof(this.props.reservations.find(item => item.room_id === id )) !== undefined)) {
            let d = Math.floor((Math.random() * 100 + 1));
            let e = Math.floor((Math.random() * 100) + 1);
            let f = d * e;
            id = f;
        }
        var tempItem = {
            reservation_id: id,
            room_id: meetingroom[0].room_id,
            subject: this.state.subject,
            start_date: this.props.date!.toString() + ' ' + this.state.starttijd + ':00',
            end_date: this.props.date!.toString() + ' ' + this.state.eindtijd + ':00'
        };
        // tslint:disable-next-line:no-console
        console.log(tempItem);
        this.props.onShow();
    }

    render() {
        // tslint:disable:max-line-length
        // tslint:disable:jsx-boolean-value
        var startTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
        var endTimes: string[] = ['09:30'];
        for (var i = 10; i < 18; i++) {
            let string1: string;
            let string2: string;
            if ( i < 10) {
                string1 = '0' + i + ':00';
                string2 = '0' + i + ':30';
            } else {
                string1 =  i + ':00';
                string2 =  i + ':30';
            }
            endTimes.push(string1, string2);
        } 
        endTimes.push('18:00');
        return (
            <form onSubmit={this.handleAdd}>
                <div className="input-form">
                    <label className="input-form">Vergaderzaal: </label>
                    <select onChange={(event) => {this.setState({vergaderzaal: event.target.value}); }}>
                        {this.props.meetingRooms.map((room, index) =>
                        <option key={index}>{room.room_name}</option>
                        )}
                    </select>
                </div>
                <div className="input-form">
                    <label className="input-form">Subject: </label>
                    <input type="text" id="subject" required maxLength={255} onChange={(event) => {this.setState({subject: event.target.value}); }}/>
                </div>
                <div className="input-form">
                    <label className="input-form">Starttijd: </label>
                    <select onChange={(event) => {this.setState({starttijd: event.target.value}); }}>
                        {startTimes.map((time, index) => 
                        <option key={index}>{time}</option>
                        )}
                    </select>
                </div>
                <div className="input-form">
                    <label className="input-form">Eindtijd: </label>
                    <select onChange={(event) => {this.setState({eindtijd: event.target.value}); }}>
                        {endTimes.map((time, index) => 
                        <option key={index}>{time}</option>
                        )}
                    </select>
                    {this.endTimeBeforeStartTime() ? <Alert color="danger"> Eindtijd moet na de starttijd liggen! </Alert> : null}
                    {this.roomNotAvailable() ? <Alert color="danger"> Vergaderzaal niet beschikbaar op dit tijdstip!</Alert> : null}
                </div>
                <div className="input-form">
                    <Button className="input-form" type="submit" color="primary" size="lg" disabled={(this.endTimeBeforeStartTime() || this.roomNotAvailable())}> Toevoegen </Button>
                </div>
            </form>
        );
    }
    private endTimeBeforeStartTime() {
        let startTime = new Date(this.props.date!.toString() + ' ' + this.state.starttijd + ':00');
        let endTime = new Date(this.props.date!.toString() + ' ' + this.state.eindtijd + ':00');
        let endTimeBeforeStartTime: boolean;
        if (startTime >= endTime) {
            endTimeBeforeStartTime = true;
        } else {
            endTimeBeforeStartTime = false;
        }
        return endTimeBeforeStartTime;
    }
    private roomNotAvailable() {
        let meetingroom = this.props.meetingRooms.filter(item => item.room_name === this.state.vergaderzaal);
        let meetingroomID: number;
        if (meetingroom.length > 0) {
            meetingroomID = meetingroom[0].room_id;
        } else {
            meetingroomID = 99;
        }
        let reservationsRoom = this.props.reservations.filter(item => item.room_id === meetingroomID).filter(item => item.start_date.toString().includes(this.props.date!.toString()));
        let startTime = new Date(this.props.date!.toString() + ' ' + this.state.starttijd + ':00');
        let endTime = new Date(this.props.date!.toString() + ' ' + this.state.eindtijd + ':00');
        let newStartTime = startTime.getTime();
        let newEndTime = endTime.getTime();
        let roomNotAvailable = false;
        for (var i = 0; i < reservationsRoom.length; i++) {
            let reservationStartTime = new Date(reservationsRoom[i].start_date).getTime();
            let reservationEndTime = new Date(reservationsRoom[i].end_date).getTime();
            if (reservationStartTime < newStartTime && reservationEndTime > newStartTime) {
                return true;
            } else if (reservationStartTime < newEndTime && reservationEndTime > newEndTime) {
                return true;
            } else if (reservationStartTime > newStartTime && reservationEndTime < newEndTime) {
                return true;
            } else if (reservationStartTime === newStartTime || reservationEndTime === newEndTime) {
                return true;
            }
        } 
        return roomNotAvailable;
    }
}

export default AddReservation;