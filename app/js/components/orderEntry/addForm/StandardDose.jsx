import React from 'react';
import '../../../../css/grid.scss';

const StandardDose = ({
  fields,
  fieldErrors,
  dosingUnits,
  frequencies,
  routes,
  durationUnits,
  dispensingUnits,
  handleOnChange,
  handleValidation,
  activateStandardSaveButton,
  handleOnSubmit,
  handleOnCancel,
}) => (
  <div>
    <form className="simple-form-ui">
      <div className="grid-row">
        <div className="column-1">
          <label name="dose">Dose</label>
          <input
            className={fields.dose ? "" : "illegalValue"}
            id="dose"
            name="dose"
            type="number"
            min="0"
            onBlur={handleValidation}
            onChange={handleOnChange}
            value={fields.dose}
            required
            autoFocus />
          {
            fieldErrors.dose ?
              <span className="field-error">Required</span>
              : ""
          }
        </div>
        <div className="column-2">
          <label name="drugDosingUnits">Units</label>
          <input
            className={fieldErrors.dosingUnit ? "illegalValue" : ""}
            id="drugDosingUnits"
            name="dosingUnit"
            list="dosingUnits"
            size="10"
            value={fields.dosingUnit}
            onBlur={handleValidation}
            onChange={handleOnChange}
            required />
          <datalist id="dosingUnits" >
            {
              dosingUnits && dosingUnits.map(unit => <option key={unit.uuid} value={unit.display} />)
            }
          </datalist>
          {
            fieldErrors.dosingUnit ?
              <span className="field-error">Required</span>
              : ""
          }
        </div>
        <div className="column-2">
          <label name="frequency">Frequency</label>
          <input
            className={fieldErrors.frequency ? "illegalValue" : ""}
            id="frequency"
            name="frequency"
            list="orderFrequencies"
            size="10"
            value={fields.frequency}
            onBlur={handleValidation}
            onChange={handleOnChange} />
          <datalist id="orderFrequencies" >
            {
              frequencies && frequencies.map(frequency => <option key={frequency.uuid} data-value={frequency.uuid} value={frequency.display} />)
            }
          </datalist>
          {
            fieldErrors.frequency ?
              <span className="field-error">Required</span>
              : ""
          }
        </div>
        <div className="column-2">
          <label name="route">Route</label>
          <input
            className={fieldErrors.route ? "illegalValue" : ""}
            id="route"
            name="route"
            list="routes"
            size="10"
            value={fields.route}
            onBlur={handleValidation}
            onChange={handleOnChange} />
          <datalist id="routes" >
            {
              routes && routes.map(route => <option key={route.uuid} data-value={route.uuid} value={route.display} />)
            }
          </datalist>
          {
            fieldErrors.route ?
              <span className="field-error">Required</span>
              : ""
          }
        </div>
        <div className="column-1">
          <label name="duration">Duration</label>
          <input
            id="duration"
            name="duration"
            type="number"
            min="0"
            onChange={handleOnChange}
            value={fields.duration} />
        </div>
        <div className="column-2">
          <label name="drugDurationUnits">Units</label>
          <input
            name="durationUnit"
            id="drugDurationUnits"
            list="durationUnits"
            size="10"
            value={fields.durationUnit}
            onBlur={handleValidation}
            onChange={handleOnChange} />
          <datalist id="durationUnits" >
            {
              durationUnits && durationUnits.map(unit => <option key={unit.uuid} data-value={unit.uuid} value={unit.display} />)
            }
          </datalist>
        </div>
      </div>
      <div className="grid-row">
        <p className="left column-4">
          <label name="reason">As needed</label>
          <input
            name="reason"
            id="reason"
            type="text"
            size="30"
            onChange={handleOnChange}
            value={fields.reason} />
        </p>
        <div className="column-1">
          <label>Dispense: </label>
        </div>
        <div className="column-1">
          <label name="dispenseQuantity">Quantity</label>
          <input
            name="dispensingQuantity"
            id="dispenseQuantity"
            type="number"
            min="0"
            onChange={handleOnChange}
            value={fields.dispensingQuantity} />
        </div>
        <div className="column-2">
          <label name="drugDispensingUnits">Units</label>
          <input
            name="dispensingUnit"
            id="drugDispensingUnits"
            list="dispensingUnits"
            size="10"
            value={fields.dispensingUnit}
            onBlur={handleValidation}
            onChange={handleOnChange} />
          <datalist id="dispensingUnits" >
            {
              dispensingUnits && dispensingUnits.map(unit => <option key={unit.uuid} data-value={unit.uuid} value={unit.display} />)
            }
          </datalist>
        </div>
      </div>
      <div className="grid-row">
        <div className="column-4">
          <label name="notes">Notes</label>
          <textarea
            rows="2"
            cols="85"
            id="notes"
            name="note"
            onChange={handleOnChange}
            value={fields.note} />
        </div>
      </div>
      <div className="button-row">
        <div className="column-1">
          <button
            className="cancel"
            onClick={handleOnCancel}
          >
          Cancel
          </button>
        </div>
        <div className="column-1 pull-right-8">
          <button
            className="confirm"
            onClick={handleOnSubmit}
            disabled={activateStandardSaveButton()}>
          Save
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default StandardDose;
