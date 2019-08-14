'use strict';

class ReactTableNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    createPagesLinks(){
        let links = [];
        for (let i = 1; i <= this.props.pagesTotal; i++) {
            links.push(<PageLink
                            pageNum={i}
                            onChangeCurrentPage={this.props.onChangeCurrentPage}
                            className={i == this.props.currentPage ? "active page" : "page"}
                            key={i}
                       />);
        }
        return links;
    }

    render() {
        return (
            <table className="navigation">
                <tbody>
                    <tr>
                        <td>
                            <div className="pagination" id="nav">
                                <span onClick={this.props.onClickLeft}><a href="#">&#8592;</a></span>

                                {this.createPagesLinks()}

                                <span onClick={this.props.onClickRight}><a href="#">&#8594;</a></span>
                            </div>
                        </td>
                        <td>
                            <div className="gotoPage">
                                <label htmlFor="gotoPage">К странице: </label>
                                <input type="number" value={this.props.currentPage}
                                       onChange={(event) => this.props.onChangeCurrentPage(event.target.value)}/>
                            </div>
                        </td>
                        <td>
                            <div className="elementsOnPage">
                                <label htmlFor="elementsOnPage">Элементов на странице: </label>
                                <select value={this.props.elementsOnPage} onChange={this.props.onChangeElementsOnPage}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="999">Все</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function PageLink(props) {
    return (
        <span onClick={() => {props.onChangeCurrentPage(props.pageNum)}}>
            <a href="#" className={props.className}>{props.pageNum}</a>
        </span>
    );
}
