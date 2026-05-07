import { pb } from "../db";
import { Collections, KeunggulanRecord } from "../pocketbase-types";

const TENANT_FILTER = 'tenant="ie9a1spnndt3fl4"';

export const DataKeunggulan = {
  create: async (data: Partial<KeunggulanRecord>) => {
    return await pb.collection(Collections.Keunggulan).create({ ...data, tenant: "ie9a1spnndt3fl4" });
  },

  all: async () => {
    return await pb.collection(Collections.Keunggulan).getFullList({
      filter: TENANT_FILTER,
    });
  },

  read: async (
    page: number = 1,
    perPage: number = 50,
    filter: string = "",
    sort: string = "-created",
    fields: string = "",
  ) => {
    const fullFilter = filter ? `${TENANT_FILTER} && (${filter})` : TENANT_FILTER;
    return await pb.collection(Collections.Keunggulan).getList(page, perPage, {
      filter: fullFilter,
      sort,
      fields,
    });
  },

  update: async (id: string, data: Partial<KeunggulanRecord>) => {
    return await pb.collection(Collections.Keunggulan).update(id, data);
  },

  delete: async (id: string) => {
    return await pb.collection(Collections.Keunggulan).delete(id);
  },

  count: async (filter: string = "") => {
    try {
      const fullFilter = filter ? `${TENANT_FILTER} && (${filter})` : TENANT_FILTER;
      const resp = await pb
        .collection(Collections.Keunggulan)
        .getList(1, 1, { filter: fullFilter });
      return resp.totalItems;
    } catch (error) {
      console.error("Error counting keunggulan:", error);
      return 0;
    }
  },
};
