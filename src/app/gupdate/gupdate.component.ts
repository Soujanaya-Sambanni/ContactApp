import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GapiService } from '../gapi.service'; 
import { groupModel } from '../groupname/groupModel';

@Component({
  selector: 'app-gupdate',
  templateUrl: './gupdate.component.html',
  styleUrls: ['./gupdate.component.css']
})
export class GupdateComponent  implements OnInit{
  public dataid!: number;
  public group!:   groupModel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private gapi :GapiService) { }
  

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.gapi.fetchgroupname(this.dataid).subscribe((data: groupModel) => {
      this.group = data;
    })
  }

  gupdate() {
    this.gapi.updategroupname(this.group, this.dataid).subscribe((res: groupModel) => {
      this.router.navigate(["/groupname"])
    })
  }


}
