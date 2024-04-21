export interface Result<T> {
  resultCode: string;
  resultData: T;
  resultMessage: string;
  status: string;
}

export interface StationResult {
  data: Station[];
  meta: object;
}

export interface Station {
  address3: string | number; // 2중 하나의 type 으로 받을 수 있음
  address2: string;
  address1: string;
  latitude: string;
  installerId: number;
  stationName: string;
  managerId: number;
  useFg: string;
  stationId: number;
  longitude: string;
  status: number;
}

export interface LoginResult {
  data: Auth;
}

export interface Auth {
  accessToken: string;
  managerAccount: string;
  refreshToken: string;
}
