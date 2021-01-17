import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  characterList: ICharacter[] = [];
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.list(true).subscribe(response => {
      this.characterList = response;
    });

    this.charactersService.changeVotes(true).subscribe();
  }

  addVote(id: string) {
    console.log(id);
    this.charactersService.addVote(id, true).subscribe(response => {
      console.log(response);
    });

  }

}
