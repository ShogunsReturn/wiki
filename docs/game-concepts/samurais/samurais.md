# Samurai 

Samurai are distinguished men and women who can be trained to learn various skills and later assigned as **magistrates** or **army generals**, granting **powerful in-game advantages**. Players can **create, train, and assign samurai** from the [Samurai Menu](../../game-menu/advanced-menu/samurais.md).  

:::info
To **unlock** the Samurai Menu, players **must construct** the [Council of Magistrates](../../game-concepts/buildings/commercial-political/magistrates-council.md).  
:::

---

## Samurai States  

An **icon below the samurai’s name** indicates their current state. The possible states are:  

1. **Hidden**  
   - Samurai who are not assigned to any task remain in a **hidden state**.  
   - Samurai **start in this state** after creation or after being unassigned.  

2. **Training**  
   - When assigned to an **attribute or skill training area**.  
   - Assignments are managed from the [Train submenu](../../game-menu/advanced-menu/samurais.md#train-submenu) in the Samurai Menu.  

3. **Magistrate of Economy**  
   - Assigned as an **Economy Magistrate**, granting **economic bonuses**.  
   - Assigned from the [Magistrates submenu](../../game-menu/advanced-menu/samurais.md#magistrates-submenu).  

4. **Magistrate of Politics**  
   - Assigned as a **Politics Magistrate**, providing **political advantages**.  
   - Assigned from the [Magistrates submenu](../../game-menu/advanced-menu/samurais.md#magistrates-submenu).

5. **Magistrate of War**  
   - Assigned as a **War Magistrate**, improving **military operations**.  
   - Assigned from the [Magistrates submenu](../../game-menu/advanced-menu/samurais.md#magistrates-submenu).

6. **Magistrate of Subterfuge**  
   - Assigned as a **Subterfuge Magistrate**, specializing in **covert operations**.  
   - Assigned from the [Magistrates submenu](../../game-menu/advanced-menu/samurais.md#magistrates-submenu).

7. **Army General**  
   - Assigned as a **General of an army**, influencing battles with **military skills and attributes**.  
   - Increases **battle effectiveness**, turning the samurai into a **powerful warrior**.  
   - Assigned from the [Armies submenu](../../game-menu/advanced-menu/armies.md#armies-submenu) within the Army Menu.  

---

## Samurai Attributes  

Each samurai has **four attributes**, ranging from **0 to 100**:  

1. Knowledge  
2. Reasoning  
3. Charisma  
4. Picardy  

### Attribute System  

- **Attribute points are assigned during samurai creation**.  
- The **Council of Magistrates level** determines how many points can be allocated.  
- The **Library level** sets the **maximum limit** for each attribute.  

The **bonuses provided by a samurai** depend on **where they are assigned**:

| Attribute | Economy Minister                                       | Politics Minister                                             | War Minister                                          | Subterfuge Minister                                                              | Army General                                             |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Knowledge | Increases resource production by up to 20%.            | Up to 30% discount on the cost of political actions.          | Reduces army travel time by up to 15%.                | Up to 20% discount on the cost of ninja missions.                                | The samurai will increase their damage in battle.        |
| Reasoning | Reduces construction costs by up to 25%.               | Reduces cooldown times of political abilities by up to 30%.   | Reduces unit maintenance costs by up to 20%.          | Reduces ninjutsu mission times by up to 30%.                                     | Reduces damage taken by units by up to 30%.              |
| Charisma  | Increases gold collection from villagers by up to 30%. | Increases the effect of political actions by up to 30%.       | Your armies will defend the capital up to 20% better. | Ninjas will fill vacant slots up to 25% faster.                                  | +1 morale for every 20 charisma points (up to +5 total). |
| Picardy   | Increases theft protection by up to 30 points.         | Reduces activation times of political abilities by up to 30%. | Units will complete their training up to 25% faster.  | Your ninjas will have up to 25% higher chances of survival when making mistakes. | Greater survival in battle.                              |

### Training Costs (Time Required Per Attribute, from Lowest to Highest)  

1. Picardy (Least Time-Consuming)  
2. Charisma  
3. Knowledge  
4. Reasoning (Most Time-Consuming)  

---

## Samurai Skills  

A samurai can learn **various abilities** that enhance their effectiveness.  

- **Skills are tied to specific attributes**.  
- **They only activate when the samurai is assigned to the correct role**.  

### Example Skill  

- **Name**: Protocol  
- **Associated Attribute**: Knowledge  
- **Role Requirement**: Politics Magistrate  
- **Effect**: Grants up to +0.2 Honor per hour.  

#### Skill Activation  
- If the samurai has **50 Knowledge points**, the bonus is **+0.1 Honor per hour**.  
- To **activate the effect**, the samurai **must be assigned as a Politics Magistrate**.  

### Skill Categories  

- [Knowledge-related Skills](./knowledge-skills.md)  
- [Reasoning-related Skills](./reasoning-skills.md)  
- [Charisma-related Skills](./charisma-skills.md)  
- [Picardy-related Skills](./picardy-skills.md)  

---

## Samurai Escort System *(in development)*

The **Escort System** is a **gold-based protection mechanism** that helps safeguard samurai from **ninja assassination missions**.  

- **The level of protection is equal to one-third of the assigned gold**.  
- Players can invest **as much gold as they wish**, but cannot exceed their **net gold income**.  
- **Higher investment = Stronger protection**.  
- To assign **escort protection**, click the **icon below the samurai’s name**, to the **right of their state**.  

---

## Samurai in Battle  

- Throughout the **entire battle**, the samurai **uses their abilities** (if alive).  
- If their **army is destroyed**, the samurai **commits seppuku (suicide)**.  
- **Base Damage** (Melee & Ranged) starts at **zero**.  
- **Knowledge attribute must be increased** for the samurai to **deal damage in battle**.  

### Samurai Attributes & Battle Effects  

#### Knowledge:  
- The **samurai contributes damage** to the attack starting from the [archery turn](../combat.md#combat-turns).  
- **Samurai Damage Formula:**  
  - **Projectile Damage:** `Knowledge × 20` → **Active during turns 6 to 9**.  
  - **Cavalry Damage:** `Knowledge × 30` → **Active during turns 10 to 16**.  

#### Reasoning:  
- **Reduces unit damage taken by up to 30%.**  
- **Does not** reduce damage taken by the samurai itself.  

#### Charisma:  
- Determines the **morale bonus** applied to all units.  
- **Maximum bonus:** +5 morale.  
- **Example calculations:**  
  - **20 Charisma** → **+1 morale**.  
  - **40 Charisma** → **+2 morale**.  
  - **39 Charisma** → **Only +1 morale** (same as 20).  

#### Picardy:  
- **Increases the samurai’s survival chances in battle.**  
- **Samurai Stats Based on Picardy:**  
  - **Health:** `500 + (25 × Picardy)`  
  - **Armor:** `(Picardy / 2)%`  
  - **Counterattack:** `(Picardy / 4)%`  

- **Damage Calculation for the Samurai in Battle:**  
  - The samurai is considered as **20 units** in battle, plus:  
    - `+ 0.2 × Knowledge`  
    - `+ 0.1 × Reasoning`  
    - `+ 0.1 × Charisma`  
    - `+ 0.1 × Picardy`  

---

### Special Characteristics:  

- **Counts as Cavalry:**  
  - Avoids 50% of enemy projectiles.  

- **Counts as Rearguard:**  
  - If protected by sufficient infantry, it does not take melee damage from enemy frontline troops.  

- **Counts as Melee Cavalry:**  
  - Spear units deal bonus damage to the samurai.  
  - Applies during Turn 10, after infantry engages.  

- **Counts as a Special Unit:**  
  - Affected by assassins and masters.  

- **Damage Accumulation:**  
  - Damage received by the samurai carries over between turns.  