import { list } from "@keystone-6/core";
import { password, relationship, text } from "@keystone-6/core/fields";
import { createdAtAndUpdatedAt } from "../../lib/schema";

const User = list({
  fields: {
    firstName: text({ validation: { isRequired: true } }),
    lastName: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    ...createdAtAndUpdatedAt,
  },
  ui: {
    labelField: "email",
    listView: {
      initialColumns: ["email", "firstName", "lastName"],
      initialSort: { field: "firstName", direction: "ASC" },
    },
  },
});

export default User;
