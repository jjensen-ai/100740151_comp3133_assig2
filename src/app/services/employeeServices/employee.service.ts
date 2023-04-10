import { Injectable, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, MutationResult, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const GETEMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private apollo: Apollo) {}

  getAllEmployees(): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery<any>({
      query: GETEMPLOYEES,
    }).valueChanges;
  }
}
