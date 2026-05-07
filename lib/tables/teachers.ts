import { pb } from "../db";
import { Collections, TeachersRecord } from "../pocketbase-types";

const TENANT_FILTER = 'tenant="ie9a1spnndt3fl4"';

export const DataTeachers = {
  create: async (data: Partial<TeachersRecord>) => {
    return await pb.collection(Collections.Teachers).create({ ...data, tenant: "ie9a1spnndt3fl4" });
  },

  all: async () => {
    return await pb.collection(Collections.Teachers).getFullList({
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
    return await pb.collection(Collections.Teachers).getList(page, perPage, {
      filter: fullFilter,
      sort,
      fields,
    });
  },

  update: async (id: string, data: Partial<TeachersRecord>) => {
    return await pb.collection(Collections.Teachers).update(id, data);
  },

  delete: async (id: string) => {
    return await pb.collection(Collections.Teachers).delete(id);
  },

  count: async (filter: string = "") => {
    try {
      const fullFilter = filter ? `${TENANT_FILTER} && (${filter})` : TENANT_FILTER;
      const resp = await pb
        .collection(Collections.Teachers)
        .getList(1, 1, { filter: fullFilter });
      return resp.totalItems;
    } catch (error) {
      console.error("Error counting teachers:", error);
      return 0;
    }
  },
};
