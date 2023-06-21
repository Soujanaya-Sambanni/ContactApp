import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { groupModel } from './groupModel';
import { GapiService } from '../gapi.service';


@Component({
  selector: 'app-groupname',
  templateUrl: './groupname.component.html',
  styleUrls: ['./groupname.component.css']
})
export class GroupnameComponent {
  groupnameForm!: FormGroup;
  data!: groupModel[];

  constructor(private formbuilder: FormBuilder, private api: GapiService) { }

  ngOnInit(): void {
    this.groupnameForm = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]



    })
    this.getgroupname(this.data);

}
addgroupname(data: groupModel) {
  //console.log(data)
  this.api.addgroupname(data).subscribe((res => {
    this.groupnameForm.reset();
    this.getgroupname(data);
  }))


}

getgroupname(data: any) {
  this.api.getgroupname().subscribe(res => {
    this.data = res;
  })
}

deletegroupname(dataid: number) {
  this.api.deletegroupname(dataid).subscribe(res => {
    this.deletegroupname(dataid);
  })
  this.getgroupname(this.data);

}


}
