import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestinterface } from 'src/app/shared/types/registerRequest.interface';
import { ActionType } from './actionTypes';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: RegisterRequestinterface }>()
);
export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailAction = createAction(ActionType.REGISTER_FAILURE);
