import { Status } from "../../type";

export interface SampleData {
  name: string;
}

export interface IntialState {
  isAuthenticated : boolean;
  isLoading : boolean;
  sampleData: {
    data: SampleData[];
    status: Status;
    error: string;
  };
  
}
