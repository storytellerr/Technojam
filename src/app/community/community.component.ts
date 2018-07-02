import { Component, OnInit, OnDestroy,Input } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})


export  CommunityComponent implements OnInit {
itemDoc: AngularFirestoreCollection<any>;
items: Observable<any[]>;
closeResult: string;
name:String;
body:String;
image:string;
loading:boolean=true;
jrhbjk

  constructor(private afs: AngularFirestore,private modalService: NgbModal) {
    this.itemDoc = this.afs.collection(`Community`);
    this.items=this.itemDoc.valueChanges();
    // this.items = db.list('Community').valueChanges();
    // this.loading=false;
  }
  //  queryData(s){
  //   if(s=="All")
  //   {  
  //      console.log(s);
  //      this.items=this.db.list("Community").valueChanges();
  //   } 
  //   else{
  //     console.log(s);
  //     this.items=this.db.list("Community",ref => ref.orderByChild(s).equalTo(true).valueChanges();
  //   }
  // }
  ngOnInit() {
     openVerticallyCentered(name,body,image,content) {
       this.loading=true;
       this.name=name;
       this.body=body;
       this.image=image;
    this.modalService.open(content, { centered: true });
    this.loading=false;
  }}
