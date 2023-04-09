import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, MutationResult, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const LOGIN = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
`;

const SIGNUP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  login(
    username: string | any,
    password: string | any
  ): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery<any>({
      query: LOGIN,
      variables: {
        username: username,
        password: password,
      },
    }).valueChanges;
  }

  signUp(
    username: string,
    email: string,
    password: string
  ): Observable<MutationResult<any>> {
    return this.apollo.mutate({
      mutation: SIGNUP,
      variables: {
        username: username,
        email: email,
        password: password,
      },
    });
  }
}
