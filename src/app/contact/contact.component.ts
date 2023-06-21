import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CapiService } from '../capi.service';
import { contactModel } from './contactModel';
import { GapiService } from '../gapi.service';
import { groupModel } from '../groupname/groupModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform!:FormGroup;
  contactdata!:contactModel[];
  data!:groupModel[];
  selectedgroupname!:string;

  constructor(private formbuilder:FormBuilder, private capi:CapiService,private gapi:GapiService){}
  ngOnInit(): void {
    this.contactform=this.formbuilder.group({
      cname:['',Validators.required],
      address:['',Validators.required],
      number:['',Validators.required],
      groupname:['',Validators.required]
      
    })
    this.getcontact(this.data);
    this.getgroupname();
 
}
addcontact(data:contactModel) {
  //console.log(data)
  this.capi.addcontact(data).subscribe((res => {
    this.contactform.reset();
  }))
  this.getcontact(data);
  
}

getcontact(data:any) {
  this.capi.getcontact().subscribe(res => {
    this.contactdata = res;
  })
}

deletecontact(dataid: number) {
  this.capi.deletecontact(dataid).subscribe(res => {
    this.deletecontact(dataid);
  })
  this.getcontact(this.data);
  
}
getgroupname(){
  this.gapi.getgroupname().subscribe(res=>{
    this.data=res;
  })
}
onChangeEvent(event:any){
this.selectedgroupname = event.target.value;
console.log(event?.target.value);
}

}
