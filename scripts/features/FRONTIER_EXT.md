# ZONE DE COMBAT D'HOENN (ZdC)

Single-file overlay adding the 7 Hoenn Battle Frontier facilities to Pokechill.

| FR                   | EN               | Brain    | Gimmick                    |
|----------------------|------------------|----------|----------------------------|
| Tour de Combat       | Battle Tower     | Cathy    | 7-battle streak            |
| Palace de Combat     | Battle Palace    | Esteban  | Nature auto-picks moves    |
| Dojo de Combat       | Battle Arena     | Carole   | 3-turn judge               |
| Dôme de Combat       | Battle Dome      | Takim    | Bracket tournament         |
| Usine de Combat      | Battle Factory   | Sam      | Rental + swap              |
| Reptile de Combat    | Battle Pike      | Charline | 14 rooms, 3 doors each     |
| Pyramide de Combat   | Battle Pyramid   | Bayar    | Grid dungeon + Combat Bag  |

Silver Symbol at facility-specific round, Gold at another round, then endless post-Gold rematches every 7 rounds (difficulty ramp).

## Files

- `scripts/features/frontier-ext.js` — all logic in one IIFE
- `index.html` — single `<script src="scripts/features/frontier-ext.js" defer></script>` injection
- State under `saved.frontierExt.*`

## Generation pipeline (`cloneEnemyForCombat`)

Order: Pokemon → Moveset → Ability normal → Ability hidden (tier-gated) → Item (sees moveset + abilities) → Nature (sees everything) → Shiny (1/140).

Every enemy effect is simulated via BST inflation since the engine reads abilities/items/nature player-side only (`testAbility('active', …)` in explore.js).

## Commit history = documentation

For WHY a given branch / gate / multiplier exists, check git log. The in-file comments were removed to keep the file scannable.
