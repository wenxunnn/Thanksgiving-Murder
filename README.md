# West Lafayette University Library & Lark Telephone Exchange

A static, free-to-host investigation companion, replacing the previous application. The old Nokia menus, simulated file-password screens and case-resolution terminal have been removed from the current site. All organizations, people, publications, journals, phone numbers and records are fictional game props. No real DOI or medical service is represented.

## Player URLs

- Library: https://wenxunnn.github.io/Thanksgiving-Murder/library/
- Telephone: https://wenxunnn.github.io/Thanksgiving-Murder/phone/
- Restricted archive: `library/archive/`
- Campus IT reference: `library/records/network.html`
- Printable laptop: `props/laptop/`

The site is designed for the fictional incident on Thursday, November 27, 2008. The game takes place Friday, November 27, 2026. The root is the game-master launch desk, with separate library and smartphone phone links plus copy-link controls. `/gm/` redirects to the root. Player library pages have no links to the phone or GM desk, and the phone is a separate interface. Sensitive GM information is deliberately absent. GitHub Pages cannot enforce private GM access to `/` while serving public subroutes; keep GM notes and solutions on a separate local device.

## Files

- `index.html`, `assets/gm.css`, `assets/gm.js`: game-master launch desk and player-link copy controls.
- `404.html`: retired-route notice.
- `assets/`: shared responsive navy/cream/burgundy 2008 university styling and session reset.
- `library/catalog.js`, `library/papers.json`: searchable faculty publications and local reading desk.
- `library/publications/`: full paper display, graph and table, both rendered from the same numerical arrays.
- `library/faculty/`, `library/records/`: profiles and administrative records.
- `library/archive/`: eight-digit puzzle access form and sealed three-symbol note.
- `phone/index.html`, `phone/phone.css`: standalone smartphone dialer, independent of the library.
- `phone/phone.js`, `phone/directory.json`, `phone/audio/`: simulated calls, number map, transcripts and five prerecorded MP3s.
- `scripts/validate.mjs`: dependency-free checks.

## Local run

Requires Python 3 to serve and Node 20+ to run checks. No build or package installation is required.

```sh
git clone https://github.com/wenxunnn/Thanksgiving-Murder.git
cd Thanksgiving-Murder
node scripts/validate.mjs
python3 -m http.server 8000 --directory . --bind 127.0.0.1
```

Open http://localhost:8000/library/ or http://localhost:8000/phone/. Use HTTP on localhost or HTTPS hosting, not `file://`, because the archive uses Web Crypto and fetch.

## GitHub Pages

In repository **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**. The site is buildless and includes `.nojekyll`. Existing branch-based Pages configuration can remain unchanged. Direct static directories replace the old SPA routing; all links and asset fetches support the `/Thanksgiving-Murder/` project prefix. Old NFC routes must be updated to the new library/phone URLs.

To publish later edits:

```sh
node scripts/validate.mjs
git add .
git commit -m "Update investigation services"
git push origin main
```

Check the repository Actions page for the Pages result. A pushed commit does not by itself prove a deployment succeeded.

## Editing the recordings and numbers

`phone/directory.json` is the only number-to-recording mapping. Each ten-digit key has `label`, a relative `audio` path, and a complete `transcript` narration script. Correct numbers are not listed on the public phone screen, but remain inspectable in static source. Entries are fictional; no live calls, Twilio, speech API, browser speech synthesis or personal data collection is used.

Actual MP3 samples are included, generated offline with CMU Flite and FFmpeg. Replace the synthetic samples with human performances if desired. Keep filenames unchanged, or change the path in the directory JSON. Keep the corresponding transcript synchronized. Example conversion:

```sh
ffmpeg -i your-recording.wav -ar 22050 -ac 1 -codec:a libmp3lame -b:a 64k phone/audio/dean-wallace.mp3
```

Audio only plays after Call or a playback button is pressed. Web Audio generates only keypad/ring/unassigned tones. Replay and End work locally. Unknown numbers show an exchange response. Missing audio opens the transcript; a browser playback restriction offers an explicit Play recording button. Test volume and playback on a real phone before play.

## Library edits

Edit `library/papers.json` for titles, authors, journal, year, abstract, methodology, results, conclusion, accession notes and arrays `x`, `y`, `sd`. Graphs, error bars and tables share these arrays. Keep array lengths equal, x ascending, and narrative claims consistent. All six journals are fictional. Faculty and administrative records are plain HTML.

The visiting-reader card shown on the catalog opens a local reading list. It is not a personal account or real credential. Searches support multiple words across title, author, year, accession and abstract.

## Archive, hints and reset

The archive uses an encrypted static puzzle asset to avoid accidental pre-unlock HTML spoilers. The eight-digit puzzle code is not a server-enforced login: **this is puzzle progression, not secure authentication**. The three-symbol note uses a Nokia phone number pad hint. Its decoded answer is not printed in player pages or source. No murder solution is stored in that asset or elsewhere in the deployed site. Keep the private production notes outside this repository.

The archive shows only the three-symbol picture and its Nokia phone number pad hint. There is no assistance-ticket form.

Select **Clear this session** on every player browser and confirm to remove this site's reading list, card and archive access. The archive is tab-scoped and can also be closed using Close restricted record. Reload other open tabs between groups. Phone state is not persisted. No server state exists.

For code changes, edit a private plaintext archive copy and reseal it with the privately supplied utility; only the resulting `sealed.json` belongs here. Update physical clues, the briefcase lock and hint text together. Do not put GM passwords, answers or the murder solution into public README files, browser scripts or a public repository.

## Checks and limits

`node scripts/validate.mjs` checks route files, relative asset links, numerical data, recording presence, absence of retired game identifiers and private solution content. Browser rendering and speaker output still require a real-device check. With a static public repository, determined players can inspect mappings and bypass puzzles; no client-only gate can prevent that.
