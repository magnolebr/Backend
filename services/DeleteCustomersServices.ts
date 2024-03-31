import { message } from "antd";
import prismaClient from "../prisma";


interface DeleteCustomerProps{
    id:string;
}

class DeleteCustomersService {

    async execute({id}: DeleteCustomerProps){
        if  (!id){
            throw new Error("Solicitação Inválida")
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
            id:id
            }
        })

        if (!findCustomer){
            throw new Error("cliente não existe")
        }
  await prismaClient.customer.delete({
where:{
    id:findCustomer.id
}
  })

  return {message:"Deletado com sucesso"}
    }
}
export {DeleteCustomersService}
