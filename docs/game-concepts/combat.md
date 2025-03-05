# Combat (Battles)

Battles are engagements between armies for control of a province.

---

## Basic Combat Concepts

- **Attacker and Defender Roles**:
   - In every battle, one army takes the role of **attacker** and the other of **defender**.  
   - Units deal damage based on their role:  
     - **Attackers**: Use their **attack stat**.  
     - **Defenders**: Use their **defense stat**.  

- **Turn-Based Battles**:  
   - Battles occur over multiple turns, with a detailed **battle report** available afterward showing turn-by-turn progression.  

- **Armor and Counterattack**:
   - **Armor** reduces damage received by a percentage equal to the unit’s armor value but does not protect against magical damage.  
   - **Counterattack** reflects a percentage of the received damage based on the unit’s counterattack value.  

- **Unit Effectiveness**:
   - Different unit types have varying effectiveness against others. For details, refer to the [**Military Units**](military-units/index.md) section.  

- **Stamina and Fatigue** *(in development)*:
   - Units lose **stamina** during battles, reducing their damage output over time.  
   - Fatigue from movement does not carry over to future battles.  
   - Certain political actions or samurai abilities can mitigate stamina loss.  --> 

- **Damage and Death Probability**:
   - Units that survive damage (after healing and armor effects) have a chance of dying based on the proportion of damage received relative to their total health.  
    :::info Example
    A unit with 100 health taking 10 damage has a **10% chance of dying**.  
    :::
---

## Attackers and Defenders

- **Attacking Armies**:
   - The number of attackers is limited by the level of the **castle** in the target province.  
   - The attacking army can receive support from allied or clan armies, which must be **associated**. *(in development)*  
   - For every two levels of the **Circle of Sages**, one additional army can be associated.

- **Defending Troops**:
   - Defenders consist of:  
     - **The Castle**:  
       - Equipped with archers and traps that aid in defense.  
       - Higher castle levels increase the number of defenders and the durability of the castle gate.  
     - **Defending Armies**:  
       - The castle limits the number of allied defenders that can assist, excluding the owner’s armies.  

   - If there are no defending armies, attackers fight only the castle's defenses.  
   - **Liberation Attacks** (without allied support) do not include castle defenses.  

---

## Combat Turns

Battles last up to a maximum of **16 turns**, with each turn activating specific unit types:  

1. **Preliminary Turns (1-4)**: Units with special abilities (e.g., saboteurs, [raiders](military-units/special/ronin/raider.md), assassins) act.  
2. **Elite Archers' Turn (5)**: Units with special abilities and elite archers act.  
3. **Archery Turn (6)**: Elite archers and regular archers attack.  
4. **Hondas' Turn (7)**: All ranged units attack.  
5. **Cavalry Turn (8)**: Cavalry charge occurs.  
6. **Infantry Turns (9-16)**: All infantry units act.

---

## Possible Outcomes

1. **Attacker Victory**:  
   - The attacker gains control of the province and can impose a tax rate.  
   - If the province belonged to an ally, they are automatically freed.  

2. **Defender Victory**:  
   - The province remains under the defender's control.  

3. **Attacker Victory Without Breaching the Castle**:  
   - If the attackers defeat all defending armies but fail to breach the castle gate by the final infantry turn, they retreat, and the result is considered a **defeat**.  

---

## Effects of Different Unit Types

1. **Infantry** (e.g., Ashigarus, Ashigarus with Spears, Bushi, Naginata, Nodachi):  
   - Their damage affects only enemy infantry.  
   - They provide cover for archers and rear units as long as their numbers meet or exceed those behind them.  
   :::info Example  
     - **Attacking:** 200 archers require **200 infantry** to protect them.  
     - **Defending:** 200 archers require **160 infantry** to protect them (80% coverage).  
   :::
   - **Bushis** gain a +5 damage bonus against Ashigarus.  

2. **Projectile Units** (e.g., Archers, Slingers, Mounted Archers):  
   - Spread their damage evenly across all enemy units.  
   - Begin attacking before infantry or cavalry.  
   - After several turns, their damage decreases once both sides engage in melee.  
   - Mounted archers cannot be damaged by regular infantry.  

3. **Lancers** (e.g., Ashigarus with Spears, Gakis, Naginatas):  
   - Always positioned at the front line and counted as double for damage distribution in melee.  
   - Special bonus against cavalry:  
     - Ashigarus with spears: +(3 + 2 × (level - 1))  
     - Naginatas: +(10 + 3 × (level - 1))  
     - Gakis: +(1 × level).  
   - Bonus is applied throughout the battle and doubled during the cavalry charge turn.

4. **Cavalry** (e.g., Light, Heavy):  
   - Act before infantry but after archers.  
   - Deal **double damage** during their charge turn.  
   - Their attacks affect all units equally due to their flanking capabilities.  
   - Vulnerable to lancers.  

<!-- ---

## **Leadership in Battle**

1. **Leading an Attack**:  
   - The owner of the attacking army, along with any associated armies.  

2. **Leading in Defense**:  
   - Includes each defender's army owner and the owner of the province.   -->