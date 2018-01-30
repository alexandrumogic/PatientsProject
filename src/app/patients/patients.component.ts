import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  private patients: any[];

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patientsService.getPatients().subscribe(data => {
      this.patients = data.json();
    })
  }

  destroy(id: number) {
    this.patientsService.deletePatient(id);
  }

}
