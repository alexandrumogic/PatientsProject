import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class PatientsService {

  private patients: any[];
  private baseApiUrl = 'https://uvt-hci-lab.herokuapp.com/';

  constructor(private http: Http) {}

  private extractData(res:Response) {
    let body = res.json();
    return body;
  }

  getPatients() {
    return this.http.get(this.baseApiUrl+'patients.json');
  }

  getPatient(id: number) {
    return this.getPatients().map(this.extractData).map(patients => patients.filter(patient => patient.id === id)[0]);
  }

  deletePatient(id: number) {
    this.http.delete(this.baseApiUrl+'patients/'+id+'.json').subscribe(data => { console.log(data) });
  }

}
