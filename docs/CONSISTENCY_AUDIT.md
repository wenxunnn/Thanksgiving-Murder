# Consistency audit — final storyline update

This is a production audit without the confidential accusation answer. The complete solution and answered final report are kept outside the public repository.

| Finding | Correction / decision |
|---|---|
| Old university mastheads, titles, reference labels and audio branding | Replaced with West La La University / WLLU; university contacts use westlala.edu. Original fictional crest retained. |
| Old institutional references inside PDF text | Safely edited text and metadata; authors, numeric content and chart images preserved. Legacy accession URLs/storage keys remain compatible, not active branding. One old raster plot abbreviation was covered and relabelled WLLU at the PDF page layer; no plotted values or original chart image resources were changed. |
| Directory did not match analytical chemistry history | Updated victim, collaborator and student biographies; Victor’s Meridian association, Sophie’s ID/email, and Evelyn’s former-collaborator role are explicit. |
| Supporting people could be confused with dinner suspects | Final report names exactly four people under investigation. Supporting witnesses and former collaborators are not presented as additional suspects. |
| Missing motive/opportunity sources | Added correspondence, Daniel’s discussion notes, private-conversation note, research-integrity request, historical award announcement and witness statements. Student and settlement notes now explicitly support the stated recommendation and medical-funding motives. None is a confession or killer label. |
| Dean recording too limited for final statement | Audio and transcript now identify Margaret A. Wallace, a genuine call with Victor, approximate start/end, and her inability to establish his pre-call location. |
| Earlier hospital recording required payment before the date | Corrected audio/transcript to the final shared deadline: November 28, 2008, 5:00 PM EST. |
| Older invoice absent from website | Added October snapshot and print copy. The existing physical receipt supplies period charges/adjustments; $31,842.10 carry-forward is arithmetically derived, not a new treatment charge. |
| Financial/legal implication incomplete | Added a proposed $150,000 settlement, initial $84,560.30 and remaining $65,439.70. Clearly stated not to be a court order. |
| 11:30 still followed an earlier instruction to remove the knife | Restored the handle to match the final canonical sequence, including descriptions, file path and exported sheet. |
| CCTV server example had a leading-zero octet | Normalized to 10.42.90.4 in metadata, pages and exports. Other network details unchanged. |
| Physical and digital puzzle roles could be mixed | Digital archive credential and three-symbol clue retained as separate mechanisms. Physical key-box, briefcase and optional locker roles are distinct; no answers printed in ordinary evidence pages. |
| A telephone contact number alone did not supply the calling-site address | Added the terminal URL to the Dean card and made its living-room placement explicit, avoiding a possible briefcase/keypad dependency loop. |
| QR area was a placeholder | Replaced with a local QR encoding the deployed CCTV route; no external QR service required. |
| Final investigator submission was absent | Added a two-page printable report with blank evidence questions. No frontend grading or answer screen. |

## Research checks

The three older background papers keep the GM’s prior non-story author changes. Later story authors remain. The 2004 award is associated with fluorescence-based antibiotic detection. The eight-value sequence in supplied reprints #5, #9 and #10 is preserved, as are the enzyme paper’s exclusions. No numerical data were rewritten to remove suspicious discrepancies.

## Verification scope

Run `node scripts/validate.mjs` for the current repository acceptance checks. Additional private integration tests evaluate actual modules with simulated DOM/media controls. Such tests do not witness browser layout, actual speaker output, print pagination or QR scanning. PDF text extraction and rendered-page review are used for document edits; chart-image and numerical-content comparisons check preservation.

## Remaining production limitations

- CCTV images remain matching illustrations; four final same-angle staged photographs would improve the production. There are no supplied production photos to reuse.
- The printed portrait directions and physical key box cannot be verified from repository source.
- Verify knife/glass props and physical corroboration for the wound account. The website does not invent an extra fingerprint match or a confession to fill a missing physical clue.
- No real phone/browser/printer or QR scanner was operated in this environment. Test on the actual player devices and printer.
- The optional locker has no necessary online dependency or established contents in the repository. Confirm its intended physical use before retaining it.
- The site is public static hosting. Source inspection can bypass game pacing; the GM hub and print-production index are not secure authentication.
- Old Git history is not rewritten. Only the current deployed source is the canonical playable version.

No circular digital dependency is required by the implemented flow. A real-room rehearsal is still needed to confirm that the GM places every prerequisite outside the item it unlocks.
