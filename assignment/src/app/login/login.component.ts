import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Params, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  list: any;
  psw;
  uname;
  check = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData() {
    return this.http.get('../../assets/db/Students.json')

  }
  Check() {
    this.check = true;
    for (let i = 0; i < this.list.length; ++i) {
      if (this.uname == this.list[i].username && this.psw == this.list[i].password) {
        alert('dang nhap thanh cong');

      }
      else this.check = false;
    }

  }

}
