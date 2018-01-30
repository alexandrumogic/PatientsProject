import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  private patient: object;

  constructor(private route: ActivatedRoute, private location: Location,
              private patientsService: PatientsService ) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientsService.getPatient(id).subscribe(
      patient => { this.patient = patient; }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
