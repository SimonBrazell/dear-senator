# DearSenator.js

A tool to help contact senators, members of parliament and other decision makers, driving change and action.

## Usage

1. [Download](https://github.com/SimonBrazell/dear-senator/releases) the appropriate executable for your OS (Windows, Linux, or MacOS), or build it yourself.
2. Create the files [`recipients.csv`](dist/recipients.csv) and [`template.txt`](dist/template.txt), populating as required, locating them in the same folder as the executable.
3. Run the executable.
4. A new email should be created for each of the recipients.

### Note

The tool assumes you have an email client setup to respond to [`mailto`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#e-mail_links) links.

The [`recipients.csv`](dist/recipients.csv) must contain the `email` and `subject` columns for the executable to work, everything else is up to you, just make sure you reference your custom columns in [`template.txt`](dist/template.txt) using the same column title included in [`recipients.csv`](dist/recipients.csv), e.g. `col_name` in your recipients file will be `<%= col_name %>` in your template file. 

The `template.txt` file uses [EJS](https://ejs.co/), insert your variable from the `recipients.csv` in between `<%= ... %>` tags to have them properly displayed in the output email.

See the examples in [`dist/`](dist/)

## Build

1. `npm install`
2. `npm run build`
3. See `dist/` for outputs.
