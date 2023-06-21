import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CapiService } from '../capi.service';
import { contactModel } from '../contact/contactModel';

@Component({
  selector: 'app-cupdate',
  templateUrl: './cupdate.component.html',
  styleUrls: ['./cupdate.component.css']
})
export class CupdateComponent  implements OnInit{
  public dataid!: number;
  public contact!:  contactModel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private capi: CapiService) { }
  

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.capi.fetchcontact(this.dataid).subscribe((data: contactModel) => {
      this.contact = data;
    })
  }

  update() {
    this.capi.updatecontact(this.contact, this.dataid).subscribe((res: contactModel) => {
      this.router.navigate(["/contact"])
    })
  }


}
