import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragments';

export const CHANGE_VOTE = gql`
  subscription changeVoteId($id: ID!, $skip: Boolean!){
    changeVote(id: $id){
      ...characterObject
    }
  }
  ${CHARACTER_OBJECT}
`;


export const CHANGE_VOTES = gql`
  subscription changeVotes($skip: Boolean!){
    changeVotes{
      ...characterObject
    }
  }
  ${CHARACTER_OBJECT}
`;
