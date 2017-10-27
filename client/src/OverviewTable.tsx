import * as React from 'react';
import Reservations from './Reservations';
import { IReservation } from './Reservations';
import { Table, Row, Col } from 'reactstrap';
import AddButton from './AddButton';
import OverviewReservation from './OverviewReservation';

// tslint:disable:interface-name
interface IProps {
    meetingRooms: {id: number, name: string}[];
    date: Date | null;
    reservations: IReservation[];
}
interface IState {
    reservation: IReservation;
    tableVisible: boolean;
}

class OverviewTable extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.showReservation = this.showReservation.bind(this);
        this.hideReservation = this.hideReservation.bind(this);
        this.state = {
            reservation: {
                id: 1,
                roomId: 1,
                subject: 'string', 
                startDate: new Date(),
                endDate: new Date(),
            },
            tableVisible: false
        };

    }

    showReservation(item: IReservation) {
        this.setState({reservation: item, tableVisible: true});   
    }
    
    hideReservation() {
        this.setState({tableVisible: false});   
    }
    
    render() {
        var displayTable = {
            display: this.state.tableVisible ? 'block' : 'none'
          };
        // tslint:disable:jsx-boolean-value
        return(
            <div className="container">
                <Row>
                    <Col xs="9">
                        <h1 className="tableTitle"> Beschikbaarheid Vergaderzalen van 9:00-18:00</h1>
                    </Col>
                    <Col xs="3">
                        <AddButton/>
                    </Col>
                </Row>
                <Table className="table" bordered striped>
                 <thead>
                    <tr>
                        <th> Vergaderzalen:</th>
                        <th> Reserveringen:</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.meetingRooms.map((room, index) =>            
                        <tr key={index}>
                            <td className="left">{room.name}</td>
                            <Reservations
                                reservations={this.props.reservations}
                                roomID={room.id}
                                onShow={this.showReservation}
                            />
                        </tr>
                    )}
                </tbody>
                </Table>
                <div className="container" style={displayTable} >
                    <OverviewReservation
                        reservation={this.state.reservation}
                        meetingRooms={this.props.meetingRooms}
                        onNoShow={this.hideReservation}
                    />
                </div>
            </div> 
        );
    }
}

export default OverviewTable;