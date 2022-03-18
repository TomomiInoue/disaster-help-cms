import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
import { createdAtAndUpdatedAt } from "../../lib/schema";

const Customer = list({
  ui: {
    labelField: "email",
  },
  fields: {
    email: text({ validation: { isRequired: true } }),
    firstName: text({ validation: { isRequired: true } }),
    lastName: text({ validation: { isRequired: true } }),
    phone: text(),
    // bookings: relationship({ ref: "Booking.customer", many: true }),
    ...createdAtAndUpdatedAt,
  },
});

export default Customer;
