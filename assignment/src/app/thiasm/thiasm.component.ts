import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-thiasm',
  templateUrl: './thiasm.component.html',
  styleUrls: ['./thiasm.component.css']
})
export class ThiasmComponent implements OnInit {

  subjectName
  lists: any
  result = {
    mark: 0
  }
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
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
  submit() {
    this.lists.map(ques => {
      if (ques._answerId) {
        if (ques._answerId === ques.AnswerId) {
          this.result.mark += ques.Marks
        }
      }
      console.log(ques._answerId);

    })

    console.log('---------------', this.result.mark);

  }

}
