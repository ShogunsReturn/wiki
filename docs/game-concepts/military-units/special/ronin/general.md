---
sidebar_position: 3
---
# General

## Overview

The Ronin Generals are renowned battlefield leaders, highly skilled in strategy and tactics. Their commanding presence inspires troops under their command, raising their morale. However, their death in battle can lead to a complete collapse of their forces.

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

:::tip Special Effect - Strategic Leadership
- Each General increases the damage of all friendly units by:
  - +0.5 + 0.05(level-1) per unit.*
- Each General affects up to 100 units (including himself).
- Maximum bonus is capped at 5 + (level-1).
- If a General is present in an allied army, their bonus applies to associated armies as well, provided there is at least one General per army.
- Does not affect summoned animals.

**Scaling Considerations:**
- If the total units exceed the number covered by Generals (Generals * 100), the bonus is divided accordingly.
- Example:
  - 990 units and 10 Generals = +2.5 bonus.
  - 1000 units and 20 Generals = Full +5 bonus.
  - If an army has twice the number of units needed, the bonus is halved.
- If Generals, Ashigaru Leaders, or Strategists of different levels are present in the same army, their average level is used, rounded down.
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

### Samurai Skills
They can be affected by the Samurai abilities [Special Knowledge](../../../samurais/knowledge-skills.md) and [Exemplary Soldier](../../../samurais/charisma-skills.md).

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