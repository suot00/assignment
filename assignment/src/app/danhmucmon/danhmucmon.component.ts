import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { BlockScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-danhmucmon',
  templateUrl: './danhmucmon.component.html',
  styleUrls: ['./danhmucmon.component.css']
})
export class DanhmucmonComponent implements OnInit {
  lists: any;
  p: number = 1;
  constructor(private http: HttpClient) { }
  img =
    {
      mail: '/assets/images/mail.png',
      logo: '/assets/images/s2.png',
      banner: 'assets/images/banners.jpg',
      team1: 'assets/images/team1.jpg',
      team2: 'assets/images/team2.jpg',
      team3: 'assets/images/team3.jpg',
      team4: 'assets/images/team4.jpg',
      team11: 'assets/images/s1.png',
      team22: 'assets/images/s2.png',
      team33: 'assets/images/s3.png',
      team44: 'assets/images/s5.png'

    }
  ngOnInit() {
    this.GetData().subscribe(data => {
      this.lists = data
      console.log(this.lists)
    })
  }
  GetData() {
    return this.http.get('../../assets/db/Subjects.json')
  }
  Up() {
    this.p++;

  }
  down() {
    this.p--;
    if (this.p = 1) {
      return this.p;

    }
  }

}
