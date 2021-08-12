import axios from "axios";

class VehicleService {
  getAxios() {
    return axios.create({
      baseURL: "http://localhost:5000",
    });
  }

  async getVehicles() {
    const response = await this.getAxios().get("/vehicle/");

    console.log(response);

    return response;
  }

  getVehicle(numberPlate) {
    return this.getAxios().get(`/vehicle/${numberPlate}/`);
  }

  register(vehicle) {
    return this.getAxios().post("/vehicle/register/", vehicle);
  }

  update(vehicle) {
    return this.getAxios().put(`/vehicle/${vehicle.id}/`, vehicle);
  }
}

export default new VehicleService();
