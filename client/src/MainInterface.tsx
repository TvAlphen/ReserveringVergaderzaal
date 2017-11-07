import * as React from 'react';
import OverviewTable from './OverviewTable';
import { IReservation } from './Reservations';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
var FaCalendar = require('react-icons/lib/fa/calendar');
var _ = require('lodash');

// tslint:disable-next-line:interface-name
interface IState {
  date: Date;
  tableVisible: boolean;
  reservationVisible: boolean;
  meetingRooms: {room_id: number, room_name: string}[];
  reservationList: IReservation[];
}

class MainInterface extends React.Component <{}, IState> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addReservation = this.addReservation.bind(this);
    this.deleteReservation = this.deleteReservation.bind(this);
    // initial state
    this.state  = { 
    date: new Date, 
    tableVisible: false,
    reservationVisible: false,
    meetingRooms: [],
    // tslint:disable-next-line:max-line-length
    reservationList: [ {reservation_id: 1, room_id: 1, subject: 'random', start_date: '2017-10-12 11:00:00', end_date: '2017-10-12 12:00:00'} ]
    };
  }
  // componentWillMount() {
    
  // }

    // tslint:disable-next-line:no-any
  handleChange(event: any) {
    event.preventDefault();
    this.setState({date: event.target.value, tableVisible: true});
    this.getMeetingRooms();
    this.getReservationList();
  }

  addReservation(reservation: IReservation) {
    let newList = this.state.reservationList;
    newList.push(reservation);
    this.setState({reservationList: newList});
    const url = '/api/reservations';
    fetch(url, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(reservation)
    // tslint:disable-next-line:no-console
    }).catch(error => console.log('Error Fetch : ' + error));
  }

  deleteReservation(reservation: IReservation) {
    let currentList = this.state.reservationList;
    let newList = _.without(currentList, reservation);
    this.setState({reservationList: newList});
    let id = reservation.reservation_id;
    const url = '/api/delete/' + id;
    fetch(url, {
      method: 'DELETE'
    // tslint:disable-next-line:no-console
    }).catch(error => console.log('Error Fetch : ' + error));
  }

  render() {

    var displayTable = {
      display: this.state.tableVisible ? 'block' : 'none'
    };

    // tslint:disable:jsx-no-bind
    return (
      <div className="App">
        <div className="App-header">
          <h2>Selecteer een datum:</h2>
        </div>
        <div className="container">
            <div className="row justify-content-center input-group input-group-lg">
              <span className="input-group-addon col-auto">Select Date: </span>
              {/* <input className="col-2 form-control" type="date" onChange={this.handleChange.bind(this)}/> */}
              <input className="col-2 form-control" type="date" onChange={(event) => {this.handleChange(event); }}/>
              <span className="input-group-addon col-auto"><FaCalendar size={28}/></span>
            </div>
        </div>
        <div className="container table" style={displayTable}>
        <OverviewTable  
                meetingRooms={this.state.meetingRooms} 
                date={this.state.date} 
                reservations={this.state.reservationList}
                addReservation={this.addReservation}
                deleteReservation={this.deleteReservation}
        />
        </div>
      </div>
    );
  }
  private getMeetingRooms = () => {
    fetch('api/meetingRooms', {
      method: 'GET'
    })
    .then(res => res.json())
    // tslint:disable-next-line:no-console
    .then(res => this.setState({meetingRooms: res}))
   
    // tslint:disable-next-line:no-console
    .catch((error) => console.log('Error Fetch: ' + error));
  }

  private getReservationList = () => {
    fetch('api/reservations', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => this.setState({reservationList: res}))
    // tslint:disable-next-line:no-console
    .catch((error) => console.log('Error Fetch: ' + error));
  }
}

export default MainInterface;
