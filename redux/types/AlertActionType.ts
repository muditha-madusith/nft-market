export const SHOW_ALERT = "SHOW_ALERT";

export interface Alert {
  alertMessage?: AlertMessageDetail;
}

export interface AlertMessageDetail {
  message: string;
  status: string;
}

export interface showAlert {
  type: typeof SHOW_ALERT;
  payload: AlertMessageDetail;
}

export type AlertDispatchTypes = showAlert;
