import {StackActionType} from '@react-navigation/native';

export type param = {
  navigation: {
    openDrawer(): void;
    goBack(): void;
    dispatch(arg: StackActionType): void;
    /**
     * Will Navigate to the given route
     * @param route string
     * @param props any
     * @returns void
     */
    navigate: (route: string, props?:any) => void;
  };
  route:{
    params:any
  }
};
