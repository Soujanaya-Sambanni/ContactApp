import { Injectable } from '@angular/core';
import { contactModel } from './contact/contactModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapiService {


  url = "http://localhost:3000/contact";


  constructor(private http: HttpClient) { }

  addcontact(data: contactModel) {
    return this.http.post<contactModel>("http://localhost:3000/contact", data);
  }

  //get category
  getcontact() {
    return this.http.get<contactModel[]>("http://localhost:3000/contact");
  }

  //fetch data
  fetchdata(item: string) {
    return this.http.get<contactModel[]>("http://localhost:3000/contact/" + '?groupname=' +item);
  }

  fetchcontact(id: number) {
    return this.http.get<contactModel>("http://localhost:3000/contact/" +id);
  }

  //delete
  deletecontact(id: number) {
    return this.http.delete<contactModel>("http://localhost:3000/contact/" + id)
  }
  
  //
  updatecontact(data: contactModel, id: number) {
    return this.http.put<contactModel>("http://localhost:3000/contact/" + id, data);
  }

}