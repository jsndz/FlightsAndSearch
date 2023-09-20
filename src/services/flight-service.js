const {FlightRespository, AirplaneRespository} = require('../repository/index');

class FlightService {

    constructor() {
        this.airplaneRespository = new AirplaneRespository();
        this.flightrespository = new FlightRespository();
    }

    async createFlight(data) {
        try {
            
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightrespository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}


module.exports = FlightService;

/**
 * {
 *   flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */