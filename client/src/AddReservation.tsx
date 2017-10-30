import * as React from 'react';
import { Button } from 'reactstrap';
import { IReservation } from './Reservations';

// tslint:disable:interface-name
interface IProps {
    meetingRooms: {room_id: number, room_name: string}[];
    date: Date | null;
    reservations: IReservation[];
}
interface IState {
    reservation_id?: number;
    vergaderzaal?: string;
    room_id?: number;
    subject?: string;
    start_date?: Date;
    end_date?: Date;
    starttijd?: string;
    eindtijd?: string;
}

class AddReservation extends React.Component <IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            vergaderzaal: 'vergaderzaal 1'
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
    }

    render() {
        // tslint:disable:max-line-length
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
                    <input type="text" id="subject" onChange={(event) => {this.setState({subject: event.target.value}); }}/>
                </div>
                <div className="input-form">
                    <label className="input-form">Starttijd: </label>
                    <input id="start_date" type="time" onChange={(event) => {this.setState({starttijd: event.target.value}); }}/>
                </div>
                <div className="input-form">
                    <label className="input-form">Eindtijd: </label>
                    <input id="end_date" type="time" onChange={(event) => {this.setState({eindtijd: event.target.value}); }}/>
                </div>
                <div className="input-form">
                    <Button className="input-form" type="submit" color="primary" size="lg"> Toevoegen </Button>
                </div>
            </form>
        );
    }

}

export default AddReservation;