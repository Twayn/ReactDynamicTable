'use strict';

class ReactButtons extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClickAdd}>Добавить задачу</button>&nbsp;
                <button onClick={this.props.onClickSave}>Сохранить</button>
            </div>
        );
    }
}
