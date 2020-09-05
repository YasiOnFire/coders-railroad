const { message, fail, markdown, danger } = require("danger");
const { stripIndent } = require("common-tags");

function handleMultipleFileChanges(gitChanges) {
  fail(
    "This PR requires a manual review because you are changing more files than just `src/assets/data.json`."
  );
  markdown(stripIndent`
    The files you modified are:
    ${gitChanges.modified_files.map(name => `- ${name}`).join("\n")}
    ${gitChanges.created_files.map(name => `- ${name}`).join("\n")}
    ${gitChanges.deleted_files.map(name => `- ${name}`).join("\n")}
  `);
}

function hasOnlyCartChange(gitChanges) {
  return (
    gitChanges.modified_files.length === 1 &&
    gitChanges.modified_files[0] === "src/assets/data.json" &&
    gitChanges.created_files.length === 0 &&
    gitChanges.deleted_files.length === 0
  );
}
function evaluateChanges(changes) {
  console.log("changes: ", changes);
  return true;
}

async function run() {
  if (danger.github.thisPR) {
    if ((await danger.git.linesOfCode()) === 0) {
      fail("This PR is empty. Read README.md.");
    } else if (!hasOnlyCartChange(danger.git)) {
      await handleMultipleFileChanges(danger.git);
    } else {
      const jsonPatch = await danger.git.JSONPatchForFile(
        "src/assets/data.json"
      );
      const passed = await evaluateChanges(jsonPatch);
      if (passed) {
        message(
          "🚂 Thank you for submitting your cart. Should be online soon."
        );
      }
    }
  }
}

run().catch(console.error);

module.exports = { handleMultipleFileChanges, hasOnlyCartChange };
