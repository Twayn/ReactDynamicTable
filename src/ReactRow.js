'use strict';

class ReactRow extends React.Component {
    constructor(props){
        super(props);
    }

    onChangeTaskType(event){
        this.props.data.taskType = event.target.value;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onChangeTaskId(event){
        this.props.data.taskId = event.target.value;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onChangeDays(event){
        this.props.data.days = event.target.value;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onChangeHours(event){
        this.props.data.hours = event.target.value;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onChangeUserName(event){
        this.props.data.userName = event.target.value;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onChangeIsRole(event){
        this.props.data.isRole = event.target.checked;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onDelete(){
        this.props.onClickDelete(this.props.index);
    }

    onMoveUp(){
        this.props.onClickMove(this.props.index, -1);
    }

    onMoveDown(){
        this.props.onClickMove(this.props.index, 1);
    }

    render() {
        return (
            <tr>
                <td/>
                    <td>
                        <select value={this.props.data.taskId}
                                onChange={this.onChangeTaskId.bind(this)}>
                            <option value="11">Задача 1</option>
                            <option value="13">Задача 2</option>
                            <option value="14">Задача 3</option>
                            <option value="15">Задача 4</option>
                            <option value="16">Задача 5</option>
                        </select>
                    </td>
                <td>
                    <select value={this.props.data.taskType}
                            onChange={this.onChangeTaskType.bind(this)}>
                        <option value="0">Тип 1</option>
                        <option value="1">Тип 2</option>
                    </select>
                </td>
                <td>
                    <input type="number" className="days" value={this.props.data.days}
                           onChange={this.onChangeDays.bind(this)}/>
                </td>
                <td>
                    <input type="number" className="hours" value={this.props.data.hours}
                           onChange={this.onChangeHours.bind(this)}/>
                </td>
                <td>
                    <input className="autocomplete" value={this.props.data.userName}
                           onChange={this.onChangeUserName.bind(this)}/>
                </td>
                <td>
                    <input type="checkbox" align="center" checked={this.props.data.isRole}
                           onChange={this.onChangeIsRole.bind(this)}/>
                </td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>
                    <span className="row-control" onClick={this.onMoveUp.bind(this)}>&#9650;</span>
                    <span className="row-control" onClick={this.onMoveDown.bind(this)}>&#9660;</span>
                    <span className="row-control" onClick={this.onDelete.bind(this)}>&#10006;</span>
                </td>
            </tr>
        );
    }
}