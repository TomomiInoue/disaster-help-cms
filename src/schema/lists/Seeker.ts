import { list } from "@keystone-6/core";
import { float, integer, relationship, text } from "@keystone-6/core/fields";
import { createdAtAndUpdatedAt } from "../../lib/schema";

const Seeker = list({
  ui: {
    listView: {
      initialColumns: ["helpTypes", "users", "suburb"],
    },
  },

  fields: {
    title: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: "textarea" } }),
    helpTypes: text(),
    phone: text(),
    lat: float(),
    lng: float(),
    addressLine1: text(),
    addressLine2: text(),
    suburb: text(),
    state: text(),
    postcode: text(),
    images: relationship({ ref: "SeekerImage.image", many: true }),
    users: relationship({ ref: "User.email", many: true }),
    tools: relationship({
      ref: "Tool.helpTypes",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["label"],
        inlineConnect: true,
        inlineCreate: { fields: ["label"] },
      },
    }),
    ...createdAtAndUpdatedAt,
  },
});

export default Seeker;
