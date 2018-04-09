import React from 'react';
import PatientDashboard from '../patientDashboard';

import SearchAndAddOrder from './SearchAndAddOrder';

class OrderEntryPage extends React.Component {
  render() {
    return (
      <div>
        <PatientDashboard {...this.props} />
        <div className="drug-orders">
          <SearchAndAddOrder />
        </div>
      </div>
    );
  }
}

export default OrderEntryPage;
