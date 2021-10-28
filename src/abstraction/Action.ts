export interface Action {
  type: string;
  payload: any;
  message?: ActionNotifier;
}

export interface ActionNotifier {
  status: boolean;
  message: string;
}
