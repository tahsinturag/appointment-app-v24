 import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import {OnInit} from "@angular/core";

 @Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

// export class AppointmentListComponent {
// //create object
//   appointment: Appointment = {
//     id: 1,
//     title: "take dog for walk",
//     date: new Date("2024-11-17")
//   }
// }

 export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []
  // newAppointmentTitle: any;
  //  write below all our property
   ngOnInit(): void {
     // throw new Error('Method not implemented.');
     // console.log("got loaded")

     //   load appointments -ngOnInit - life cycles hook

     let savedAppointments = localStorage.getItem('appointments');
     this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
   //   if we have value then parsing the saved appointments and assigned them into appointments ;
   //   else create empty array indicated by the column
   }


addAppointment() {
  // alert(this.newAppointmentTitle + " "+ this.newAppointmentDate);
  // remove white space
  if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
    let newAppointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }
    this.appointments.push(newAppointment);
    this.newAppointmentTitle = "";//reset the input field
    this.newAppointmentDate = new Date();
    // alert(this.appointments.length)
    //using local storage
//  transform to JSON then save it to the local storage
   localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }
  }
//  <!--delete item first have to create a new method-->
  deleteAppointment(index: number) {
  //    remove index using splice method
    this.appointments.splice(index, 1);
  //   for update after delete
    localStorage.setItem("appointments", JSON.stringify(this.appointments))




  }
}





