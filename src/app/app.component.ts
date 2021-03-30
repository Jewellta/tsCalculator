import { Component } from '@angular/core';
import { AbstractExtendedWebDriver } from 'protractor/built/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  one:number=0;
  two:number=0;
  Total:number=0;


  multiply():void{
    this.Total=this.one+this.two;
  }
}







