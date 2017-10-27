import * as React from 'react';
import Reservations from './Reservations';
import { Table, Row, Col } from 'reactstrap';
import AddButton from './AddButton';

// tslint:disable-next-line:interface-name
interface IProps {
    meetingRooms: {id: number, name: string}[];
    date: Date | null;
    reservations: {id: number, roomId: number, subject: string, startDate: Date, endDate: Date}[];
}

class OverviewTable extends React.Component <IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        // let list = this.props.meetingRooms;
        // let rooms: Array<JSX.Element> = [];
        // let reserveringen = this.props.reservations;
        // rooms = list.map(function(room: {id: number, name: string}, index: number) {
        //     // filteren alles van die kamer -> list
        //     let reservationsFiltered = reserveringen.filter(item => item.roomId === room.id);
        //     return(                    
        //         <tr key={index}>
        //             <td className="left">{room.name}</td>
        //             <td className="left">
        //             <Reservations
        //                 reservations={reservationsFiltered}
        //             />
        //             </td>
        //         </tr>
        //         );
                
        // });
        // tslint:disable:jsx-boolean-value
        return(
            <div className="container">
                <Row>
                    <Col xs="9">
                        <h1 className="tableTitle"> Beschikbaarheid Vergaderzalen {this.props.date} van 9:00-18:00</h1>
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
                            />
                        </tr>
                    )}
                </tbody>
                </Table>
            </div> 
        );
    }
}

export default OverviewTable;