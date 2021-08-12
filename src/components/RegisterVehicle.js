import moment from "moment";
import React from "react";
import VehicleService from "../services/vehicle";

class RegisterVehicle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberPlate: "",
      vehicle: null,
    };
  }

  async register(event) {
    event.preventDefault();
    const vehicle = {
      placa: this.state.numberPlate,
    };
    try {
      await VehicleService.register(vehicle);
    } catch (error) {
      this.setState({ error: error.message });
      return;
    }

    this.props.getVehicles();
    this.cleanError();
  }

  async getVehicle(event) {
    event.preventDefault();
    let response;
    try {
      response = await VehicleService.getVehicle(this.state.numberPlate);
    } catch (error) {
      this.setState({ error: error.message });
      return;
    }

    this.setState({ vehicle: response.data });
    this.cleanError();
  }

  async update(event) {
    event.preventDefault();

    const vehicle = this.state.vehicle;

    try {
      await VehicleService.update(vehicle);
    } catch (error) {
      this.setState({ error: error.message });
      return;
    }

    this.props.getVehicles();
    this.setState({ vehicle: null });
    this.cleanError();
  }

  handleInputChange(event) {
    this.setState({ numberPlate: event.target.value });
    this.cleanError();
  }

  cleanError() {
    this.setState({ error: "" });
  }

  render() {
    return (
      <>
        <div className="col">
          {this.state.error && (
            <div class="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}

          <p className="h1">Ingrese Numero de Placa</p>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-info"
                type="button"
                onClick={(event) => this.getVehicle(event)}
              >
                CONSULTAR
              </button>
              <button
                className="btn btn-warning"
                type="button"
                onClick={(event) => this.register(event)}
              >
                REGISTRAR
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label=""
              aria-describedby="basic-addon1"
              value={this.state.numberPlate}
              onChange={(event) => this.handleInputChange(event)}
            />
          </div>
        </div>

        <div className="w-100"> </div>

        {Boolean(this.state.vehicle) && (
          <div className="col">
            <p className="h1">El vehiculo ingreso a las</p>
            <input
              disabled
              className="form-control form-control-lg"
              type="text"
              placeholder=""
              value={moment(this.state.vehicle.hora_entrada).format(
                "h:mm:ss a"
              )}
            />
            <p className="h1">Valor a Pagar:</p>
            <input
              disabled
              className="form-control form-control-lg"
              type="text"
              placeholder=""
              value={this.state.vehicle.total}
            />
            <button
              type="button"
              className="btn btn-success  btn-lg btn-block"
              onClick={(event) => this.update(event)}
            >
              SALIDA
            </button>
          </div>
        )}
      </>
    );
  }
}

export default RegisterVehicle;
