'use strict';

class ReactDynamicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {userId: 1, roleId: 1, taskId: 13, taskType: 1, isRole: false, days: 5, hours: 1, userName: 'Алгоритм'},
                {userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм1'},
                {userId: 3, roleId: 3, taskId: 15, taskType: 1, isRole: false, days: 5, hours: 1, userName: 'Алгоритм2'},
            ],
            elementsOnPage: 10,
            currentPage: 1,
            pagesTotal: 1,
            rowsTotal: 3,
        };

        this.onChangeData = this.onChangeData.bind(this);
    }

    onChangeData(data){
        this.setState({data: data});
    }

    render(){
        return(
            <div>
                <ReactTableNavigation/>

                <br/>

                <ReactTable
                    data={this.state.data}
                    onChangeData={this.onChangeData}
                />

                <br/>

                <ReactButtons/>
            </div>
        );
    }
}

ReactDOM.render(
    <ReactDynamicTable/>,
    document.getElementById('root')
);