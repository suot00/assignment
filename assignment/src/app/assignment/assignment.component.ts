import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  img =
    {
      mail: '/assets/images/mail.png',
      logo: '/assets/images/s2.png',
      banner: 'assets/images/banner.jpg',
      team1: 'assets/images/team1.jpg',
      team2: 'assets/images/team2.jpg',
      team3: 'assets/images/team3.jpg',
      team4: 'assets/images/team4.jpg',
      team11: 'assets/images/s1.png',
      team22: 'assets/images/s2.png',
      team33: 'assets/images/s3.png',
      team44: 'assets/images/s5.png'

    }

  constructor() { }

  ngOnInit() {
  }

}
