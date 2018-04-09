import React from 'react';
import { connect } from 'react-redux';
import FreeText from './FreeText';
import StandardDose from './StandardDose';
import { getOrderEntryConfigurations } from '../../../actions/orderEntryActions';


class AddForm extends React.Component {
  state = {
    fields: {
      dose: '',
      dosingUnit: '',
      frequency: '',
      route: '',
      duration: '',
      durationUnit: '',
      dispensingUnit: '',
      dispensingQuantity: '',
      reason: '',
      note: '',
    },
    fieldErrors: {
    },
  };

  componentDidMount() {
    this.props.getConfigurations;
  }

  /**
   * Validation of datalist tag values using onblur event handler
   */
  handleValidation = (event) => {
    const {
      dosingUnits, frequencies, routes, durationUnits, dispensingUnits,
    } = this.props;
    const { name, value } = event.target;
    let item = false;
    if (name === 'dose') {
      item = value.length > 0;
    } else if (name === 'dosingUnit') {
      item = dosingUnits.filter(selectedUnit => selectedUnit.display === value).length > 0;
    } else if (name === 'frequency') {
      item = frequencies.filter(selectedFrequency => selectedFrequency.display === value).length > 0;
    } else if (name === 'route') {
      item = routes.filter(selectedRoute => selectedRoute.display === value).length > 0;
    } else if (name === 'durationUnit') {
      item = durationUnits.filter(selectedDuration => selectedDuration.display === value).length > 0;
    } else if (name === 'dispensingUnit') {
      item = dispensingUnits.filter(selectedUnit => selectedUnit.display === value).length > 0;
    }

    { this.setState({
      ...this.state,
      fields: {
        ...this.state.fields, [name]: item ? value : '',
      },
      fieldErrors: {
        ...this.state.fieldErrors, [name]: !item,
      },
    }); }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields, [name]: value,
      },
    });
  }

  activateStandardSaveButton = () => {
    const {
      dose, dosingUnit, frequency, route,
    } = this.state.fields;
    if (dose && dosingUnit && frequency && route) return false;
    return true;
  }

  handleOnCancel = (event) => {
    // return appto having no drug selected
    // clear state
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    // if the dose + unit + freq + route componse drug order and store it in the store
    // clear state
    // else return
  }


  render() {
    const {
      dosingUnits, frequencies, routes, durationUnits, dispensingUnits,
    } = this.props;
    return (
      <div>
        <StandardDose
          fields={this.state.fields}
          fieldErrors={this.state.fieldErrors}
          dosingUnits={dosingUnits}
          frequencies={frequencies}
          routes={routes}
          durationUnits={durationUnits}
          dispensingUnits={dispensingUnits}
          handleOnChange={this.handleOnChange}
          handleValidation={this.handleValidation}
          activateStandardSaveButton={this.activateStandardSaveButton}
          handleOnSubmit={this.handleOnSubmit}
          handleOnCancel={this.handleOnCancel}
        />
        <FreeText />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dosingUnits: ((state.orderEntryConfigurations || {}).configurations || {}).drugDosingUnits,
  frequencies: ((state.orderEntryConfigurations || {}).configurations || {}).orderFrequencies,
  routes: ((state.orderEntryConfigurations || {}).configurations || {}).drugRoutes,
  durationUnits: ((state.orderEntryConfigurations || {}).configurations || {}).durationUnits,
  dispensingUnits: ((state.orderEntryConfigurations || {}).configurations || {}).drugDispensingUnits,
});

const mapDispatchToProps = dispatch => ({
  getConfigurations: dispatch(getOrderEntryConfigurations()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
