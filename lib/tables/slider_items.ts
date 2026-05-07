import { pb } from "../db";
import { Collections, SliderItemsRecord } from "../pocketbase-types";

const TENANT_FILTER = 'tenant="ie9a1spnndt3fl4"';

export const DataSliderItems = {
  create: async (data: Partial<SliderItemsRecord>) => {
    return await pb.collection(Collections.SliderItems).create({ ...data, tenant: "ie9a1spnndt3fl4" });
  },

  all: async () => {
    return await pb.collection(Collections.SliderItems).getFullList({
      filter: TENANT_FILTER,
      sort: "+created",
    });
  },

  read: async (
    page: number = 1,
    perPage: number = 50,
    filter: string = "",
    sort: string = "+created",
    fields: string = "",
  ) => {
    const fullFilter = filter ? `${TENANT_FILTER} && (${filter})` : TENANT_FILTER;
    return await pb.collection(Collections.SliderItems).getList(page, perPage, {
      filter: fullFilter,
      sort,
      fields,
    });
  },

  update: async (id: string, data: Partial<SliderItemsRecord>) => {
    return await pb.collection(Collections.SliderItems).update(id, data);
  },

  delete: async (id: string) => {
    return await pb.collection(Collections.SliderItems).delete(id);
  },

  count: async (filter: string = "") => {
    try {
      const fullFilter = filter ? `${TENANT_FILTER} && (${filter})` : TENANT_FILTER;
      const resp = await pb
        .collection(Collections.SliderItems)
        .getList(1, 1, { filter: fullFilter });
      return resp.totalItems;
    } catch (error) {
      console.error("Error counting slider items:", error);
      return 0;
    }
  },
};
