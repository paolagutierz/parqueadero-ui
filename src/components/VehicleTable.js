import React from "react";
import moment from "moment";

class VehicleTable extends React.Component {
  render() {
    return (
      <div>
        <div class="col">
          <table class="table">
            <thead>
              <div class="p-3 mb-2 bg-info text-center text-white font-weight-bold">
                Vehiculos Parqueados
              </div>
              <tr>
                <th scope="col text-center">PLACA</th>
                <th scope="col text-center">HORA</th>
              </tr>
            </thead>
            <tbody>
              {this.props.vehicles.map((vehicle, i) => (
                <tr key={i}>
                  <th scope="row">{vehicle.placa}</th>
                  <td>
                    {moment(vehicle.hora_entrada).format(
                      "h:mm:ss a, MMMM Do YYYY"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VehicleTable;
