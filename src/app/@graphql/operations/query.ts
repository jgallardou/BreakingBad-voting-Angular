import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragments';

export const GET_CHARACTERS = gql`

query getCharacters($skip:Boolean!){
  characters{
   ...characterObject
  }
}
${CHARACTER_OBJECT}
`;


export const GET_CHARACTER = gql`

query getCharacter($id: ID!, $skip: Boolean!){

  character(id:$id){
    ...characterObject
  }
}
${CHARACTER_OBJECT}
`;
