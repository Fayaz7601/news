import { Component, OnInit } from '@angular/core';
import{NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _service:NewsapiserviceService) { }
  
  
  topheadingDisplay:any =[]

  ngOnInit(): void {

    this._service.topheading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay=result.articles
    })
  }

}
