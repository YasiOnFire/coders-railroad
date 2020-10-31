/* eslint-disable no-useless-escape */
import data from "@/assets/data.json";
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
            pattern: "^[a-zA-Z0-9-]*$"
          },
          text: {
            type: "string",
            minLength: 1,
            maxLength: 18,
            pattern: "^[a-zA-Z0-9\u10A0-\u10FF @#!.?-]*$"
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

  it("should not contain HTML", async () => {
    const hasHTML = data.some(el => /<\/?[a-z][\s\S]*>/i.test(el.text));
    expect(hasHTML).toBeFalsy();
  });
});
