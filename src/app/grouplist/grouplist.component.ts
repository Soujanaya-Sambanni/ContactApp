import { Component,OnInit } from '@angular/core';
import { contactModel } from '../contact/contactModel';
import { CapiService } from '../capi.service';
import { ActivatedRoute, ParamMap,Params } from '@angular/router';
@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  constructor(private capi:CapiService, private ActivatedRoute:ActivatedRoute){}

  contactdata!:contactModel[];
  datagroupname!:string;

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((param:Params)=>{
      this.datagroupname=param['get']("item");
      this.FilterGroupname(this.datagroupname);
    });

}
FilterGroupname(item:string){
  this.capi.fetchdata(item).subscribe((data)=>{
    console.log(item);
    console.log(data);
    this.contactdata=data;
  })
}

}