import * as React from 'react';
import OverviewTable from './OverviewTable';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
var FaCalendar = require('react-icons/lib/fa/calendar');

// tslint:disable-next-line:interface-name
interface IState {
  date: Date;
  tableVisible: boolean;
  reservationVisible: boolean;
  meetingRooms: Array<{}>;
  reservationList: Array<{}>;
}

class MainInterface extends React.Component <{}, IState> {
  // initial state
  state  = { 
   date: new Date, 
   tableVisible: false,
   reservationVisible: false,
   meetingRooms: [],
   reservationList: []

  };

  componentWillMount() {
    this.getMeetingRooms();
  }

    // tslint:disable-next-line:no-any
  handleChange(event: any) {
    event.preventDefault();
    this.setState({date: event.target.value, tableVisible: true});
    this.getReservationList();
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
        />
        </div>
      </div>
    );
  }
  private getMeetingRooms = () => {
    fetch('/meetingRooms', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => this.setState({meetingRooms: res.rooms}))
    // tslint:disable-next-line:no-console
    .then((res) => console.log('Our state is: ', this.state));
  }

  private getReservationList = () => {
    fetch('/reservations', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => this.setState({reservationList: res.reservations}));
  }
}

export default MainInterface;
