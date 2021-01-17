import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from '@apollo/client';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  protected query(query: DocumentNode, variables: object = {}, context: object = {}) {
    return this.apollo.watchQuery({
      query,
      variables,
      context,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((response: any) => {
      return response.data;
    }));
  }
  protected mutation(mutation: DocumentNode, variables: object = {}, context: object = {}) {
    return this.apollo.mutate({
      mutation,
      variables,
      context
    }).pipe(map((response: any) => {
      return response.data;
    }));
  }

  protected subscription(subscription: DocumentNode, variables: object = {}, context: object = {}) {
    return this.apollo.subscribe({
      query: subscription,
      variables,
      context
    }).pipe(map(response => {
      return response.data;
    }));
  }





}
