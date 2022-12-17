
export interface ICustomerRepository extends Repository {
  findOne: (matizeId: string) => Promise<object>;
  findByEmail: (email: string) => Promise<object>;
  findAll: () => Promise<object[]>;
  create: (user: object) => Promise<void>;
  update: (params: { matizeId: string; data: object }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
