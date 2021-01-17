import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  loading: boolean = false;
  charactersArray: ICharacter[] = [];

  constructor(private charactersService: CharactersService) {
    this.loading = true;

    this.charactersService.list(false).subscribe(response => {
      this.charactersArray = response;
      setInterval(() => {
        this.loading = false;
      }, 450);

    });

  }

  ngOnInit(): void {
  }

}
