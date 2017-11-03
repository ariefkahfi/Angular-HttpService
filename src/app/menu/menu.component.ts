import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {ListComponent} from "../list/list.component";
// import {DropdownFormService} from "../services/dropdown-form.service";

@Component({
  selector : 'menu-component',
  templateUrl : './menu.component.html'
})
export class MenuComponent implements OnInit{


  @ViewChild(ListComponent)
  private listComp : ListComponent;

  ngOnInit(): void {

  }


  callGetDataFromListComponent(){
    console.log('call getData()');
    this.listComp.getData();
  }

}

