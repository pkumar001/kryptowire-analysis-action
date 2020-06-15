const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");
const FormData = require("form-data");

try {
  // `path-to-file` input defined in action metadata file
  const pathToFile = core.getInput("path-to-file");
  console.log(`Path: ${pathToFile}`);
  if (fs.existsSync(pathToFile)) {
    console.log(`File Exists`);
  } else {
    console.log(`File Does Not Exist`);
  }

  // `platform` input defined in action metadata file
  const platform = core.getInput("platform");
  console.log(`Platform: ${platform}`);

  // Create the form for Portal submission
  const form = new FormData();
  form.append("key", "fis1nlaLwso5kxAjYLcPEnU9lD5g9I0UlZb8");
  form.append("platform", platform);
  form.append("app", fs.createReadStream(pathToFile));

  console.log(`Form: ${form}`);
} catch (error) {
  core.setFailed(error.message);
}
