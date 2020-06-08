const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `path-to-file` input defined in action metadata file
  const pathToFile = core.getInput("path-to-file");
  console.log(`Path: ${pathToFile}`);

  // `platform` input defined in action metadata file
  const platform = core.getInput("platform");
  console.log(`Platform: ${platform}`);
} catch (error) {
  core.setFailed(error.message);
}
