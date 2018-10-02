import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  courses: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Miguel',
      lastName: 'Mendoza',
      courses: 'Programming'
    }
    this.students[1] = {
      id: 2,
      firstName: 'Tom',
      lastName: 'Brady',
      courses: 'Swimming'
    }
    this.students[2] = {
      id: 3,
      firstName: 'Mark',
      lastName: 'Zuc',
      courses: 'Business'
    }
    this.students[3] = {
      id: 4,
      firstName: 'Joe',
      lastName: 'Biden',
      courses: 'Politics'
    }
  }

  ngOnInit() {
  }


  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      courses: 'Boxing'
    }
    this.students.push(student);
  }
}
