# Verification — 2026-11-09

## Automated checks

- `npm run lint`: passes with no warnings after naming the PostCSS configuration export.
- `npm run typecheck`: passes under strict TypeScript.
- `npm test`: all 9 tests pass, including 100 complete unique experiences and safe regex punctuation.
- `npm run build`: webpack production build passes and prerenders all 100 detail IDs.
- `npm audit --omit=dev`: zero production dependency advisories at verification time. npm reported 8 moderate development dependency advisories during install; no force-upgrade was applied.

## In-app browser checks on the production build

- All 100 cards rendered on `/experiences` (DOM count: 100).
- Opened `/experiences?search=sailing&category=adventure&destination=Croatia`: all three inputs pre-filled; Adventure selected; 1 matching experience.
- Changed category to Food: URL updated; 0 matches and “No results found”.
- Cleared filters and entered `KYOTO`: URL search updated and 2 title matches.
- Selected Bangkok with that search: 0 matches; removed the search: 5 Bangkok experiences.
- Opened Bangkok detail: title, destination, price, rating, description, highlights and duration displayed; `useEffect` title correct.
- Saved the detail experience, navigated to Favorites: 1 saved experience retained; removed it: 0 saved and helpful empty state.
- Saved an Explorer experience and navigated through Favorites to Profile: count 1 retained, demonstrating shared React state across client navigation.
- Home navigation and Explore experiences CTA worked; persistent navbar visible on every route.
- Unknown ID `/experiences/not-a-real-id` showed the custom not-found page.
- Desktop 1536×1024: 3 grid columns, no horizontal overflow. Default browser 1280×720 also inspected.
- Mobile 390×844: 1 column, no horizontal overflow; wrapped controls and readable Home hero inspected visually.

Screenshots: [desktop](screenshots/explorer-desktop.png), [mobile](screenshots/explorer-mobile.png). See [visual review](design/visual-review.md) for design comparison and intentional deviations. Favorites intentionally reset on a full page reload. Screenshots and checks establish local behavior, not instructor grading or deployment status.
