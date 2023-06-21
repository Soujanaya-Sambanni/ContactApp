import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { groupModel } from './groupname/groupModel'; 

@Injectable({
  providedIn: 'root'
})
export class GapiService {

  url = "http://localhost:3000/groupName"

  constructor(private http: HttpClient) { }

  addgroupname(data: groupModel) {
    return this.http.post<groupModel>("http://localhost:3000/groupName", data);
  }

  //get category
  getgroupname() {
    return this.http.get<groupModel[]>("http://localhost:3000/groupName");
  }

  //fetch category
  fetchgroupname(id: number) {
    return this.http.get<groupModel>("http://localhost:3000/groupName/" + id);
  }

  //delete
  deletegroupname(id: number) {
    return this.http.delete<groupModel>("http://localhost:3000/groupName/" + id)
  }

  //update
  updategroupname(data:groupModel, id:number){
    return this.http.put<groupModel>("http://localhost:3000/groupName/"+id, data)
  }

}