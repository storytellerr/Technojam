import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


declare const window: any;


@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {
isNavbarCollapsed = true; 


  constructor() {
     
   }

@HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 500) {
       let body = document.getElementsByClassName('navbar navbar-expand-md')[0];
      body.classList.remove("newclass");
      console.log('You are less than 500px from the top to bottom');
    } else if (number > 500) {
       let body = document.getElementsByClassName('navbar navbar-expand-md')[0];
      body.classList.add('newclass'); 
      console.log('You are 500px from the top to bottom');
    }
  }
  ngOnInit() {
  
  }
  login(){

  }
  logout(){

  }


}


