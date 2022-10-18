import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
 
  name:string | undefined | null;
  id:number | undefined;

  constructor(private logger: LoggerService, private route:ActivatedRoute) { 
    //this.name="zeeshan";
    this.name=this.route.snapshot.paramMap.get('name');

    this.id=1;
  }

  changeName():void{
    if(this.name == "zeeshan"){
      this.name="taha"
    }
    else{
      this.name="zeeshan";
    }
    this.logger.printMsg("Name Changed!");
  }
  changeId():void{
    if(this.id == 1){
      this.id=2;
    }
    else{
      this.id = 1;
    }
    this.logger.printMsg("ID Changed!");
  }

  changeBoth():void{
    this.changeName();
    this.changeId();
    this.logger.printMsg("Both Changed");
  }

  ngOnInit(): void {
   /* this.route.queryParams.subscribe((params)=>{
      this.name=params["name"];
    })
  }*/
     }

}
