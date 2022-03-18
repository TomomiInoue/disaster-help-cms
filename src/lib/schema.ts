import { timestamp } from "@keystone-6/core/fields";

export const createdAtAndUpdatedAt = {
  createdAt: timestamp({ defaultValue: { kind: "now" } }),
  updatedAt: timestamp({
    defaultValue: { kind: "now" },
    db: { updatedAt: true },
  }),
};
