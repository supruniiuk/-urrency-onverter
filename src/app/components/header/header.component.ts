import { Component, Input, OnInit } from '@angular/core';
import { Rate } from 'src/app/shared/interfaces/rate.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() EUR: Rate | null;
  @Input() USD: Rate | null;

  constructor() {}

  ngOnInit(): void {}
}
