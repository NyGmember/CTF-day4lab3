import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postURL = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[];
  form: FormGroup;
  response: any;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { 
    this.form = this.fb.group({
      userId: '',
      title: '',
      body: ''
    });
  }

  ngOnInit(): void {
    this.httpClient
      .get(this.postURL)
      .subscribe(result => {
        this.posts = result as any[];
      });
  }

  addPost(){
    this.httpClient
      .post(this.postURL, this.form.value)
      .subscribe(result => {
        this.response = result;
        console.log(this.response)
      });
  }

}
