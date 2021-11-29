import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { IpService } from '../ip.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
//////////////////////
export class ServerComponent implements OnInit {

  ipAddress:string = '';
  constructor(
     private ipService:IpService,
     private http: HttpClient
  ){ }
  ////////////////////////
  ngOnInit(){

//////////////////////////////
this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{

  this.ipAddress = res.ip;
  }
//////////////////////////////
  )};

  name = 'Mike';
  job = 'Engineer';
  currentDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
}
