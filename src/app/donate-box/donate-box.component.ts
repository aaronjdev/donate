import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-box',
  templateUrl: './donate-box.component.html',
  styleUrls: ['./donate-box.component.css']
})
export class DonateBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goal: number = 5000;
  totalDonated: number = 0;
  amountToGo: number = this.goal;
  donors: number = 0;
  progress:number = 0;
  boxValue:string = '';

  onGive(value) {
    value = parseInt(value); 
    if(this.checkAmount(value)){
      //console.log("hello " + value);
      this.handleDonation(value);

    }else{
      alert("donation is under $5");
    }
    this.boxValue = null; 
  }
  checkAmount(amount){
    if(amount >=5){
      return true;
    }else{
      return false;
    }
  }

  handleDonation(value){
    this.totalDonated += value;
    this.amountToGo = this.goal-this.totalDonated;
    this.donors++;
    this.progress = Math.round((this.totalDonated/5000) * 100);

  }


}
