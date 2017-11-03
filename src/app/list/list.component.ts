import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {HttpFruitService} from "../services/FruitService.service";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector : 'list-component',
  templateUrl : './list.component.html'
})
export class ListComponent implements OnInit{


  arrOfFruits : Array<any>;
  deleteId : number;
  updateId: number;
  updateStock : number;



  toBuyStock : number;

  buyId : number;
  buyStock : number;



  openDialog(id : number) : void{
    this.initDialog(id);
  }


  showOrHideDialogContainer(value : boolean){
    document.getElementById('dialog-container').hidden = value;
  }

  initDialog(id : number){
    this.showOrHideDialogContainer(false);
    document.getElementById('confirmMessage').innerHTML = `ID : ${id} , are you sure to delete this fruit ? `;
    this.deleteId = id;
  }


  ngOnInit(): void {
    this.getData();
    window.onclick = (event)=>{
      if((<HTMLElement>event.target).id === 'dialog-container'){
        document.getElementById('dialog-container').hidden = true;
      }else if((<HTMLElement>event.target).id === 'dialog-container-update'){
        document.getElementById('dialog-container-update').hidden = true;
      }else if((<HTMLElement>event.target).id === 'dialog-container-buy'){
        document.getElementById('dialog-container-buy').hidden = true;
      }
    }
  }

  constructor(private httpFruitService : HttpFruitService){}

  getData(){
    this.httpFruitService.getFruits((data)=>{
      this.arrOfFruits = data;
    });
  }

  doDeleteDialog() {
    console.log('do delete on : ' + this.deleteId);
    this.httpFruitService.deleteFruit(this.deleteId,()=>{
      console.log('Delete data success');
      this.showOrHideDialogContainer(true);
      this.getData();
    });
  }

  hideDialogUpdate(value : boolean){
    document.getElementById('dialog-container-update').hidden = value;
  }

  openDialogUpdate(id : number) {
    this.hideDialogUpdate(false);
    this.initDialogUpdate(id);
  }

  initDialogUpdate(id : number){
    this.updateId = id;
  }


  hideDialogBuyContainer(value : boolean){
    document.getElementById('dialog-container-buy').hidden = value;
  }

  openDialogBuy(id : number , stock : number) {
    this.buyId = id;
    this.buyStock = stock;
    this.hideDialogBuyContainer(false);
  }

  clearDialogUpdate(){
    this.updateStock = null;
  }

  submitUpdate() {
      this.httpFruitService.updateStock(this.updateId,this.updateStock,()=>{
          this.getData();
          alert('Update complete');
          this.clearDialogUpdate();
          this.hideDialogUpdate(true);
      });
  }


  clearDialogBuy(){
    this.buyId = null; this.buyStock = null; this.toBuyStock = null;
  }
  submitBuy() {
    this.httpFruitService.buyFruit(this.buyId,this.toBuyStock,()=>{
        this.getData();
        this.clearDialogBuy();
        this.hideDialogBuyContainer(true);
    });
  }
}
