export interface Error {
  response: Response;
  message: string;
}

export interface Response {
  data: Data;
  status: number;
}

export interface Data {
  error: string;
}
