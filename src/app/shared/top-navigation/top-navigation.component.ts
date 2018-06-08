import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

 isNavbarCollapsed = true;
//   myStyle: object = {};
//   myParams: object = {};
//   width: number = 300;
//   height: number =300;

  constructor() { }

  ngOnInit() {
//  consoleText(['we are a community', 'We love to code', 'Made with Love.'], 'text',['#BD6983','tomato','lightblue']);

    // this.myStyle = {

    //     'width': '100',
    //     'height': '100',
    //     'z-index': -1,
    //     'top': 0,
    //     'left': 0,
    //     'right': 0,
    //     'bottom': 0,
    // };

    // this.myParams = {
    //     particles: {
    //         number: {
    //             value: 150,
    //         },
    //         color: {
    //             value: '#ff0000'
    //         },
    //         shape: {
    //             type: 'triangle',
    //         },
    //    }
    // };

  }

  }
// function consoleText(words, id, colors) {
//  if (colors === undefined) colors = ['#fff'];
//  var visible = true;
//  var con = document.getElementById('console');
//  var letterCount = 1;
//  var x = 1;
//  var waiting = false;
//  var target = document.getElementById(id)
//  target.setAttribute('style', 'color:' + colors[0])
//  window.setInterval(function() {
//
//  if (letterCount === 0 && waiting === false) {
//  waiting = true;
//  target.innerHTML = words[0].substring(0, letterCount)
//  window.setTimeout(function() {
//  var usedColor = colors.shift();
//  colors.push(usedColor);
//  var usedWord = words.shift();
//  words.push(usedWord);
//  x = 1;
//  target.setAttribute('style', 'color:' + colors[0])
//  letterCount += x;
//  waiting = false;
//  }, 1000)
//  } else if (letterCount === words[0].length + 1 && waiting === false) {
//  waiting = true;
//  window.setTimeout(function() {
//  x = -1;
//  letterCount += x;
//  waiting = false;
//  }, 1000)
//  } else if (waiting === false) {
//  target.innerHTML = words[0].substring(0, letterCount)
//  letterCount += x;
//  }
//  }, 120)
//  window.setInterval(function() {
//  if (visible === true) {
//  con.className = 'console-underscore hidden'
//  visible = false;
//
//  } else {
//  con.className = 'console-underscore'
//
//  visible = true;
//  }
//  }, 400)
// }