import * as React from 'react';
import Table from './Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// tslint:disable-next-line:interface-name
interface IState {
  date: Date | null;
  tableVisible: boolean;
  meetingRooms: Array<string>;
}

class MainInterface extends React.Component <{}, IState> {
  // initial state
  state  = { 
   date: null,
   tableVisible: false,
   meetingRooms: [
     'vergaderzaal 1',
     'vergaderzaal 2',
     'vergaderzaal 3',
     'vergaderzaal 4'
   ]

  };

    // tslint:disable-next-line:no-any
  handleChange(event: any) {
    event.preventDefault();
    this.setState({date: event.target.value, tableVisible: true});
  }

  render() {

    var displayTable = {
      display: this.state.tableVisible ? 'block' : 'none'
    };

    // tslint:disable:jsx-no-bind
    return (
      <div className="App">
        <div className="App-header">
          <h2>Maak een reservering:</h2>
        </div>
        <div className="container">
            <div className="row justify-content-center input-group input-group-lg">
              <span className="input-group-addon col-auto">Select Date: </span>
              {/* <input className="col-2 form-control" type="date" onChange={this.handleChange.bind(this)}/> */}
              <input className="col-2 form-control" type="date" onChange={(event) => {this.handleChange(event); }}/>
              <span className="input-group-addon col-auto glyphicon glyphicon-calendar" />
            </div>
        </div>
        <div className="table" style={displayTable}>
        <Table meetingRooms={this.state.meetingRooms} date={this.state.date} />
        </div>
      </div>
    );
  }
}

export default MainInterface;
