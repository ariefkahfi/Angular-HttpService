import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpFruitService {
  constructor(private http : HttpClient){}


  //update to stock field


  buyFruit(id : number , stock : number , callback : () => void){
    this.http.get('http://localhost/angular-http/back-end/purchase.php?id='+id+'&stock='+stock
    ,{observe : "response" , responseType : "text"})
      .subscribe((value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      },()=>{
        callback();
      });
  }

  updateStock(id : number , stock : number , callback : () => void) : void{
    this.http.get('http://localhost/angular-http/back-end/update-stock.php?id='+id+'&stock='+stock,{observe :"response" , responseType : "text"})
      .subscribe((value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      },()=>{
          callback();
      });
  }


  //delete fruit from fruits table
  deleteFruit(id : number , callback : () => void) : void{
    this.http.get('http://localhost/angular-http/back-end/delete.php?id='+id , {observe : "response",responseType : "text"})
      .subscribe((value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      },()=>{
        console.log('Request complete');
        callback();
      });
  }

  //select all from fruits table
  getFruits(callbackData : (data) => void) : void{

    this.http.get('http://localhost/angular-http/back-end/select.php')
      .subscribe((value : any)=>{
        console.log(value.fruits);
        callbackData(value.fruits);
      },(error)=>{
        console.log(error);
      },()=>{

      });
  }

  //insert to fruits table
  saveFruit(fruit : {name : string , price : number , stock : number} , callback : (response : string)=> void):void{
    let urlParam = new URLSearchParams();


    urlParam.set('name',fruit.name);
    urlParam.set('price',fruit.price.toString());
    urlParam.set('stock',fruit.stock.toString());

    console.log('urlParam to String : '  + urlParam.toString());

    this.http.post('http://localhost/angular-http/back-end/insert.php',urlParam.toString(),
      {
          observe : "response" ,headers: new HttpHeaders().set('Content-type','application/x-www-form-urlencoded'),
          responseType : "text"
        }
    ).subscribe((responseOK)=>{
        console.log(responseOK);
        callback(responseOK.body);

    },(error)=>{
      console.log(error);
    },()=>{
      console.log('Request Complete');

    });
  }

}
