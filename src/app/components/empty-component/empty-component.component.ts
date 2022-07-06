import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-empty-component',
  templateUrl: './empty-component.component.html',
  styleUrls: ['./empty-component.component.css']
})
export class EmptyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
