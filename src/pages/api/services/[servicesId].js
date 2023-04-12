
import { servicesData } from "../../../../servicesData";

export default function handler(req, res){
    const {servicesId} = req.query;
    const service = servicesData.find( service => service.id == parseInt(servicesId));
    res.status(200).json(service)
}
