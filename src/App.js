import React from "react";
import RegisterVehicle from "./components/RegisterVehicle";
import VehicleTable from "./components/VehicleTable";
import VehicleService from "./services/vehicle";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };

    this.getVehicles = this.getVehicles.bind(this);
  }

  async componentDidMount() {
    const response = await VehicleService.getVehicles();

    this.setState({ vehicles: response.data });
  }

  async getVehicles() {
    const response = await VehicleService.getVehicles();

    this.setState({ vehicles: response.data });
  }

  render() {
    return (
      <div class="container">
        <div class="container">
          <div class="row">
            <RegisterVehicle getVehicles={this.getVehicles}></RegisterVehicle>
            <VehicleTable vehicles={this.state.vehicles}></VehicleTable>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
