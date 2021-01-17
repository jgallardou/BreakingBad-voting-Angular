import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { ADD_VOTE } from 'src/app/@graphql/operations/mutations';
import { CHANGE_VOTE, CHANGE_VOTES } from 'src/app/@graphql/operations/subscription';
import { GET_CHARACTER, GET_CHARACTERS } from 'src/app/@graphql/operations/query';
import { ApiService } from 'src/app/@graphql/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }

  list(skip: boolean) {
    return this.query(GET_CHARACTERS, { skip }).pipe(map(response => {
      return response['characters'];
    }));
  }

  getCharacter(id: string, skip: boolean) {
    return this.query(GET_CHARACTER, { id, skip }).pipe(map((response: any) => {
      return response['character']
    }));
  }

  addVote(character: string, skip: boolean) {
    return this.mutation(ADD_VOTE, { character, skip }).pipe(map((response: any) => {
      return response['addVote']
    }));
  }

  changeVoteId(id: string, skip: boolean) {
    return this.subscription(CHANGE_VOTE, { id, skip }).pipe(map((response: any) => {
      return response['changeVote']
    }));
  }

  changeVotes(skip: boolean) {
    return this.subscription(CHANGE_VOTES, { skip }).pipe(map((response: any) => {
      return response['changeVotes']
    }));
  }

}
