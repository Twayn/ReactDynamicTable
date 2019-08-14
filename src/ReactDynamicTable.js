'use strict';

class ReactDynamicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            elementsOnPage: 10,
            currentPage: 1,
            pagesTotal: 1,
            rowsTotal: 1,
            showFrom: 0,
            showTo: 10,
        };

        this.loadData();
    }

    loadData(){//execute ajax
        let data = this.state.data;
        data.push({userId: 1, roleId: 1, taskId: 13, taskType: 1, isRole: false, days: 5, hours: 1, userName: 'Алгоритм1'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм2'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм3'});
        data.push({userId: 3, roleId: 3, taskId: 15, taskType: 1, isRole: false, days: 5, hours: 1, userName: 'Алгоритм4'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм5'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм6'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм7'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм8'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм9'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм10'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм11'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм12'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм13'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм14'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм15'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм16'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм17'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм18'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм19'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм20'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм21'});
        data.push({userId: 2, roleId: 2, taskId: 14, taskType: 0, isRole: true, days: 5, hours: 1, userName: 'Алгоритм22'});
    }

    onChangeData(data){
        this.setState({data: data});
    }

    onChangeElementsOnPage(event){
        this.setState({
            elementsOnPage: event.target.value,
            currentPage: 1
        });
    }

    onChangeCurrentPage(currentPage){
        if (currentPage > this.state.pagesTotal) return;
        if (currentPage < 1) return;
        this.setState({currentPage: currentPage});
    }

    onClickLeft(){
        let currentPage = this.state.currentPage;
        if (currentPage > 1) {
            this.setState({currentPage: currentPage-1});
        }
    }

    onClickRight(){
        let currentPage = this.state.currentPage;
        if (currentPage < this.state.pagesTotal) {
            this.setState({currentPage: currentPage+1});
        }
    }

    onClickSave = () => {console.log(this.state.data);}; //Execute ajax

    onClickAdd(){
        this.state.data.push({userId: 0, roleId: 0, taskId: 11, taskType: 0, isRole: false, days: 5, hours: 1, userName: 'Введите имя'});
        this.setState({data: this.state.data});
    }

    updatePaginationValues() {
        const st = this.state;
        if (st.currentPage >= 1 && st.currentPage <= st.pagesTotal){
            st.showFrom = (st.currentPage-1) * st.elementsOnPage;
            st.showTo  = st.showFrom + st.elementsOnPage - 1;
        } else {
            st.showFrom = 0;
            st.showTo = st.elementsOnPage;
        }

        st.rowsTotal = st.data.length;
        st.pagesTotal = Math.floor(st.rowsTotal/st.elementsOnPage);
        if (st.rowsTotal % st.elementsOnPage > 0) st.pagesTotal++;
    }

    render(){
        this.updatePaginationValues();

        return(
            <div>
                <ReactTableNavigation
                    elementsOnPage={this.state.elementsOnPage}
                    currentPage={this.state.currentPage}
                    pagesTotal={this.state.pagesTotal}
                    rowsTotal={this.state.rowsTotal}
                    onChangeElementsOnPage={this.onChangeElementsOnPage.bind(this)}
                    onChangeCurrentPage={this.onChangeCurrentPage.bind(this)}
                    onClickLeft={this.onClickLeft.bind(this)}
                    onClickRight={this.onClickRight.bind(this)}
                />

                <br/>

                <ReactTable
                    data={this.state.data}
                    onChangeData={this.onChangeData.bind(this)}
                    showFrom={this.state.showFrom}
                    showTo={this.state.showTo}
                />

                <br/>

                <ReactButtons
                    onClickSave={this.onClickSave.bind(this)}
                    onClickAdd={this.onClickAdd.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <ReactDynamicTable/>,
    document.getElementById('root')
);