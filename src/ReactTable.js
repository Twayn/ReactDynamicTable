'use strict';

class ReactTable extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeRow(index, row) {
        this.props.data[index] = row;
        this.props.onChangeData(this.props.data);
    }


    static createHeader() {
        const names = ['№', 'Задача', 'Порядок', 'Дни', 'Часы', 'Исполнитель', 'Роль',
            'Просрочено', 'Решение', 'Комментарий', 'Действия'];

        return names.map((name, index) =>
            <th key={index}>{name}</th>
        );
    }

    createRows() {
        return this.props.data.map(
            (el, index) =>
                <ReactRow
                    data={this.props.data[index]}
                    onChangeRow={this.onChangeRow.bind(this)}
                    onClickDelete={this.onClickDelete.bind(this)}
                    onClickMove={this.onClickMove.bind(this)}
                    index={index}
                    key={index}
                />
        ).filter((el, index) => index >= this.props.showFrom && index <= this.props.showTo);
    }

    onClickDelete(index) {
        const data = this.props.data.slice();
        data.splice(index, 1);
        this.props.onChangeData(data);
    }

    onClickMove(index, direction) {
        const data = this.props.data.slice();

        if (index === 0 && direction === -1) return;
        if (index === data.length - 1 && direction === 1) return;

        var temp = data[index];
        data[index] = data[index + direction];
        data[index + direction] = temp;

        this.props.onChangeData(data);
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
