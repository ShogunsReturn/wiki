# Military Strategy

**Strategy** refers to the orders you can issue to your armies. By utilizing these orders effectively, you can maximize the potential of your troops. Orders can be issued from the **Strategy** submenu in the **Armies Menu**. 

There are five types of orders:

## Movement

Orders an army to move between two provinces.  
- The army will **not engage in combat** upon reaching its destination.  
- Eligible destinations include provinces that belong to you, your vassals, allies, clan members, or vassals of your allies or clan members.  

If a province no longer meets these requirements, you cannot send armies there, and any armies stationed there will return to one of your provinces.

**Travel Time Factors**:
- Travel time depends on the distance to the destination.  
- **Base time** increases by **5 minutes for each associated army** led by the moving army.  
- Armies composed entirely of cavalry move at **double speed**.  
- **Minister of War Knowledge** can reduce travel time by **up to 15%** (except for the 2-hour preparation time required for attacks).  
- **Cartographer ability** (related to Reasoning) can also reduce travel time by **up to 15%** (except for the 2-hour preparation time for attacks).  

---

## Attack

Orders an army to attack a target province.  

**Target Province Outcomes**:
1. **If the province belongs to any player**:  
   - Victory will make you their **lord**, allowing you to impose a tax rate while maintaining an army in the province.  

2. **If the province belongs to an ally or clan member** *(in development)*:  
   - Victory will **liberate** them from their lord.  
   - If they are already a free lord, you cannot attack their province.  

3. **If the province belongs to you**:  
   - This is treated as a **liberation attack**. Victory will free you from your current lord.  

### What is the Castle?  
When attacking a province, your army must fight both the defending armies and the castle.  
- The castle has its own defenses, including **archers and traps**, that participate in the battle.  
- The castle's **defensive strength** and **health points** increase with its level. To win the battle, you must overcome these defenses.  

### Can You Attack Any Player?
No. You can only attack players with **similar or higher glory** than your own.  
:::info Attack restriction
You cannot attack a player if your glory exceeds theirs by more than **2.5 times**.
:::
---

## Liberation

A special type of attack directed at the **tax-collecting army** stationed in your province by your lord.  
- **Victory** will expel the army, freeing you from vassalage and ending tax payments.  

### How Does Your Castle Act During Liberation?
- If you launch a liberation attack **without allied support**, your army will **not** have to fight your castle’s defenses (archers and traps).  
- If you have **associated allied armies**, you will have to fight your own castle defenses. *(in development)* 

### Other Ways to Achieve Liberation *(in development)*
1. An **ally or clan member** attacks and defeats your lord's army.  
2. Your lord **withdraws** their tax-collecting army from your province.  
3. Your lord **greatly surpasses** you in glory. You will be freed if your glory is less than **one-third** of theirs.  
4. Using the political action **"People’s Rebellion"**, if your lord leaves insufficient defenses in their tax-collecting army.  

---

## Defense

Your armies will automatically defend the province they are stationed in against enemy attacks as long as the [**Defend priority**](armies.md#army-priorities) is active.  
- This setting can be enabled from the [Armies submenu](../game-menu/advanced-menu/armies.md#armies-submenu) in the **Armies Menu**.

<!-- ### How Do You Defend an Ally?
- Move your army to their province and ensure the **"Defend" priority** is active. Your army will automatically join theirs in defending the province. -->

### How Do You Prevent Your Armies from Engaging in Combat?
- Issue the [**"Do Not Defend"**](armies.md#army-priorities) order. This prevents your armies from fighting even if the province they are in is attacked.  
    
    :::warning
    Tax-collecting armies **cannot** use the **"Do Not Defend"** order.  
    :::

---

## Association *(in development)*

Associating an army means joining it to an ally’s or clan member’s army.  
- Once associated, your army will perform the same actions as the **main army** it is joined to.  
- The main army’s player can associate **one army for every 3 levels of their Circle of Sages**.  

:::info **Example**:
A player with **level 9 in the Circle of Sages** can associate up to **3 armies**.

- While associated, you lose direct control of the army but can view its movements and battle reports.  
- The only command you can issue is **"Dissociate"**, which returns control of the army to you.
:::

### Can an Army with Associated Armies Receive More Associations?
Yes, as long as the main army’s player has sufficient Circle of Sages levels to manage all associated armies.   -->