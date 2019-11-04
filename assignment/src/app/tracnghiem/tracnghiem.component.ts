import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-tracnghiem',
  templateUrl: './tracnghiem.component.html',
  styleUrls: ['./tracnghiem.component.css']
})
export class TracnghiemComponent implements OnInit {
  p = 1;
  url = '';
  lists: any;
  list: any;
  h = 0;
  m = 0;
  s = 5;
  timeout = null;
  isEdit;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  ngOnInit() {
    this.isEdit = true
    this.url = '../../assets/db/Quizs/' + this.route.snapshot.params.id + '.json'
    console.log(this.route.snapshot.params.id)
    this.GetData().subscribe(data => {
      this.lists = data
      console.log(this.lists)
    })
    this.GetData().subscribe(data => {
      this.list = data
      console.log(this.lists)
    })

  }

  GetData() {
    return this.http.get(this.url);
  }
  GetData2() {
    return this.http.get('../../assets/db/Subjects.json')
  }
  start() {
    if (this.s === -1) {
      this.m -= 1;
      this.s = 59;
    }
    if (this.m === -1) {
      this.h -= 1;
      this.m = 59;
    }
    if (this.h == -1) {
      clearTimeout(this.timeout);
      alert('Hết giờ');
      return false;
    }
    document.getElementById('h').innerText = this.h.toString();
    document.getElementById('m').innerText = this.m.toString();
    document.getElementById('s').innerText = this.s.toString();
    this.timeout = setTimeout(() => {
      this.s--;
      this.start();
    }, 1000);
    this.isEdit = false



  }
  stop() {
    clearTimeout(this.timeout);

    this.isEdit = true



  }

}
