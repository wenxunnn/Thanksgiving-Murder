# The Last Thanksgiving — Investigation Websites

A static, free-to-host investigation companion, replacing the previous application. The old Nokia menus, simulated file-password screens and case-resolution terminal have been removed from the current site. All organizations, people, publications, journals, phone numbers and records are fictional game props. No real DOI or medical service is represented.

## Player URLs

- Library: https://wenxunnn.github.io/Thanksgiving-Murder/library/
- Telephone: https://wenxunnn.github.io/Thanksgiving-Murder/phone/
- Restricted archive: `library/archive/`
- Campus IT reference: `library/records/network.html`
- Printable laptop: `props/laptop/`

The site is designed for the fictional incident on Thursday, November 27, 2008. The game takes place Friday, November 27, 2026. The root is the game-master launch desk, with four separate service links plus copy-link controls. `/gm/` redirects to the root. Player library pages have no links to the phone or GM desk, and the phone is a separate interface. Sensitive GM information is deliberately absent. GitHub Pages cannot enforce private GM access to `/` while serving public subroutes; keep GM notes and solutions on a separate local device.

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

## Hospital billing & family services

A third service is available at `hospital/`, linked from the GM launch desk. It uses a white/pale-blue late-2000s hospital layout, with pediatric services, oncology information, financial-assistance resources, a statement lookup, and portal security help. The hospital, patient record, account activity and telephone contact are entirely fictional game props. No real patient records, credentials, access logs, analytics, or tracking are collected. The security article describes the in-world 2008 system; the current static site does not log portal visits.

- `hospital/billing/`: account lookup, statement and account history.
- `hospital/help/security/`: ordinary portal security/IP-address reference.
- `hospital/data/accounts.json`: the single source for fictional statement details, integer-cent amounts, contact number and activity events.
- `hospital/billing/statement.js`: shared statement renderer and arithmetic validation.
- `hospital/print/statement/`: printer-friendly copy using the same record and renderer.

Use the account ID from the physical family correspondence. Lookup accepts surrounding whitespace and case differences. It is a fictional static lookup, not secure patient authentication. Incorrect IDs give a neutral error. The site clears displayed results when another lookup begins or the account is closed, and does not persist billing access.

To change records, edit `hospital/data/accounts.json`. Monetary values are integer cents: services plus adjustments must equal the balance. The renderer rejects inconsistent arithmetic. If you change the balance, synchronize the telephone transcript/recording and physical settlement/billing props. Keep every activity timestamp in local EST and consistent with the intended case chronology; the existing November 27 enquiry is in the morning. Do not add a person identity to the anonymous November 24 access entry.

The hospital number is the same fictional number configured in `phone/directory.json`. It appears as ordinary text, with no real telephone or external API link. The existing billing MP3 is preserved.

## Computing reference and printable evidence

The library's `computing-services/` page is a normal WLU support article dated August 14, 2008. It is indexed by `library/documents.json` and appears in catalog searches for Remote access, VPN, Laboratory computer, Campus network, IP address, or Chemistry lab. The hospital's independent security article explains private/public addressing and authentication limits without including the laptop's source address or making a character-specific accusation.

Edit campus network examples in `library/computing-services/index.html` and the related sheet at `library/records/network.html`; edit general private/public address guidance in `hospital/help/security/index.html`. The laptop prop is `props/laptop/index.html`. If changing evidence fields, keep your physical laptop copy and any GM notes synchronized. IP addresses are not reliable proof of a person's exact physical location or identity.

For letter-size prints, open the following through the local or hosted site and use each page's Print button:

- Hospital statement: `hospital/print/statement/`.
- Laboratory login: `props/laptop/`.
- Optional WLU reference: `library/computing-services/`.

The account statement print is generated from the same integer-cent record as the portal; activity history and lookup controls are omitted from the printout. Print CSS uses US Letter with 0.65-inch margins. Browser header/footer settings and printer scaling should be checked on the actual printer.

## Added analytical chemistry reprints

The library now has sixteen research papers: the six existing web-native papers plus ten complete three-page PDF reprints supplied for the game, covering 1999–2008. The PDFs retain their original figures, tables, experimental sections, conclusions and references. The source collection declares these papers, people, journals and institutions fictional; they are not real scientific publications or medical guidance. Numerical claims in the supplied reprints are preserved as supplied, including any in-world discrepancies, rather than silently rewritten.

`library/reprints.json` stores searchable metadata; `library/reprints/` contains the full PDFs. Each has a catalog record, direct full-paper/download links and a desktop PDF viewer. On phones use the direct PDF link. Reprints can be saved with the visiting-reader card just like the existing papers.

The 1999, 2001 and 2003 background papers were assigned authors outside the story cast: Arthur Bellamy, Miriam Holt and, for the 2003 paper, Celia Rowan. Byline text, running headers, initials and relevant self-references were updated consistently inside those PDFs. Authorship of 2004–2008 papers is preserved. The collection's original cover is not published because its attribution no longer describes the renamed background papers.

When replacing a PDF, synchronize its `title`, `authors`, `year`, `abstract`, `keywords`, `pdf`, and `pages` metadata in `reprints.json`. Ensure author changes are made inside the PDF as well as in the catalog. Do not publish an unedited source compilation alongside renamed reprints.

## Compatibility with the current game

This expansion keeps the current eight-digit archive gate, three-symbol keypad picture and standalone smartphone calling UI. Older planning notes referring to a four-digit gate, portrait or CUP conversion do not override the later configured game. Private game-master explanations are stored outside this public repository, under the separate local production notes folder; do not upload them.

## Lark Security CCTV archive

`cctv/` is a separate 2008-style property-security interface for CAM-04, the **first-floor balcony** at Lark Townhouse 17. It has date/camera selection, four retained stills, previous/next controls, direct capture selection, 100–300% zoom with panning, downloadable images, and archive metadata. There is no playable video, automatic slideshow, inferred death-time annotation, intermediate capture, or additional password.

`cctv/archive.json` is the source for the four captures at 10:00 PM, 10:30 PM, 11:00 PM and 11:30 PM EST on November 27, 2008, at exactly 30-minute intervals. The printable export uses this same manifest. Timestamps belong to the interface/export captions, not to the source image artwork.

Four consistent illustrated placeholder stills are included. They are playable reference assets, **not supplied photographic evidence**. Replace these with final staged photos from the same camera angle if available:

- `cctv/assets/cam04-2200.svg`: person standing, no knife.
- `cctv/assets/cam04-2230.svg`: person slumped in chair, no knife.
- `cctv/assets/cam04-2300.svg`: same chair position, knife handle visible.
- `cctv/assets/cam04-2330-no-knife.svg`: same chair position, no knife visible.

You can use JPG/PNG files instead by changing each `src` in `archive.json`; keep the four capture times and interval unchanged, update accessible descriptions to match, and do not add timestamps inside the replacement photos. Update the export automatically by editing only that manifest. The four current illustrations use one identical background and camera framing; the final two show the same pose.

## Maintenance-style network details

The Library footer lists LIB-ARCHIVE-02 on `10.42.12.8` and gateway `128.46.32.14`. The October reference at `library/network-reference/` adds the example chemistry workstation `10.42.18.27`, source/destination definitions and remote VPN behavior. The August support guide is retained. Both are searchable through `documents.json`.

Hospital footers have a small System information disclosure: Records Server `10.42.64.22`, shared WLU institutional medical gateway `128.46.32.14`. This is fictional institutional affiliation metadata, not a measurement of the visitor's network. CCTV lists Camera Server `10.42.90.04`, gateway `128.46.32.14` and CAM-04, with a housing-network technical note. **The Phone site has no IP, VPN or diagnostic content.** None of these pages identifies an operator or claims that an address establishes an exact physical location.

The hospital's printed account format is now `SA-2008-OW-0417`. The earlier `SA-2008-OW-417` reference remains an accepted alias in the static lookup. Edit `aliases` alongside the canonical record if changing account references. Billing status is OUTSTANDING.

## Eight printable physical props

Open `printables/` from the GM launch desk for all eight US Letter pages:

1. `printables/balcony-cctv/` — CAM-04 balcony archive card, with QR placeholder and actual archive URL.
2. `printables/hospital-flyer/` — family services flyer and fictional billing telephone number.
3. `printables/hospital-account/` — account lookup instructions and canonical reference.
4. `printables/wlu-network/` — ordinary IT quick reference.
5. `printables/lab-login/` — laboratory access log; uses the same record as the cardboard laptop page.
6. `printables/library-access/` — library access card; enter the issued digital credential locally before printing, or write it by hand. The credential is not stored in source, a URL, local storage or a network request.
7. `printables/cctv-export/` — all four stills with their exact metadata.
8. `printables/briefcase-label/` — confidential-records identification label, with no combination.

The hospital statement is an additional printable page at `hospital/print/statement/`. The laboratory event is maintained in **`assets/lab-record.json`**, shared by `props/laptop/` and `printables/lab-login/`; edit that JSON rather than separately editing two HTML copies. Its connection type is Remote VPN. The previously supplied second-level time (10:46:12 PM EST) is preserved within the 10:46 PM event.

Print props from the **deployed URL** so their printed service addresses point to GitHub Pages, not localhost. The balcony card deliberately has a QR placeholder: add a QR encoding the displayed `/cctv/` URL before printing if you want scanning. Disable browser-added page headers/footers in the print dialog. CSS hides site controls and navigation, but cannot change browser print-dialog settings.

No physical lock combinations or complete solution are printed on the player websites. The physical staging guide is kept only in the separate private production notes. The current archive gate and three-symbol picture are retained; the printed library credential is entered locally by the GM. No additional physical lock or CCTV password was introduced.

## Full service URLs

- Library: https://wenxunnn.github.io/Thanksgiving-Murder/library/
- Hospital: https://wenxunnn.github.io/Thanksgiving-Murder/hospital/
- CCTV: https://wenxunnn.github.io/Thanksgiving-Murder/cctv/
- Phone: https://wenxunnn.github.io/Thanksgiving-Murder/phone/
- GM launcher: https://wenxunnn.github.io/Thanksgiving-Murder/
- Printable props: https://wenxunnn.github.io/Thanksgiving-Murder/printables/

The source needs no compilation. Run `node scripts/validate.mjs`, commit/push `main`, and let the existing branch-based GitHub Pages deployment publish the repository root. Review Actions for a successful deployment. No secrets, private GM documents, real records or runtime data files should be committed.

## Phone-sized layouts

The calling page contains only the smartphone dialer; the former introductory text panel is removed. The institutional sites keep their mobile single-column layouts, minimum 44px navigation controls, wrapping technical text and scrollable research/billing tables. CCTV controls wrap onto multiple rows, and printable prop cards fit narrow screens before printing. Reprints have direct PDF links on phones. These rules are checked in source; real-device visual and printer checks are still recommended.

## Hospital reminder recording

The hospital number now plays a message addressed to Mrs. Whitmore about payment before November 28, 2008 for Owen's upcoming procedure. It refers to the current November 20 balance, which remains consistent with the portal and settlement evidence. The physical October 20 receipt is an earlier billing period and is not the current statement. The MP3 and accessibility transcript are synchronized in `phone/directory.json`; the audio URL is versioned so returning browsers receive the replacement.
