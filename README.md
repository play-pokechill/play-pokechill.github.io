# Pokechill — Hoenn Battle Frontier fork

This fork adds a **Gen 3 Pokémon Emerald-style Battle Frontier** (7
facilities: Tower / Palace / Arena / Dome / Factory / Pike / Pyramid)
to Pokechill, implemented as a **single-file overlay**. No vanilla
source file is modified.

The canonical architecture / data model / integration reference lives in
[`scripts/features/FRONTIER_EXT.md`](./scripts/features/FRONTIER_EXT.md).
That's the doc a reviewer should read first.

---

## What's in this PR

```
scripts/features/frontier-ext.js      ← overlay (~10k LOC, self-contained)
scripts/features/FRONTIER_EXT.md      ← architecture + extension guide
img/trainers/salon_maiden_anabel.png  ← brain sprites (7 total)
img/trainers/palace_maven_spenser.png
img/trainers/arena_tycoon_greta.png
img/trainers/dome_ace_tucker.png
img/trainers/factory_head_noland.png
img/trainers/pike_queen_lucy.png
img/trainers/pyramid_king_brandon.png
index.html                            ← +1 line: <script src="scripts/features/frontier-ext.js">
```

That's the entire surface. No dependency changes. No removed files.

---

## Highlights

- **7 facilities** following canonical Gen 3 Emerald rules. Each has
  its own brain, canonical silver/gold rosters, and a unique mechanic
  (3-turn judge, 14-room door picker, rental pool, grid dungeon, …).
- **Silver / Gold symbols** per facility + post-Gold rematches with
  rising difficulty multiplier.
- **Save-safe**: every mutation of shared game state has a stash +
  restore path, covered by all six exit paths (victory, defeat,
  abandon, rest, F5 forfeit, F5 round-cleared promote).
- **Save-editor resistant**: entry gates assume hostile input and
  clamp or refuse (streak injection, theme-index overflow, Pike
  room-bounds, duplicate active run, …).
- **Idempotent hooks**: every `install*Hook` function is a no-op if
  already installed; safe across HMR / dev reloads.
- **Zero writes to shipping player-state fields**: `pkmn[id].shiny`,
  `.evolve`, `.happiness`, any `item[id]` property, `saved.weather`,
  `saved.bag`, `saved.money`, `saved.pokedex`, vanilla
  `saved.symbols`. Audited grep-exhaustive; documented in
  FRONTIER_EXT.md.

---

## Design principles (non-negotiable)

1. **No vanilla source file is modified.** Integration happens via
   runtime `window.*` wraps installed from a single bootstrap pass.
   Each wrap is idempotent (`window.__frontierExtFooHooked` guard) and
   preserves the original return value of the wrapped function.

2. **Overlay-owned state is namespaced.** Every persistent field lives
   under `saved.frontierExt.*`. The overlay never writes to top-level
   `saved.*` without a paired restore path, and never writes to
   `pkmn[id]` / `item[id]` / `saved.previewTeams[…]` without stashing
   the previous value first.

3. **Every cross-cutting mutation has a restore path.** The mutation /
   cleanup table in FRONTIER_EXT.md enumerates every write, its stash
   location, and which of the six exit paths restores it.

4. **Save-editor resistance.** Gates like `handleRunAction("start")`,
   `pikeAdvanceAfterEvent` overflow, Pike/Pyramid room bounds, and the
   theme-index modulo assume hostile input and clamp or refuse rather
   than trust the save.

---

## Facility summary

| Facility | Brain | Rule |
|---|---|---|
| Battle Tower | Salon Maiden Anabel | 7-battle streak |
| Battle Palace | Palace Maven Spenser | Nature picks moves |
| Battle Arena | Arena Tycoon Greta | 3-turn judge, no switching |
| Battle Dome | Dome Ace Tucker | 4-trainer bracket, pick 2 |
| Battle Factory | Factory Head Noland | Rental pool + post-win swap |
| Battle Pike | Pike Queen Lucy | 14 rooms × 3-door picker |
| Battle Pyramid | Pyramid King Brandon | 7-floor grid dungeon + Combat Bag |

Internal ids use a `...Secret` suffix (e.g. `frontierTowerSecret`) so the
overlay's `saved.frontierExt.*` namespace cleanly coexists with any
future upstream frontier additions.

---

## Enemy generation — distribution simulation

4200 clones generated across 7 facilities × 4 tiers (pre-silver → silver → gold → flamme-1 post-gold rematch) × 150 rolls each. Zero logic violations (Quick Claw without fast move, luckyPunch without ironFist, etc.).

### Abilities (rarity split, Pokechill dict tags)

| Tier | Common | Uncommon | Rare |
|---|---|---|---|
| pre-silver | 88.7% | 8.5% | 2.9% |
| silver | 83.4% | 11.0% | 5.6% |
| **gold** | **48.8%** | **22.8%** | **28.4%** |
| **flamme-1** | **39.4%** | **26.3%** | **34.3%** |
| global avg | 61.5% | 18.4% | 20.1% |

Pre-silver/silver keep the "bad Emerald early teams" feel (common dominant), gold+ shifts to a balanced mix where rare signature abilities emerge.

### Hidden abilities

Forced at boss + flamme (post-gold rematch) tiers. Of species with a scored hidden ability:

| Tier | Hidden assigned |
|---|---|
| pre-silver / silver | 0% (tier gate) |
| gold | 48.2% |
| flamme-1 | **64.7%** |

### Moves (rarity split)

| Tier | Common | Uncommon | Rare |
|---|---|---|---|
| pre-silver | 29.4% | 37.5% | 28.5% |
| silver | 8.2% | 12.8% | 69.4% |
| gold | 10.3% | 8.5% | 70.1% |
| flamme-1 | 11.0% | 8.8% | 69.1% |

Pre-silver picks favor low-BP / priority moves (quickAttack / iceShard / feintAttack / pursuit / doubleSlap) for the "beginner-trainer" feel. Silver+ shifts to high-power signatures. Setup move coverage: 12% pre-silver, 63% silver, 86% gold/flamme — no more dragonDance-on-everything spam.

### Split / speed profile (global)

- Physical 44.9% / Special 34.9% / Status 20.2%
- Fast (priority) 14.5% / Normal 76.5% / Slow (charge) 9.4%

### Items (held, 68 distinct picks at gold)

Top 10: `leftovers`, `quickClaw`, `lifeOrb`, resist berries (occa/passho/choople/yache/colbur), `weaknessPolicy`, `heavyDutyBoots`, `clearAmulet`, `choiceSpecs`, `assaultVest`. Every pool tier item has at least one pick path; no item is dead weight.

### Natures (of the 67% clones with a nature rolled)

jolly 35% / adamant 25% / modest 23% / quiet 8% / bold 6% / relaxed 2%.
All six Pokechill natures appear.

### Shiny

0.9% observed (target 1/140 ≈ 0.71%, post-gold rematch bumps to 1/100).

### IV stars (pre-inflation roll)

| Tier | Distribution |
|---|---|
| pre-silver | 1★ 57% / 2★ 43% |
| silver | 2★ 14% / 3★ 14% / 4★ 71% |
| gold | 6★ 100% |
| flamme-1 | 6★ 100% |

---

## Try it locally

```bash
python -m http.server 8765
# then open http://127.0.0.1:8765/ in a browser
# start a new game OR load a save, go to Battle Frontier, look for
# the new Hoenn sub-section.
```

---

## License / attribution

Overlay implementation by @Undi95 (2026). Canonical Gen 3 Emerald rules
sourced from Bulbapedia. Pokémon and Pokechill trademarks belong to
their respective owners.

The mechanic layer (rulesets, difficulty curve, canonical brain teams)
is the result of roughly 100 iteration commits against a dev fork;
history available on the `playground` branch of the build environment.
