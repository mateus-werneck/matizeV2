declare type AbstractService = {
  findAll: () => Promise<any[]>;
  findOne: (matizeId: string) => Promise<object>;
  create: (createObj: object) => Promise<object | null>;
  update: (params: object) => Promise<object>;
  remove: (matizeId: string) => Promise<object>;
};
