import { Component, OnInit } from '@angular/core';
import { DataText } from '../data';

@Component({
  selector: 'app-erste',
  templateUrl: './erste.component.html',
  styleUrls: ['./erste.component.scss']
})
export class ErsteComponent implements OnInit {
	data: DataText = {
		id: 1,
		name: 'Erste'
	};
	about: DataText = {
		id:2,
		name: 'About Jordan'
	};
	project: DataText = {
		id:3,
		name: 'Projects'
	};
	hobbies: DataText = {
		id:4,
		name: 'Hobbies'
	};

  constructor() { }

  ngOnInit(): void {
  }
  
}
