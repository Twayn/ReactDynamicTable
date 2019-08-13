'use strict';

class ReactTable extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeRow = this.onChangeRow.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickMove = this.onClickMove.bind(this);
    }

    onChangeRow(index, row){
        const data = this.props.data.slice();
        data[index] = row;

        this.props.onChangeData(data);
    }


    static createHeader(){
        const names = ['№', 'Задача', 'Порядок', 'Дни', 'Часы', 'Исполнитель', 'Роль', 'Просрочено', 'Решение', 'Комментарий', 'Действия'];

        return names.map((name, index) =>
            <th key={index}>{name}</th>
        );
    }

    createRows(){
        return this.props.data.map(
            (el, index) =>
                <ReactRow
                    data = {this.props.data[index]}
                    onChangeRow = {this.onChangeRow}
                    onClickDelete = {this.onClickDelete}
                    onClickMove = {this.onClickMove}
                    index = {index}
                />
        );
    }

    onClickDelete(index){
        const data = this.props.data.slice();
        data.splice(index, 1);
        this.props.onChangeData(data);
    }

    onClickMove(index, direction){
        const data = this.props.data.slice();

        if (index === 0 && direction === 1) return;
        if (index === data.length-1 && direction === -1) return;

        console.log(index);
        console.log(direction);

        const movable = data[index];

        data[index + direction];
    }

    render() {
        return (
            <table className="react-table" id="react-table" width="100%">
                <thead>
                <tr>
                    {ReactTable.createHeader()}
                </tr>
                </thead>
                <tbody>
                    {this.createRows()}
                </tbody>
            </table>
        );
    }
}
