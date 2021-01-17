import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../../@interfaces/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: ICharacter = {
    id: '1',
    name: '',
    votes: 0
  };


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goCharacter(id: string) {
    this.router.navigate(['/details', id]);
  }

}
