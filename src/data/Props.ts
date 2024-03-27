export interface PropsInfo {
  headers: string[];
  caption: string;
  propsDetail: IPropsDetail[];
}

export interface IPropsDetail {
  id: number;
  name: string;
  type: string;
  description: string;
}
