import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);

    }
    deleteItem(item){
        this.props.remove(item);
    }
    render() {
        return (
            <div>
                <ul>
                {this.props.items ? this.props.items.map((item, index) => {
                    return  <li
                        key={index}>{item}
                        <button onClick={()=>this.deleteItem(item)}> remove item</button>
                            </li>
                }): <p>No item in the list yet</p> }
                </ul>
            </div>
        );
    }
}

export default List;