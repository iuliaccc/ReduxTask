import { connect } from 'react-redux';
import List from '../components/List';
import {addItem, removeItem} from "../actions";

function mapStateToProps (state) {
    return {
        items: state.items
    };
}
function mapDispatchToProps(dispatch) {
    return {
        remove: item => dispatch(removeItem(item))
        //activate props from form
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);