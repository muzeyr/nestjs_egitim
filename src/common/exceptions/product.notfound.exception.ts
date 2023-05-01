import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductNotFoundException extends HttpException {
   constructor(message : string){
       super('Product not found ' + message,HttpStatus.NOT_FOUND);
       
   } 

}