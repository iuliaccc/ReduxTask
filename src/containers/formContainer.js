import Form from '../components/Form';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        add: item => dispatch(addItem(item))
    }
}
export default connect(null, mapDispatchToProps)(Form);