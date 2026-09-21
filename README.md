# Jenny and Evan Wedding Website

Static wedding website for Jenny and Evan's May 30, 2027 wedding in Vancouver.

## Pages

- `index.html` - home page
- `about.html` - about us
- `events.html` - wedding weekend events and dress code modal
- `stay.html` - accommodation and shuttle information
- `rsvp.html` - RSVP placeholder

## Local Preview

Run a simple static server from the project root:

```sh
python3 -m http.server 4173 -d wedding-website
```

Then visit `http://127.0.0.1:4173/`.

## Notes

The site is plain HTML, CSS, and JavaScript. Shared behavior lives in `js/scripts.js`, translations live in `js/translate.js`, and the current design overrides live in `css/minimal-clean.css`.
