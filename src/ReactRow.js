'use strict';

class ReactRow extends React.Component {
    constructor(props){
        super(props);

        this.onChangeTaskType = this.onChangeTaskType.bind(this);
        this.onChangeTaskId = this.onChangeTaskId.bind(this);
        this.onChangeDays = this.onChangeDays.bind(this);
        this.onChangeHours = this.onChangeHours.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeIsRole = this.onChangeIsRole.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onMoveUp = this.onMoveUp.bind(this);
        this.onMoveDown = this.onMoveDown.bind(this);
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
        this.props.data.isRole = event.target.value;
        this.props.onChangeRow(this.props.index, this.props.data);
    }

    onDelete(){
        this.props.onClickDelete(this.props.index);
    }

    onMoveUp(){
        this.props.onClickMove(this.props.index, 1);
    }

    onMoveDown(){
        this.props.onClickMove(this.props.index, -1);
    }

    render() {
        return (
            <tr>
                <td/>
                <td>
                    <TaskSelect
                        id={this.props.data.taskId}
                        onChangeTaskId = {this.onChangeTaskId}
                        index = {this.props.index}
                    />
                </td>
                <td>
                    <TypeSelect
                        id = {this.props.data.taskType}
                        onChangeTaskType = {this.onChangeTaskType}
                        index = {this.props.index}
                    />
                </td>
                <td>
                    <input type="number" className="days" value={this.props.data.days}
                           onChange={this.onChangeDays}/>
                </td>
                <td>
                    <input type="number" className="hours" value={this.props.data.hours}
                           onChange={this.onChangeHours}/>
                </td>
                <td>
                    <input className="autocomplete" value={this.props.data.userName}
                           onChange={this.onChangeUserName}/>
                </td>
                <td>
                    <input type="checkbox" align="center" defaultChecked={this.props.data.isRole}
                           onChange={this.onChangeIsRole}/>
                </td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>
                    <Controls
                        onDelete = {this.onDelete}
                        onMoveUp = {this.onMoveUp}
                        onMoveDown = {this.onMoveDown}
                    />
                </td>
            </tr>
        );
    }
}