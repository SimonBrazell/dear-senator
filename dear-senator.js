const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const open = require("open");
const ejs = require("ejs");

const template = fs.readFileSync(
  path.join(path.dirname(process.execPath), "template.txt"),
  "utf-8"
);
fs.createReadStream(path.join(path.dirname(process.execPath), "recipients.csv"))
  .pipe(csv())
  .on("data", (data) => {
    const mailto = `mailto:${data.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      ejs.render(template, data).replace("&#39;", "'")
    )}`;
    open(mailto);
  });
