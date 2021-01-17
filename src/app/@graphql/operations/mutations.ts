import { gql } from "apollo-angular";
import { RESULT_OBJECT } from "./fragments";

export const ADD_VOTE = gql`

  mutation addVote($character:ID!, $skip: Boolean!){
    addVote(character:$character){
      ...ResultObject
    }
  }
  ${RESULT_OBJECT}
`;
