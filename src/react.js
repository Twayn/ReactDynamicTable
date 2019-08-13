'use strict';

function ReactTableNavigation() {
    return (
        <table>
            <tr>
                <td>
                    <div className="pagination" id="nav"/>
                </td>
                <td>
                    <div className="gotoPage">
                        <label htmlFor="gotoPage">К странице: </label>
                        <input type="text" id="gotoPage"/>
                    </div>
                </td>
                <td>
                    <div className="elementsOnPage">
                        <label htmlFor="elementsOnPage">Элементов на странице: </label>
                        <select id="elementsOnPage">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="999">Все</option>
                        </select>
                    </div>
                </td>
            </tr>
        </table>
    );
}

class ReactButtons extends React.Component {
    handleClick(){alert('12');}

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()} >Добавить задачу</button>&nbsp;
                <button onClick={() => this.handleClick()}>Сохранить</button>
            </div>
        );
    }
}

function Controls(props) {
    return (
        <div>
            <span className="row-control" onClick={props.onMoveUp}>&#9650;</span>
            <span className="row-control" onClick={props.onMoveDown}>&#9660;</span>
            <span className="row-control" onClick={props.onDelete}>&#10006;</span>
        </div>
    );
}

function TaskSelect(props) {
    return (
        <select value={props.id} onChange={props.onChangeTaskId}>
            <option value="11">Задача 1</option>
            <option value="13">Задача 2</option>
            <option value="14">Задача 3</option>
            <option value="15">Задача 4</option>
            <option value="16">Задача 5</option>
        </select>
    );
}

function TypeSelect(props) {
    return (
        <select value={props.id} onChange={props.onChangeTaskType}>
            <option value="0">Тип 1</option>
            <option value="1">Тип 2</option>
        </select>
    );
}

