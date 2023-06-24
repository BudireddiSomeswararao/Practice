   
    import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDirectives';

  firstName='Somesh';

  num =3;
  num1=3;

  

  result!:number;
  calculate(val1:string,val2:string){
    this.result=parseFloat(val1)+ parseFloat(val2)
  }
  res!:number;
  calc(val1:string,val2:string){
    this.res=parseFloat(val1)- parseFloat(val2)
  }

 
}
