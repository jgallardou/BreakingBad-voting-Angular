import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/@interfaces/character';


//Servicios
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  character: ICharacter = {
    id: '1',
    name: '',
    votes: 1

  };

  constructor(private charactersService: CharactersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.charactersService.getCharacter(id, false).subscribe(response => {
      this.character = response;
    });
    this.charactersService.changeVoteId(id, false).subscribe();
  }


  addVote(idCharacter: string) {
    this.charactersService.addVote(idCharacter, true).subscribe();
  }

}
