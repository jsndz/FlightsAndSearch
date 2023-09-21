const { FlightService } = require('../services/index');


const flightService = new FlightService();
 
const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (error) {
       console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt create a flight',
            err:{error}
       })
    }


}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllflightData(req.query);
        return res.status(201).json({
            data: flights,
            success: true,
            err: {},
            message: 'Successfully got flights'
        })
    } catch (error) {
       console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt get flights',
            err:{error}
       })
    }


}




module.exports ={
    create,
    getAll
}