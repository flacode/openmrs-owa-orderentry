import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import ActiveOrders from './ActiveOrders';
import PastOrders from './PastOrders';
import AddForm from './addForm/AddForm';
import Tabs from '../tabs/Tabs';
import Tab from '../tabs/Tab';
import {
  fetchInpatientCareSetting,
  fetchOutpatientCareSetting,
} from '../../actions/careSetting';

export class SearchAndAddOrder extends React.Component {
  constructor(props) {
    super();
    this.state = {
      careSetting: 'OutPatient',
    };
  }

  componentDidMount() {
    this.props.fetchInpatientCareSetting();
    this.props.fetchOutpatientCareSetting();
  }


  handleCareSettings = (careSetting) => {
    this.setState({ careSetting });
  }
  render() {
    return (
      <div>
        <Tabs getActiveTab={this.handleCareSettings}>
          <Tab
            tabName="OutPatient">
            <AddForm />
          </Tab>
          <Tab tabName="InPatient">Tab 2 content</Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = ({ careSettingReducer }) => ({
  inpatientCareSetting: careSettingReducer.inpatientCareSetting,
  outpatientCareSetting: careSettingReducer.outpatientCareSetting,
});

const mapDispatchToProps = dispatch => ({
  fetchInpatientCareSetting: () => dispatch(fetchInpatientCareSetting()),
  fetchOutpatientCareSetting: () => dispatch(fetchOutpatientCareSetting()),
});

SearchAndAddOrder.propTypes = {
  fetchInpatientCareSetting: PropTypes.func.isRequired,
  fetchOutpatientCareSetting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndAddOrder);
