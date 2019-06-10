import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public navigate(link: string): void {
    this._router.navigate([link]);
  }
}
