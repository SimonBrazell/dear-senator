# DearSenator.js

A tool to help contact senators, members of parliament and other decision makers, driving change and action.

## Usage

1. Download the appropriate executable for your OS (Windows, Linux, or MacOS), or build it yourself.
2. Create the files `recipients.csv` and `template.txt`, populating as required, locating them in the same folder as the executable.
3. Run the executable.

**Note -** the `recipients.csv` must contain the `email` and `subject` columns for the executable to work, everything else is up to you, just make sure you reference it in `template.tx` using the same column title included in `recipents.csv`.

See the examples in `dist/`

## Build

1. `npm install`
2. `npm run build`
3. See `dist/` for outputs.
