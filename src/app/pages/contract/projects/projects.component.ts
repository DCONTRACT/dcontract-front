import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isProject = false;
  constructor() { }

  ngOnInit(): void {
  }

  addProject(){
    this.isProject = true;
  }

}
