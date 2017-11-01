import * as React from 'react';
import Reservations from './Reservations';
import { IReservation } from './Reservations';
import { Table, Row, Col } from 'reactstrap';
import AddButton from './AddButton';
import AddReservation from './AddReservation';
import OverviewReservation from './OverviewReservation';
import { Collapse, Card } from 'reactstrap';

// tslint:disable:interface-name
interface IProps {
    meetingRooms: {room_id: number, room_name: string}[];
    date: Date;
    reservations: IReservation[];
    addReservation(reservation: IReservation): void;
    deleteReservation(reservation: IReservation): void;
}
interface IState {
    reservation: IReservation;
    tableVisible: boolean;
    formVisible: boolean;
}

class OverviewTable extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.showReservation = this.showReservation.bind(this);
        this.hideReservation = this.hideReservation.bind(this);
        this.showForm = this.showForm.bind(this);
        this.state = {
            reservation: {
                reservation_id: 1,
                room_id: 1,
                subject: 'string', 
                start_date: '1989-11-13',
                end_date: '1989-11-13',
            },
            tableVisible: false,
            formVisible: false
        };

    }

    showReservation(item: IReservation) {
        this.setState({reservation: item, tableVisible: true});   
    }
    
    hideReservation() {
        this.setState({tableVisible: false});   
    }

    showForm() { 
        this.setState({ formVisible: !this.state.formVisible});
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
                        <AddButton
                            onShow={this.showForm}
                            formVisible={this.state.formVisible}
                        />
                    </Col>
                </Row>
                <div>
                    <Collapse isOpen={this.state.formVisible}>
                        <Card outline color="primary">
                           <AddReservation
                                meetingRooms={this.props.meetingRooms}
                                date={this.props.date}
                                reservations={this.props.reservations}
                                onShow={this.showForm}
                                addReservation={this.props.addReservation}
                           />
                        </Card>
                    </Collapse>
                </div>
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
                            <td className="left">{room.room_name}</td>
                            <Reservations
                                reservations={this.props.reservations}
                                roomID={room.room_id}
                                onShow={this.showReservation}
                                date={this.props.date}
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
                        deleteReservation={this.props.deleteReservation}
                    />
                </div>
            </div> 
        );
    }
}

export default OverviewTable;