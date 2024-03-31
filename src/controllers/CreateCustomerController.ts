
import { FastifyReply, FastifyRequest } from "fastify";
import {CraeteCustomerService} from "../services/CraeteCustomerService"
import { request } from 'http';


class CreateCustomerController {
    async handle (request: FastifyRequest, reply: FastifyReply){
        const {name, email} = request.body as {name:string, email:string};
      

        const customerService = new CraeteCustomerService ()
        const customer = await customerService.execute({name,email});

        reply.send(customer)
    }
}
export { CreateCustomerController}
