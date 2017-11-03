import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  noDisplay(){
    document.getElementById('form-container').hidden = true;
    document.getElementById('list-container').hidden = true;
  }

  ngOnInit(): void {
    this.noDisplay();
  }

}
