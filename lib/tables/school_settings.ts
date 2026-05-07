import { pb } from "../db";
import { Collections, SchoolSettingsRecord } from "../pocketbase-types";

const TENANT_FILTER = 'tenant="ie9a1spnndt3fl4"';

export const DataSchoolSettings = {
  all: async () => {
    return await pb.collection(Collections.SchoolSettings).getFullList({
      filter: TENANT_FILTER,
    });
  },

  first: async () => {
    const records = await pb.collection(Collections.SchoolSettings).getFullList({
      filter: TENANT_FILTER,
    });
    return records.length > 0 ? records[0] : null;
  },

  create: async (data: Partial<SchoolSettingsRecord>) => {
    return await pb.collection(Collections.SchoolSettings).create({ ...data, tenant: "ie9a1spnndt3fl4" });
  },

  update: async (id: string, data: Partial<SchoolSettingsRecord>) => {
    return await pb.collection(Collections.SchoolSettings).update(id, data);
  },

  upsert: async (data: Partial<SchoolSettingsRecord>) => {
    const existing = await pb.collection(Collections.SchoolSettings).getFullList({
      filter: TENANT_FILTER,
    });
    if (existing.length > 0) {
      return await pb.collection(Collections.SchoolSettings).update(existing[0].id, data);
    }
    return await pb.collection(Collections.SchoolSettings).create({ ...data, tenant: "ie9a1spnndt3fl4" });
  },
};
