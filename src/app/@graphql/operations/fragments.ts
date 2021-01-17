import { gql } from "apollo-angular";

export const CHARACTER_OBJECT = gql`

  fragment characterObject on Character {
	id
  name
  actor @skip(if:$skip)
	description @skip(if:$skip)
  total_episodes @skip(if:$skip)
  photo @skip(if:$skip)
  votes
  url @skip(if:$skip)
}
`;


export const RESULT_OBJECT = gql`

fragment ResultObject on ResultOperation{
  status
    message
    character
  	{
			id
  		name
  		actor @skip(if:$skip)
			description @skip(if:$skip)
  		total_episodes @skip(if:$skip)
  		photo @skip(if:$skip)
  		votes
  		url @skip(if:$skip)
  	}
}
`;

