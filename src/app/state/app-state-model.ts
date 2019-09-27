export interface AppStateModel {
  isLoading: boolean;
}

export class ChangeLoading {
  static readonly type = '[App] Load Status';

  constructor(public payload: boolean) {}
}
