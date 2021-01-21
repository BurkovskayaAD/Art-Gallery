import {environment} from '../environments/environment';

export class Constants {
  static readonly baseApiUrl = environment.baseUrl;

  static readonly artistsApiUrl = `${environment.baseUrl}/artists`;
  static readonly artistsSearchApiUrl = `${environment.baseUrl}/artists/search`;
  static readonly artistsMoreInfoApiUrl = `${environment.baseUrl}/artists/`;
  static readonly exhibitionsApiUrl = `${environment.baseUrl}/exhibitions`;
  static readonly paintingsApiUrl = `${environment.baseUrl}/paintings`;
  static readonly paintingsMoreInfoApiUrl = `${environment.baseUrl}/paintings/`;
  static readonly usersApiUrl = `${environment.baseUrl}/users`;

}
