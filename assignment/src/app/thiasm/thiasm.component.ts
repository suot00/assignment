import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-thiasm',
  templateUrl: './thiasm.component.html',
  styleUrls: ['./thiasm.component.css']
})
export class ThiasmComponent implements OnInit {
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
  subjectName
  lists: any
  h = 0;
  m = 59;
  s = 59;
  answers = [];
  timeout = null;
  isEdit;
  result = {
    mark: 0
  }
  mark = 0;
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  ngOnInit() {
    this.isEdit = true


    this.router.paramMap.subscribe(params => {
      const id = params.get('Id')
      this.subjectName = id
      console.log(this.subjectName);

    })
    this.getQuestion(this.subjectName).subscribe(data => {
      this.lists = data
      console.log(this.lists);

    })
  }
  getQuestion = (Id) => {
    return this.http.get(`../../assets/db/Quizs/${Id}.json`)
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
    let mark = 0;
    for (let i = 0; i < this.lists.length; ++i) {
      if (this.lists[i].AnswerId == this.answers[i]) {
        mark += this.lists[i].Marks
      }
    }
    console.log(mark)
  }
  submit() {
    for (let i = 0; i < this.lists.length; ++i) {
      if (this.lists[i].AnswerId == this.answers[i]) {
        this.mark += this.lists[i].Marks
      }
    }
    console.log(this.mark)
  }

}
