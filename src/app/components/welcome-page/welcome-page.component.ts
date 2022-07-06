import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async toEmptyPage() {
    // @ts-ignore
    document.getElementById('main-container').style.animation = 'closing-resizing-animation .4s forwards'
    await this.delay(500);

    this.router.navigate(["home"])
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
