export interface ServiceInterface {
  create: (object) => Promise<object>;
  update: (object) => Promise<object>;
  delete?: () => Promise<object>;
  findAll: () => Promise<any[]>;
  findOne: () => Promise<object>;
}
