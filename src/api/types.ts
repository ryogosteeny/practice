export interface ApiSuccessResponse<T> {
  page: number;
  results: T;
  totalPage: number;
  totalResults: number;
}

export interface ApiFailResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface MovieType {
  adult?: boolean;
  overview?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  backdrop_path?: string;
  video?: boolean;
  vote_count?: number;
  vote_average?: number;
  popularity?: number;
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
}
