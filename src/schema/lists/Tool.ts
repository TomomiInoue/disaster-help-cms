import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
import { createdAtAndUpdatedAt } from "../../lib/schema";

const Tool = list({
  ui: {
    listView: {
      initialColumns: ["label"],
    },
  },
  fields: {
    label: text({ validation: { isRequired: true } }),
    helpTypes: relationship({
      ref: "HelpType.tools",
      many: true,
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "hidden" },
      },
    }),

    ...createdAtAndUpdatedAt,
  },
});

export default Tool;
