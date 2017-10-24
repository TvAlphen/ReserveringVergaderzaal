import * as React from 'react';

// tslint:disable-next-line:interface-name
interface IProps {
    meetingRooms: string[];
    date: Date | null;
}

class Table extends React.Component <IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        let list = this.props.meetingRooms;
        let rows: Array<JSX.Element> = [];
        // list.forEach(function(room: string) {
        //     rows.push(                    
        //     // tslint:disable-next-line:jsx-wrap-multiline
        //         <th scope="row">{room}</th>
        //     );
        // });
        rows = list.map(function(room: string, index: number) {
            return(                    
                <th key={index} scope="row">{room}</th>);
        });
        // tslint:disable-next-line:max-line-length

        return(
            <div className="container">
                <h1> Beschikbaarheid Vergaderzalen {this.props.date} van 9:00-18:00</h1>
                <table className="table table-striped table-bordered">
                 <thead>
                    <tr>
                        {rows}
                    </tr>
                </thead>
                </table>
            </div>
        );
    }
}

export default Table;