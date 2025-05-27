# Armies

## What Are Armies?

Armies are groups of military units that can be commanded by a samurai. Armies receive orders to **move, attack or defend**. They are created and managed through the Armies submenu, found within the [Armies Menu](../game-menu/advanced-menu/armies.md).

:::info
Each army can consist of up to six different types of military units, but there is no limit to the number of units of each type that an army can carry. Each army can have only one samurai assigned as its general. This samurai, in addition to being a formidable warrior, can grant powerful advantages to the other units in the army.
::: 

---

### How Do I Move Units Between Armies? 

When you have two or more armies in the same province, you can transfer any number of units between them by dragging the unit icons.

### How Do I Remove Units From an Army?

You can also remove units<!--  —or even disband the entire army— --> by dragging the icons into the "Rescind" area. Refer to the [Armies submenu](../game-menu/advanced-menu/armies.md#armies-submenu) for more details.

### Army Creation and Maintenance

Creating an army costs **2000 gold**.  
- **In your capital**: You can create an army using units from your reserve or units from other armies stationed in your capital.  
- **In other provinces you control**: Armies can also be created, but since the reserve is only available in the capital, you must use troops from other armies stationed in that province.   

Maintaining an army costs **50 gold per hour**.

---

## Army Commands

1. **Move**:  
   Use this command to send troops to allied provinces or provinces under your control.

2. **Attack**:  
   This command allows you to take control of enemy provinces. Once conquered, you can collect taxes from them, and if the player is recognized by the emperor, you will climb the rankings.

3. **Liberate Capital**:  
   If another lord controls your province, you can attempt to liberate it using this option (available only when you are not free). The army takes **2 hours** to prepare the attack. Successfully liberating your province will end the tax payments to your lord.

4. **Associate** *(in development)*:  
   When one or more players wish to combine their armies for a joint attack, they can associate them. The host army carries out its command, while the associated armies follow it into battle. This action can only be performed with confidant armies that are in the same province.

---
## Army Priorities

When under the control of a lord and being attacked by another player, the armies stationed in the province can have the following priorities:

1. **Do Not Defend**:  
   Your army will **not** engage in combat against the attacker. When another player is attacking you and your army's priority is set to "Do Not Defend", the attacking army will only need to breach the castle gates.
   - If there are allied armies in your province, each player must individually set their army's priority. *(in development)*
   - If you are under conquest, both your lord's army and the castle gates will defend the city.
   - This option is used when you are not allied with your lord or when the attackers are friendly forces intending to defeat your lord and leave you free afterward. *(in development)*

2. **Priority to Defend**:  
   Your army will engage in combat against the attacker. 
   - If you are under conquest your army will join your lord's army to fight off the player attempting to become your new lord. This option is used when you are allied with your lord, for example, because they impose a low tax rate.
   - When you are being attacked by an ally to free you from your lord, your army will not participate in the battle regardless of its priority setting. *(in development)*

---

## Army States

Depending on the orders assigned, an army can be in one of the following states:

1. **Hidden**:  
   The default state when an army is created. In this state, the army will not participate in combat.  

2. **In Movement**:  
   The army is traveling between two provinces.  
   - Movement is faster if the army is composed exclusively of cavalry units.

3. **Attacking**:  
   The army is launching an attack on another player’s province.  

4. **Defending the Capital**:  
   The army is defending its own province from an enemy attack.  

5. **Defending an Ally** *(in development)*:  
   The army is defending an allied province from an enemy attack.  

6. **Tax Collecting**:  
   The army remains in a vassal's province collecting taxes.  
   - If the vassal attempts to liberate themselves, this results in an attack on the tax-collecting army.  

7. **Associated** *(in development)*:  
   The army is associated with another allied army. While in this state, you cannot control its actions.  

For further details, refer to [Military Strategy](military-strategy.md).  

## Morale

Morale represents the state of mind of your troops.

- **Combat Damage Boost**:  
  For every point of morale your army has, unit damage increases by **2%**. This modifier applies to all units with attack/defense attributes greater than zero, excluding summoned units.  

- **Exceptions to Damage Modifiers**:  
  - **Shugenjas** (magical, nature, or Jigoku): Their abilities are not affected by morale.  
  - **Monks**: The amount of healing done by monks is increased by **2% per morale point**.  
  - **Torment Resistance**: Each morale point reduces torment effects by **5%**. Armies with higher morale are harder to torment. Magical units have double the resistance to torment.  
  - **Unaffected Abilities**: Tacticians, Agonizers, Ashihei Captain, and generals are unaffected by morale in terms of their abilities. However, Ashihei Captain and generals do gain the morale bonus for their own damage.  

- **Gaining or Losing Morale**:  
  - **Victory**: Each victory increases morale by 1 point, up to a maximum of 5. For defensive victories, the attack must involve more units than the defending army's glory.  
  - **Defeat**: Each defeat reduces morale by 1 point, down to a minimum of -5.  
  - **Canceling Actions**: Canceling an attack or disassociating while attacking reduces morale by 1.  
  - **Losing Freedom**: All armies drop to **-2 morale** upon losing freedom.  
  - **Samurai Charisma**: For every 20 points of charisma your army's samurai general has, morale increases by 1 point, up to a maximum of 5 (cumulative with other bonuses).  
  - **Iaijutsu Duel**: Winning or losing a battle where the political action "Iaijutsu Duel" was active adds or subtracts 1 morale point, without causing casualties.  
  - **Policies Increasing Morale**:  
    - *Promise of Power*: Adds **at least +5 morale**.  
    - *Unity is Strength*: Adds **+2 morale for each allied army associated with yours**.  

---

## Army Movement

The time required for an army to reach its destination depends on the distance, the action being undertaken, and the composition of the army.  

The formula is approximately: `total_time = base_time + preparation_time + (distance * army_speed)`

- **Base Time**:  
  - Standard base time is **10 minutes**.  
  - Increases by **5 minutes per associated army** led by the attacking or moving army.  

- **Preparation Time**:  
  - Attack actions require a **2-hour siege preparation time**.  
  - Movement actions do not require preparation time.  

- **Speed Modifiers**:  
  - Armies composed entirely of cavalry move at **double speed**.  
  - The **army_speed** value is the same regardless of the action, meaning distance affects all actions equally.  

- **Time Reduction**:  
  - **The knowledge of [Minister of War](../game-concepts/samurais/samurais.md#samurai-states)**: Can reduce movement time by up to **15%**, excluding the 2-hour preparation time for attacks.  
  - **[Cartographer Ability](/docs/game-concepts/samurais/reasoning-skills#war-minister)** (related to Reasoning): Can also reduce movement time by up to **15%**, excluding the 2-hour preparation time for attacks.  

---
## Undergoing an Attack

When you are attacked, the attacking army (and its associated armies) will be visible in [**Armies > Strategy**](../game-menu/advanced-menu/armies.md#strategy-submenu). <!-- as well as on your profile -->  

<!-- If an ally, clan member, vassal, or spied player is attacked, you can also see the attack on their profile.   -->

### Attack Visibility  
- The attack becomes visible **2 hours + 4 minutes for each [watchtower](/docs/game-concepts/buildings/ninjutsu/watchtower)** you have constructed.  
- You will not see the exact number of units in the attacking army or their samurai details. Instead, you'll receive approximate information about the unit count:
  - For example:
    - 5 units will appear as **\<10** (less than 10).  
    - 70 units will appear as **\<100** (less than 100).  
  - The game uses the following intervals: `<10, <40, <100, <300, <600, <1k, <1.5k, <2k`, and increments of 1000 from there: `<3k, <4k, <5k`, etc.  

<!-- - **Detailed Information**:  
  - If the attacker is spied on, detailed information about their army can be seen on their profile but not on your profile or the profile of the person being attacked. -->

---

## Fatigue

Fatigue represents the physical exhaustion of your units.  
- Armies accumulate fatigue while moving, which negatively impacts their performance in battles.  
- Fatigue reduces **stamina**, which directly affects the damage dealt by units. An army without fatigue fights at **100% efficiency**.

### Fatigue Accumulation
- Fatigue is accumulated based on the time an army spends moving.  
- **Siege time does not contribute to fatigue accumulation**.  
- For every hour of movement, the army gains **3% fatigue**.  
- A fully rested army has a **1-hour buffer** before fatigue begins to affect its performance.  
- An army can never accumulate more than **30% fatigue**.

### Fatigue Recovery
- An army stationed in a province recovers **1% fatigue per hour**.  
- Once fatigue reaches **0**, the army requires an additional **3 hours** to fully recover and be considered completely rested.  

## Basic Concepts of Combat

1. **Roles in Battle**:  
   - Every battle involves two armies, one assuming the role of **attacker** and the other as **defender**.  
<!--    - There can be multiple armies on each side of the battle:  
     - **Attacking Armies**: If the attacker has associated armies, the non-associated army is designated the **"Attacking Leader"**, with the rest supporting it.  
     - **Defending Armies**: If multiple armies are defending a province, any non-associated army is considered a **"Defending Leader"**.  

   The distinction between leaders and supporting armies is significant for certain political actions that activate only if your army is leading in attack or defense. -->

2. **Damage Calculations**:  
   - **Attackers**: Units deal damage based on their **attack stat**.  
   - **Defenders**: Units deal damage based on their **defense stat**.  

3. **Battle Turns**:  
   - Battles occur over multiple turns.  
   - A detailed **battle report** showing the turn-by-turn evolution of the fight is provided after the battle.

4. **Armor**:  
   - Armor **reduces** incoming **damage** by a percentage equal to the unit's armor value.  
   - Armor does not protect against certain damage types, such as magic.

5. **Counterattack**:  
   - A unit can **reflect** a percentage of the **damage** it suffers based on its counterattack value.

6. **Unit Effectiveness**:  
   - Units have strengths and weaknesses based on their type.  
   - For more details, refer to the [Military Units](./military-units) section.

7. **Stamina and Combat Efficiency**:  
   - Units lose **stamina** as combat progresses, reducing the damage they deal.  
   - Initial stamina is **100%** minus the movement fatigue of each army.  
   - Stamina loss during combat does not affect the fatigue level of the army after the battle.  
   - Certain political actions or samurai abilities can mitigate stamina loss.

8. **Damage and Death Probability**:  
   - When a unit takes damage but is not completely killed (considering healing from monks and armor), there is a chance it may die based on the proportion of damage received relative to its total health.
   - More noticeable for powerful units like **Kamis** and **Onis**, which, despite their high health, still have a chance to die when taking significant damage.

   :::info Example
   A unit with 100 health receiving 10 damage has a **10% chance to die**.  
   :::