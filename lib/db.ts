import PocketBase from "pocketbase";
import { TypedPocketBase } from "./pocketbase-types";

export const pb = new PocketBase(
  "https://sekolah-backend.sg2.app.web.id",
) as TypedPocketBase;

// Disable auto-cancellation to prevent duplicate request aborts
// when making multiple parallel requests (e.g. dashboard stats)
pb.autoCancellation(false);
