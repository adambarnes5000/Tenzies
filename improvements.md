# Improvements

## Resolved

All items from the previous pass are fixed: `utils.js` import casing, the stale-state win check (now a `useEffect` keyed on `data`), the win condition ignoring `pressed`, the unused/inconsistent `id` field, the `<button>` nested in `<a>`, the manual loops (now `.map()` in `DiceContainer`/`buttonPressed`/`roll`), and the component split (`Header`, `DiceContainer`, `RollControls`). Stale challenge comment block removed.

## Remaining nits

- **`NUM_DICE = 10.`** ([App.jsx:8](src/App.jsx#L8)): trailing decimal point — valid JS (`10.` === `10`) but almost certainly an accidental keystroke. Drop the dot.
- **`getInitData`'s `for` loop** ([App.jsx:12-25](src/App.jsx#L12-L25)): could be `Array.from({ length: NUM_DICE }, (_, id) => ({ id, value: getRoll(), pressed: false }))` for a one-liner, but it's already deduplicated into a single reused function so this is optional polish, not a real issue.
- **No prop validation**: none of the components (`Die`, `Header`, `DiceContainer`, `RollControls`) validate props. Not necessary for a project this size, but worth adding `PropTypes` or migrating to TypeScript if it grows.
