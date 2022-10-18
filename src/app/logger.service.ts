import {Injectable} from "@angular/core";


@Injectable({
  providedIn:'root',
  
})
export class LoggerService{

  constructor(){
  }
  printMsg(msg:any){
    console.log(msg);
  }
}