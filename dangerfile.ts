/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// @ts-nocheck

import { stripIndents } from "common-tags";
// import {
//   GitDSL,
//   JSONPatch,
//   JSONPatchOperation,
//   danger,
//   fail,
//   markdown,
//   message
// } from "danger";

interface Cart {
  name: string;
  text: string;
  cart: number;
}

function handleMultipleFileChanges(gitChanges: GitDSL) {
  fail(
    "This PR requires a manual review because you are changing more files than just `src/assets/data.json`."
  );
}

function hasOnlyCartChange(gitChanges: GitDSL) {
  return (
    gitChanges.modified_files.length === 1 &&
    gitChanges.modified_files[0] === "src/assets/data.json" &&
    gitChanges.created_files.length === 0 &&
    gitChanges.deleted_files.length === 0
  );
}

function hasOperation(diffs: JSONPatchOperation[], operation: string) {
  for (const diff of diffs) {
    if (diff.op === operation) {
      return true;
    }
  }

  return false;
}

function array2Set(data: Cart[]): Set<any> {
  const outputSet = new Set();
  data.forEach((cart: Cart) => outputSet.add(JSON.stringify(cart)));

  return outputSet;
}

function evaluateChanges(changes: JSONPatch) {
  const isDiffEmpty = changes.diff.length === 0;
  if (isDiffEmpty) {
    fail("This PR appears to be empty.");
  }

  const beforeCarts: Set<string> = array2Set(changes.before);
  const afterCarts: Set<string> = array2Set(changes.after);

  const addsMultipleCarts = afterCarts.size - beforeCarts.size > 1;
  if (addsMultipleCarts) {
    fail(`You can not add more than one cart.`);
  }
  const removedCarts = changes.before.filter(
    (cart: Cart) => !afterCarts.has(JSON.stringify(cart))
  );

  if (removedCarts.length > 0) {
    const removedUserNames = removedCarts.map((el: string) => {
      console.log("el: ", el);
      return JSON.parse(el).name;
    });

    fail(
      "It seems like you are accidentally deleting or editing some contributions of others. Please make sure you have pulled the latest changes from the master branch and resolved any merge conflicts. https://help.github.com/en/articles/syncing-a-fork"
    );
  }

  const gitHubUsername = danger.github?.pr?.user?.login;

  const cartUsername = changes.after.filter(
    (cart: Cart) => cart.name.toLowerCase() === gitHubUsername?.toLowerCase()
  );

  if (cartUsername.length > 1) {
    fail(
      stripIndents`You cannot create more than one cart per GitHub username.`
    );
  }

  const newCart = changes.after.find(
    (cart: Cart) => !beforeCarts.has(JSON.stringify(cart))
  );

  if (newCart.text.length > 22) {
    fail(stripIndents`Your message is too long`);
  }

  if (
    danger.github &&
    newCart.name.toLowerCase() !== gitHubUsername?.toLowerCase()
  ) {
    fail(stripIndents`You cannot create cart for other GitHub users.`);
  }

  const addOperations = changes.diff.filter(x => x.op === "add");
  if (addOperations.length > 1) {
    fail(
      "It seems like you are adding more than one cart. This will require a manual review to make sure this is not a mistake."
    );
  }

  if (
    hasOperation(changes.diff, "remove") ||
    hasOperation(changes.diff, "replace")
  ) {
    fail(
      "It seems like you are accidentally deleting some contributions of others. Please make sure you have pulled the latest changes from the master branch and resolved any merge conflicts. https://help.github.com/en/articles/syncing-a-fork"
    );
  }

  return true;
}

async function run() {
  // if (danger.github.thisPR) {
  try {
    if ((await danger.git.linesOfCode()) === 0) {
      fail("This PR is empty. Read README.md.");
    } else if (!hasOnlyCartChange(danger.git)) {
      await handleMultipleFileChanges(danger.git);
    } else {
      const jsonPatch = await danger.git.JSONPatchForFile(
        "src/assets/data.json"
      );
      if (!jsonPatch) {
        fail("This PR appears to be empty.");
      }
      const passed = await evaluateChanges(jsonPatch);
      if (passed) {
        message(
          "🚂 Thank you for submitting your cart. Should be online soon."
        );
      }
    }
  } catch (error) {
    fail(JSON.stringify(error));
  }
  // }
}

run().catch(console.error);

export { handleMultipleFileChanges, hasOnlyCartChange };

