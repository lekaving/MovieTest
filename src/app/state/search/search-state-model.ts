export enum SearchTypeEnum {
  'movie',
  'multi'
}

export interface SearchQuery {
  type: SearchTypeEnum;
  query: string;
}

export enum MediaTypeEnum {
  'movie',
  'tv',
  'person'
}

export interface Suggestion {
  type: MediaTypeEnum;
  title: string;
}

// Todo: searched must be generic type
export interface SearchStateModel {
  searched: any;
  suggestions: Suggestion[];
}

export class SearchByQuery {
  static readonly type = '[Search] SearchByQuery';

  constructor(public payload: SearchQuery) {
  }
}
// TODO: возможно сюда надо кидать определнный генерик
export class GetSuggestions {
  static readonly type = '[Search] GetSuggestions';
}
