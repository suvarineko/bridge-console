import { useUserSettings } from '../../hooks/useUserSettings';

export enum GettingStartedShowState {
  SHOW = 'show',
  HIDE = 'hide',
  DISAPPEAR = 'disappear',
}

export const useGettingStartedShowState = (
  key: string,
  defaultValue = GettingStartedShowState.HIDE,
) => useUserSettings<GettingStartedShowState>(key, defaultValue, true);
