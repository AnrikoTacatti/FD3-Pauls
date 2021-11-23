import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'my-app';
  url:string = 'http://fe.it-academy.by/Examples/cards2.png';
  urlWidth:number = 574; 
  urlHeight:number = 2712; 
  width:number = 143.5;
  height:number = 193.715;
  offsetX:number = 0;
  offsetY:number = 0;

  imgChanged():void{
    console.log(+this.offsetX);
    if(this.offsetX <= (this.width - this.urlWidth)){
      this.offsetX = 0;
      if(this.offsetY > (this.height - this.urlHeight)) {
        this.offsetY -= this.height;
      }
      else{
        this.offsetY = 0;
        this.offsetX = 0;
      }
    }
    else{
      console.log(+this.offsetX);
      this.offsetX -=this.width;
    }
  }
}
