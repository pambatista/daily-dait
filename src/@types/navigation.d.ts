export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      dashboard: undefined;
      registerMeal: undefined;
      updateMeal: {
        id: string;
      };
      meal: {
        id: string;
      };
      feedback: {
        isDiet: boolean;
      };
    }
  }
}
