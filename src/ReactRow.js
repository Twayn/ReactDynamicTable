'use strict';

class ReactRow extends React.Component {
    constructor(props){
        super(props);

        this.onChangeRow = this.props.onChangeRow;
        this.index = this.props.index;
    }

    onChangeUserName = (value) => this.onChangeRow(this.index, 'userName', value);
    onChangeTaskType = (event) => this.onChangeRow(this.index, 'taskType', event.target.value);
    onChangeTaskId   = (event) => this.onChangeRow(this.index, 'taskId', event.target.value);
    onChangeDays     = (event) => this.onChangeRow(this.index, 'days', event.target.value);
    onChangeHours    = (event) => this.onChangeRow(this.index, 'hours', event.target.value);
    onChangeIsRole   = (event) => this.onChangeRow(this.index, 'isRole', event.target.checked);

    onDelete = () => this.props.onClickDelete(this.index);
    onMoveUp  = () => this.props.onClickMove(this.index, -1);
    onMoveDown  = () => this.props.onClickMove(this.index, 1);

    onSuggestionSelected(roleId, userId){
        this.onChangeRow(this.index, 'roleId', roleId);
        this.onChangeRow(this.index, 'userId', userId);
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
                    <div className="autocomplete">
                        <Autocomplete
                            userName={this.props.data.userName}
                            onSuggestionSelected={this.onSuggestionSelected.bind(this)}
                            onChangeUserName={this.onChangeUserName.bind(this)}
                        />
                    </div>
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