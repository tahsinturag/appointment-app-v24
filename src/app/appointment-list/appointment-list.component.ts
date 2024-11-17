 import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
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

 export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []
  // newAppointmentTitle: any;



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
    }
  }
//  <!--delete item first have to create a new method-->
  deleteAppointment(index: number) {
  //    remove index using splice method
    this.appointments.splice(index, 1);
  }
}

// //using local storage
//    localStorage.setItem('appointments', JSON.stringify(this.appointments));
//  };




