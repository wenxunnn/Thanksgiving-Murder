# The Last Thanksgiving

Four static investigation experiences for the fictional November 27, 2008 case at Lark Townhouse 17, West Lafayette, Indiana. The live game is November 27, 2026. All people, institutions, statements, correspondence, laboratory findings and recordings are fictional game props. The university is **West La La University (WLLU)**; no real-university affiliation is claimed.

## Live services

- [GM launch desk](https://wenxunnn.github.io/Thanksgiving-Murder/)
- [University library](https://wenxunnn.github.io/Thanksgiving-Murder/library/)
- [Hospital patient accounts](https://wenxunnn.github.io/Thanksgiving-Murder/hospital/)
- [CCTV still archive](https://wenxunnn.github.io/Thanksgiving-Murder/cctv/)
- [Simulated telephone](https://wenxunnn.github.io/Thanksgiving-Murder/phone/)
- [Print production index](https://wenxunnn.github.io/Thanksgiving-Murder/printables/)

The GM launcher opens each service separately. Ordinary institutional pages do not link back to the GM hub or force a linear investigation. This is a public GitHub Pages site, not staff authentication. Keep the confidential answer key outside this repository.

## Local development

No build, dependency installation, database or backend is required. Use Python 3 and Node 20+:

```sh
git clone https://github.com/wenxunnn/Thanksgiving-Murder.git
cd Thanksgiving-Murder
node scripts/validate.mjs
python3 -m http.server 8000 --directory . --bind 127.0.0.1
```

Open http://localhost:8000/. Use localhost or HTTPS, not file URLs; the archive uses fetch and Web Crypto. Mobile layouts use flexible columns, wrapping metadata, scrollable tables and large controls. Real phone, speaker and printer checks remain necessary.

## GitHub Pages

Settings → Pages → Deploy from a branch → **main / (root)**. The existing branch-based deployment and `.nojekyll` remain in use. All resources support the `/Thanksgiving-Murder/` project prefix.

```sh
node scripts/validate.mjs
git add .
git commit -m "Update case evidence"
git push origin main
```

Check Actions for a successful deployment. There is no compilation step. Refresh returning browser tabs after an update.

## Source map

- `assets/gm.*`, `index.html`: four-site GM launcher and copy controls.
- `library/papers.json`: six existing web-native papers; shared graph/table arrays.
- `library/reprints.json`, `library/reprints/`: ten complete three-page research PDFs.
- `library/documents.json`: searchable computing references and award announcement.
- `library/faculty/`: research biographies; former collaborators are clearly distinguished.
- `library/archive/`: separate eight-digit digital gate and the three-symbol keypad note.
- `phone/directory.json`, `phone/audio/`: five simulated recordings and matching transcripts.
- `hospital/data/accounts.json`: final and archived October statement data, aliases and activity.
- `hospital/billing/statement.js`: shared validated statement renderer.
- `cctv/archive.json`, `cctv/assets/`: four interval stills and metadata.
- `assets/lab-record.json`: one laboratory record shared by both printable versions.
- `printables/`: existing props plus correspondence, IDs, witness statements, toxicology and final report.
- `docs/`: non-answer production guidance, consistency audit and printing checklist.

## Library and publications

Search supports titles, authors, keywords and years. The visiting-reader card opens a browser-local saved reading list; it is not archive authentication. The current digital archive credential is issued on a separate physical card. Physical portrait, briefcase and locker mechanisms have distinct purposes and are not digital login answers.

The existing three-symbol picture and Nokia keypad hint remain intact. The assistance-ticket form remains removed. The library access printable lets the GM type the credential locally before printing; it is not stored in source, browser storage or a network request. Clear this session resets prefixed reading-list/archive data on each browser; close other tabs between groups.

The collection contains sixteen papers. The older background papers retain the previously requested Arthur Bellamy / Miriam Holt / Celia Rowan authorship; current story authors on later papers are preserved. Institutional names in PDF text were rebranded without changing authors, numbers or charts. Legacy lowercase accession IDs, storage-key prefixes and the `wlu-network` URL remain for bookmark compatibility; displayed branding uses WLLU. One embedded historical plot label was overlaid with WLLU without redrawing its data; the underlying original chart resource is preserved.

The 2004 Langford Award points to the fluorescence-based antibiotic detection paper. Research #5, #9 and #10 preserve the repeated fluorescence sequence. The 2006 enzyme paper's reported exclusions remain as supplied. Source numerical discrepancies are retained as fictional research evidence, not silently recalculated.

## Telephone recordings

No real calls or paid APIs are used. Playback uses MP3 files, not browser text-to-speech. Sample voices are offline synthesized and may be replaced with human performances. The number map is not listed on the public dialer, but a static source map is inspectable.

Dean Margaret A. Wallace confirms Victor Lin's genuine call, approximately 10:15–10:40 PM, and cannot establish his location before it. Hospital billing confirms the final November 20 balance and the November 28, 5:00 PM EST payment deadline. The library recording uses the new university name. Their audio and transcripts were corrected together; the other two recordings are retained.

To replace a clip, record its current transcript and retain the configured filename, or update its `audio` entry. Keep transcript and sound synchronized; version the audio URL after changing a file. Example:

```sh
ffmpeg -i recording.wav -ar 22050 -ac 1 -codec:a libmp3lame -b:a 64k phone/audio/dean-wallace.mp3
```

Unknown numbers, cancellation, replay, missing audio and blocked autoplay have local UI handling. The phone has no IP/VPN metadata. Actual speaker playback should be checked on the player device.

## Hospital records

Canonical account **SA-2008-OW-0417**; the earlier shortened reference remains an alias. No real personal information is requested or collected. October 20 balance is **$55,280.30**; November 20 final balance is **$84,560.30**. Both are available as printed statements; the portal defaults to the final record and links to October.

Amounts are integer cents. The final services/adjustments are $84,980.00 and -$419.70. The older receipt's $23,858.20 period charges and -$420.00 adjustments imply a carried-forward balance of $31,842.10; this reconstruction is documented in the audit. Statement arithmetic is validated by the shared renderer.

The attorney letter proposes $150,000.00, with $84,560.30 requested by November 28 at 5:00 PM EST and $65,439.70 remaining. It is explicitly a proposal, not a court order. All legal/medical content is fictional. Billing activity is fixed story data, not visitor tracking; the November 24 entry is anonymous and the November 27 enquiry occurs in the morning.

## CCTV and networking

CAM-04 covers the first-floor balcony. Exactly four stills are retained on November 27 at 10:00, 10:30, 11:00 and 11:30 PM EST. There is no video or intermediate capture. The final two stills show the knife. The images do not establish exact death time.

Illustrated production placeholders are retained because no staged photographic assets were supplied. Replace the four `src` files in `cctv/archive.json` with same-angle photos if available. Preserve capture times, pose, clothing, scene framing and the knife sequence. Interface/export captions supply timestamps. Export uses the same manifest as the viewer.

Canonical technical examples: library `10.42.12.8`, hospital `10.42.64.22`, CCTV `10.42.90.4`, laboratory workstation `10.42.18.27`, shared gateway `128.46.32.14`. The recorded external laboratory client remains `73.44.182.16` with Remote VPN. IP alone does not establish a person’s precise position or identity; source, destination and connection type must be read together. Update shared log data and reference pages together if editing these fields.

## Printing and production

Use the [printing checklist](docs/PRINTING_CHECKLIST.md). Print from deployed URLs so service addresses and the CCTV QR point to GitHub Pages. The CCTV card now includes a generated, local QR asset rather than a placeholder. All documents use US Letter print styles; disable browser-added headers/footers in the print dialog.

The final report has two handwriting pages and no embedded answer logic. The corresponding confidential key is kept in the separate local `private-gm` production directory, never in this public repository. Public documents do not name a poisoner, include a confession or reveal lock answers.

See [puzzle dependencies](docs/PUZZLE_FLOW.md) and [consistency audit](docs/CONSISTENCY_AUDIT.md). Browser rendering, actual QR scanning, physical portrait sightlines, printer pagination, glass/knife prop identification and the real room setup require human validation; source inspection or simulated tests are not represented as device tests.

## Sophie reader authentication and housing reference

The searchable record at `library/records/sophie-bennett/` shows the successful digital library login at 10:07 PM EST on November 27, 2008. Native expandable technical details hold the 10:07:14 PM timestamp, card-credential authentication, Remote VPN, client/server addresses and no physical entrance swipe record. This is not labelled as an entrance event. `library/records/townhouse-network/` is a separate fictional daily public-address assignment, indexed independently. The corresponding existing reader-activity printable is synchronized. No individual-location conclusion is printed; the shared-address record does not identify an operator. Existing lock and digital credentials are unchanged.

The unlisted `/autopsy/` route is a **fictional escape-room document**, styled as a 2008 forensic case file. All investigator/physician identities and report details on that page are fictional game material; it is not an actual county record. The opening seal is a presentation control, not authentication. Players receive the URL through the physical mailbox note; keep it out of navigation.

Reprints #5, #9 and #10 have depositor restrictions. Their searchable metadata remains public, but complete PDF bytes are encrypted with the existing Library Manager Access Code, using AES-GCM with a fresh nonce per document. The publication viewer unlocks them in the browser and offers a Lock paper control. Plaintext copies were removed from the current published tree. GitHub history and copies already downloaded remain accessible; this is a puzzle access mechanism, not a confidential document service.
