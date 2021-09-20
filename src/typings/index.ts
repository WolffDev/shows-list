export interface IDataObj {
  data: {
    page: {
      structures: {
        nodes: ITopNode[];
      };
    };
  };
}

export interface ITopNode {
  title: string;
  entities: {
    nodes: ISubNode[];
  };
}

export interface ISubNode {
  title: string;
  subtitle: string;
  art: IArt;
}

export interface IArt {
  url: string;
  height: number;
  width: number;
}

export interface IUseFetch<T> {
  data: T | null;
  error: null | string;
  loading: boolean | null;
}
