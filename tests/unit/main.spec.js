/* eslint-disable no-useless-escape */
import { data } from "@/assets/data.js";
import { matchers } from "jest-json-schema";

expect.extend(matchers);

describe("Data", () => {
  it("should validate JSON", () => {
    const schema = {
      type: "array",
      additionalProperties: false,
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            minLength: 1,
            maxLength: 30,
            pattern: "^[a-zA-Z0-9]*$"
          },
          text: {
            type: "string",
            minLength: 1,
            maxLength: 18,
            pattern: "^[a-zA-Z0-9 @#!.?]*$"
          },
          cart: {
            type: "integer",
            enum: [0, 1, 2, 3]
          }
        },
        required: ["name", "text", "cart"]
      }
    };
    expect(data).toMatchSchema(schema);
  });

  it("should have only one instance of username", async () => {
    let seen = new Set();
    const hasDuplicates = data.some(el => {
      return seen.size === seen.add(el.name).size;
    });
    expect(hasDuplicates).toBeFalsy();
  });
});
