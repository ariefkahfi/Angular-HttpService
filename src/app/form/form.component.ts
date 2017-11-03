import {
  Component, EventEmitter, Injectable, OnInit, Output, ReflectiveInjector, ViewChild,
  ViewContainerRef
} from "@angular/core";
import {HttpFruitService} from "../services/FruitService.service";
import {ListComponent} from "../list/list.component";

@Component({
  selector : "form-component",
  templateUrl : "./form.component.html"
})
export class FormComponent implements OnInit{

  ngOnInit(): void {

  }

  callEventEmitter(){
    this.eventEmitter.emit();
  }


  name : string;
  price : number;
  stock : number;

  @Output()
  eventEmitter = new EventEmitter<any>();

  fruit  :  {name : string , price : number , stock : number};

  constructor(private httpFruitService : HttpFruitService){

  }




  clearForm(){
    this.name = null;
    this.price = null;
    this.stock = null;
  }


  submitPurchase(){
    this.fruit = {
      name : this.name,
      price : this.price ,
      stock : this.stock
    };
    this.httpFruitService.saveFruit(this.fruit,(data)=>{
      alert(data);
      this.clearForm();
      this.callEventEmitter();
    });
  }
}
