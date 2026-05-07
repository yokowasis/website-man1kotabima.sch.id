import PocketBase from "pocketbase";
import { TypedPocketBase } from "./pocketbase-types";

export const pb = new PocketBase(
  "https://sekolah-backend.sg2.app.web.id",
) as TypedPocketBase;
