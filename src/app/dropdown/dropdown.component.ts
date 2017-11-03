import {Component} from "@angular/core";



@Component({
  selector : 'dropdown',
  templateUrl : './dropdown.component.html'
})
export class DropdownComponent {


  aHrefBuyFruitWhenClicked(bgColor : string , color : string){
    document.getElementById('href-purchase').style.backgroundColor = bgColor;
    document.getElementById('href-purchase').style.color = color;
  }
  aHrefShowListWhenClicked(bgColor : string , color : string){
    document.getElementById('dropdown-fruit').style.backgroundColor = bgColor;
    document.getElementById('dropdown-fruit').style.color = color;
  }


  showMenuBar(value : boolean){
    document.getElementById('right-container').hidden = value;
  }
  setUpRightContainerContentHeight(value : string){
    document.getElementById('right-container-content').style.height = value;
  }

  addFruit() {
    this.setUpRightContainerContentHeight("auto");
    this.aHrefShowListWhenClicked(null,null);
    this.aHrefBuyFruitWhenClicked("crimson","white");
    this.showMenuBar(false);

    document.getElementById('form-container').hidden = false;
    document.getElementById('list-container').hidden = true;
    console.log('addFruit clicked');
  }

  showList() {

    this.setUpRightContainerContentHeight("400px");
    this.aHrefBuyFruitWhenClicked(null,null);
    this.aHrefShowListWhenClicked("crimson","white");
    this.showMenuBar(false);

    document.getElementById('form-container').hidden = true;
    document.getElementById('list-container').hidden = false;
  }
}
