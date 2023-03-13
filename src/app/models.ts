export interface Movie {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  img: string;
  year: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}
