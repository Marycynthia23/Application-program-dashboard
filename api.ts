const fs = require("fs");
const YAML = require("js-yaml")

//load the YAML
const raw = fs.readFileSync("ApplicationForm.yaml");
const data = YAML.safeLoad(raw);

//show the YAML
console.log(data);