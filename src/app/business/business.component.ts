import { Component, OnInit } from '@angular/core';
import{NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }
  businessnewsdisplay:any=[]
  ngOnInit(): void {
    this._services.bsinessNews().subscribe((result)=>{
   this.businessnewsdisplay=result.articles
    })
  }

}
