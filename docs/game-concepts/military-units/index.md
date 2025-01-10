# Military Units

## What Are Military Units?

Military units are the troops that make up your Armies. Military units can be recruited from the Recruit submenu within the Armies menu. To recruit military units, you must pay a resource cost, and once created, you will need to pay maintenance (which varies depending on the unit).

## Unit Creation Costs

The time required to create units is independent of the number of units being created. In other words, it takes the same amount of time to recruit 1 ashigaru as it does to recruit 100.

As a general rule, all units require recruiting population from your village. Care must be taken not to recruit too many people at the same time to maintain sufficient resource production.

Dark units do not require recruiting population but have higher maintenance costs.

## Unit Levels

The units you can recruit depend on one or more buildings. Increasing the levels of these buildings will improve the level of the units you can recruit. The higher the level, the better the attributes and effects of the units, without altering the cost or maintenance of the unit.

When you upgrade buildings, the units you have already recruited will not automatically increase in level. You will need to either recruit new units or retrain the ones you already have.

## Types of Military Units

### Basic Units
- [Ashigaru](basic/ashigaru.md)
- [Ashigaru with Yari](basic/ashigaru-yari.md)
- [Ashigaru with Honda](basic/ashigaru-honda.md)
- [Naginata](basic/naginata.md)
- [Archer](basic/archer.md)
- [Bushi](basic/bushi.md)
- [Nodashi](basic/nodachi.md)
- [Light Cavarly](basic/light-cavalry.md)
- [Archer Cavarly](basic/archer-cavalry.md)
- [Heavy Cavarly](basic/heavy-cavalry.md)

### Magic Units
- Monk
- Fire Shugenja *
- Earth Shugenja *
- Air Shugenja *
- Water Shugenja *
- Kami *

### Dark Units
- Undead
- Gaki
- Goblin
- Jigoku Shugenja *
- Oni *

### Special Units 
| Ronin           | Crane          | Dragon            | Snake       | Tiger       | Leopard     | Jigoku            |
| --------------- | -------------- | ----------------- | ----------- | ----------- | ----------- | ----------------- |
| Raider          | Elite Archer * | Warrior Monk *    | Saboteur *  | Veteran *   | Fanatic *   | Infected Goblin * |
| Ashigaru Leader | Kenshinzen *   | Natura Shugenja * | Assassin *  | Master *    | Vanguard *  | Arcane Tengu *    |
| General         | Yojimbo *      | Dragon *          | Tormentor * | Tactician * | Berserker * | War Tower *       |

> *Units marked with \* are in development*

## Attributes

1. **Attack**: Attack represents the damage points a unit inflicts each turn during combat when attacking a province.  
2. **Defense**: Defense represents the damage points a unit inflicts each turn during combat when defending a province.  
3. **Health**: The amount of damage a unit can take before dying.  
4. **Armor**: The percentage of incoming damage a unit avoids. Armor does not apply against magical attacks (such as those caused by fire and water shugenja).  
5. **Counterattack**: The percentage of incoming damage that a unit reflects back, up to a maximum of half its current health points.  


## Unit Types

### Melee Infantry
> Foot soldiers that engage in close combat.  
- Melee infantry serves as the reference unit on the battlefield. Their behavior is influenced by unit characteristics and other factors such as fatigue, morale, army generals, and their abilities.  

### Ranged Infantry 
> Infantry that attacks from a distance and is shielded by melee infantry.  
- **In attack**: Ranged infantry remains protected as long as there are more melee units than archers.  
- **In defense**: A ratio of melee units greater than 80% of the number of archers is sufficient.  
Once this ratio is lost, melee infantry will engage the ranged units directly. Two turns after melee infantry engages, archers can no longer attack normally, reducing their damage output by half for the remainder of the battle.  

### Melee Cavalry
> Mounted units that move quickly and can attack enemies faster, making them effective against ranged units.  
- Cavalry enters combat one turn earlier than infantry and receives a x2 damage bonus on that turn.  
- Cavalry's attacks are distributed among all enemy units due to their mobility, allowing them to target ranged and rear units.  
- Cavalry has a 50% chance to avoid enemy projectiles but takes extra damage from spear units.  

### Ranged Cavalry
> Mounted units with ranged attack capabilities, combining the benefits of archers with increased mobility.  
- They do not charge like melee cavalry but can still avoid 95% of incoming damage from enemy infantry.  

### Rear Units
> Units positioned behind archers and infantry.  
- Rear units cannot be damaged by melee infantry as long as they are protected by sufficient infantry (both melee and ranged).  
- Sufficient protection:  
   - **In attack**: More infantry + archers than rear units.  
   - **In defense**: Infantry + archers greater than 80% of the number of rear units.  

:::info
Rear units are vulnerable to cavalry, ranged attacks, and magical effects.  
:::

## Traits and Abilities

### Ashigaru Units  
Ashigaru units not only fight in battles but also work as part of the population (although they do not perform crafts) while stationed in the owner's capital, whether in the army or reserve.  

### Spear Units  
Spear units have bonuses against cavalry, applying throughout the battle, including during the cavalry charge turn (where their normal damage applies only to cavalry).  
- [**Ashigaru with yari**](./basic/ashigaru-yari.md): +(3 + 2 * (level - 1))  
- [**Naginata**](./basic/naginata.md): +(10 + 5 * (level - 1))  
- **Gaki**: +(1 * level)  

### Ranged Units  
Ranged units are the first to attack enemy units and can attack while enemies advance towards them.  
- The number of turns they can attack before melee engagement depends on their range, which varies between different ranged unit types.  
- They are vulnerable to melee units if left unprotected.  
- Maintaining sufficient melee infantry to shield your archers is crucial for protecting them during a battle.  

### Magical Units *(in development)*  
Typically weak rear-line units with powerful abilities. Check each unit’s description for its magical effects.  

### Dark Units *(in development)* 
Dark units do not require villagers for recruitment but suffer higher maintenance costs.  
- **Torment**: Dark units instill fear in other warriors, potentially causing some or all of them to avoid combat depending on the number and power of the dark units.  
    - If the tormented army survives, the cowards return to their positions after battle. If the army is destroyed, they are not recovered.  
    - Each point of morale reduces the chance of being tormented by 5%.  
    - Magical units are twice as resistant to torment.  
    - Dark units cannot be tormented and never retreat from battle.  

    **Torment Values by Unit:**  
    - Gaki or Goblin: 8 health points  
    - Undead: 4 health points  
    - Tengu or Shugenja from Jigoku: 20 health points  
    - Oni or Tormentors: 200 health points  
    - Each level above 1 increases torment capacity by 10%.  

:::note
Recruiting dark units reduces honor rapidly, ranging from 0.01/hour for a Gaki to 0.1/hour for an Oni.  
:::

### Special Effects  
Some units have unique special effects. Check each unit's description to learn about these abilities.  