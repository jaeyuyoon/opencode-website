# Harbor Stargazers Club Website

A small website for a fictional student stargazing club. It has an intro, meeting
times, a packing list, and a joining section. A button in the header switches
between a light and a dark theme.

## Prerequisites

- Python 3 (check with `python3 --version`)
- Any modern web browser

No packages need to be installed.

## Run locally

From the repository folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Stop the server

Press `Ctrl+C` in the terminal where the server is running.

## Try the interaction

Click the theme button in the header, or press `Tab` to focus it and then
`Enter` or `Space`.

## Files

- `index.html`: page structure and content
- `style.css`: layout, colors, and responsive rules
- `script.js`: theme switch
- `AGENTS.md`: constraints given to the coding agent
- `REFLECTION.md`: notes on how the agent was used
- `evidence/`: screenshot of the site served on localhost
