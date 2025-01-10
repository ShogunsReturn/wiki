---
sidebar_position: 3
---
# General

## Overview

Ronin Generals are battlefield leaders and masters of strategy and tactics. They are a symbol of inspiration for their troops, boosting their morale during battle. However, the loss of a general can lead to a collapse in the army’s resolve.

---

## Key Features

### Cost
- Rice: 20
- Wood: 0
- Iron: 40
- Gold: 200
- Population: 1

### Maintenance
- Meat: 1.6 /h
- Gold: 2.0 /h

### Training duration
- 10 Hours

### Honor requirement
- 10

### Unit type
- [Melee Infantry](../../index.md#melee-infantry)

### Trait
- Special Effect

:::tip Special Effect
**Damage Bonus**
Each general increases the damage of all units in the army by:
+0.5 + 0.05 × (level - 1).

**Maximum Bonus**:
Bonus caps at +5 + (level - 1).

**Affected Units**
- Each general affects 100 units, including themselves.
- The maximum number of effective generals is limited to the total number of units divided by 100.
- Generals also affect units in allied armies that are associated with your army, provided those armies include at least one general.

**Limitations**
<!-- - Generals do not affect summoned animals. -->
- If the number of units exceeds the coverage of generals (e.g., more than 100 units per general), the bonus is proportionally reduced.
- Maintaining a ratio of 1 general per 100 units is crucial for maximizing the bonus.
- **Example**: If there are twice as many units as the generals can cover, the bonus is halved.

**Level Ponderation**
- If generals, leaders, or strategists of varying levels are present in the same army or side, their effective level is averaged and rounded down.
- **Example**: 10 level 1 generals and 10 level 3 generals are treated as 20 level 2 generals.

**Maximum Effect**
- A fully optimized group of 10 generals can provide a +5 damage bonus for an army of 1000 units.
:::

:::info Example
- **990 Units and 10 Generals**: +5 (ratio of 1 general per 100 units is maintained).
- **1980 Units and 20 Generals**: +5 (bonus is capped at +5, even with sufficient generals).
- **1990 Units and 10 Generals**: Bonus is +2.5.
  - **Explanation**: To achieve the full bonus of +5, 20 generals are required. With only 10 generals, the bonus is halved.
- **99 Units and 1 General**: Bonus is +0.5.
- **98 Units and 2 Generals**: Bonus remains +0.5, as only 1 general is needed to cover 100 units.
- **495 Units and 5 Generals**: Bonus is +2.5, as the ratio of 1 general per 100 units is maintained, but the general count limits the bonus.
- **490 Units and 10 Generals**: Bonus remains +2.5, as only 5 generals are effectively needed to cover the units. Additional generals beyond the ratio do not increase the bonus.
:::

### Stats by level

| Level | Attack | Defense | Armor | Health | Counter Attack |         Requirement         |
| :---: | :----: | :-----: | :---: | :----: | :------------: | :-------------------------: |
|   1   |   11   |    7    |  12   |   84   |       0        |  Academy(3), Blacksmith(4)  |
|   2   |   12   |    8    |  16   |   90   |       0        |  Academy(5), Blacksmith(8)  |
|   3   |   14   |    9    |  20   |   96   |       0        | Academy(8), Blacksmith(12)  |
|   4   |   15   |   10    |  24   |  102   |       0        | Academy(12), Blacksmith(15) |
|   5   |   17   |   11    |  28   |  108   |       0        | Academy(14), Blacksmith(17) |
|   6   |   18   |   12    |  32   |  114   |       0        | Academy(17), Blacksmith(20) |
|   7   |   20   |   13    |  36   |  120   |       0        | Academy(20), Blacksmith(22) |
|   8   |   21   |   15    |  40   |  126   |       0        | Academy(23), Blacksmith(25) |
|   9   |   23   |   16    |  44   |  132   |       0        | Academy(25), Blacksmith(27) |
|  10   |   24   |   17    |  48   |  138   |       0        | Academy(29), Blacksmith(29) |

> [More information about unit attributes](../../index.md#attributes)