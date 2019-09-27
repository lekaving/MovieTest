export interface Movie {
  title: string;
  release_date: string;
  id: number;
  overview: string | null;
  poster_path: string | null;
}

export interface Lists<T> {
  page: T;
  results: any;
}
