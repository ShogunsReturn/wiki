# Castle

- The castle is a Level building, so we can only increase one level at a time and its construction has a maximum level.
- The castle is the base of the province's defense.
    - Each additional castle level adds 2000 points of resistance to the gate and 50 additional archers to the defense.
    - These defenses will not act if a player is trying to break free without the help of other players.
    - The gate is immune to projectile damage.
    - The castle's archers, as well as the castle gate, are replenished in each battle.
    - The archers provided by the castle are level 1 and cannot be attacked by any attacking troops.
    - Each turn that the castle's attackers try to break down the gate (starting from the combat turn following the elimination of the last defender), the castle's traps will cause damage equal to 10% of the attacking army's life, only avoidable by armor.
- The castle is the only building that cannot be destroyed or reversed by an expansion.
- Maintenance costs increase with each level and are calculated using the formula: 10 * (1 + (n - 2) * (n - 1) / 2) (for levels 2 and above).

**Cost Table by Level:**

| Level | Rice  | Wood  | Iron  | Gold  | Areas | Man Hours | Requirement | Máx. level |
| :---: | :---: | :---: | :---: | :---: | :---: | :-------: | :---------: | :--------: |
|   2   |   -   |  951  |  527  | 1693  |   5   |   1858    |  Houses(1)  |     -      |
|   3   |   -   | 1459  |  806  | 2603  |   5   |   3600    |  Houses(1)  |     -      |
|   4   |   -   | 1968  | 1088  | 3530  |   5   |   5391    |  Houses(1)  |     -      |
|   5   |   -   | 2486  | 1371  | 4461  |   5   |   7233    |  Houses(1)  |     -      |
|   6   |   -   | 3002  | 1654  | 5417  |   5   |   9125    |  Houses(1)  |     -      |
|   7   |   -   | 3531  | 1941  | 6389  |   5   |   11066   |  Houses(1)  |     -      |
|   8   |   -   | 4055  | 2223  | 7358  |   5   |   13058   |  Houses(1)  |     -      |
|   9   |   -   | 4594  | 2512  | 8359  |   5   |   15100   |  Houses(1)  |     -      |
|  10   |   -   | 5125  | 2802  | 9376  |   5   |   17191   |  Houses(1)  |     -      |
|  11   |   -   | 5675  | 3093  | 10381 |   5   |   19333   |  Houses(1)  |     -      |
|  12   |   -   | 6214  | 3387  | 11427 |   5   |   21525   |  Houses(1)  |     -      |
|  13   |   -   | 6774  | 3683  | 12490 |   5   |   23766   |  Houses(1)  |     -      |
|  14   |   -   | 7320  | 3969  | 13533 |   5   |   26058   |  Houses(1)  |     -      |
|  15   |   -   | 7891  | 4266  | 14625 |   5   |   28400   |  Houses(1)  |     -      |
|  16   |   -   | 8445  | 4566  | 15733 |   5   |   30791   |  Houses(1)  |     -      |
|  17   |   -   | 9026  | 4867  | 16814 |   5   |   33233   |  Houses(1)  |     -      |
|  18   |   -   | 9587  | 5170  | 17951 |   5   |   35725   |  Houses(1)  |     -      |
|  19   |   -   | 10179 | 5475  | 19104 |   5   |   38266   |  Houses(1)  |     -      |
|  20   |   -   | 10748 | 5764  | 20221 |   5   |   40858   |  Houses(1)  |     -      |
|  21   |   -   | 11350 | 6071  | 21403 |   5   |   43500   |  Houses(1)  |     -      |
|  22   |   -   | 11926 | 6380  | 22602 |   5   |   46191   |  Houses(1)  |     -      |
|  23   |   -   | 12539 | 6691  | 23757 |   5   |   48933   |  Houses(1)  |     -      |
|  24   |   -   | 13123 | 7002  | 24985 |   5   |   51725   |  Houses(1)  |     -      |
|  25   |   -   | 13746 | 7316  | 26229 |   5   |   54566   |  Houses(1)  |     -      |
|  26   |   -   | 14337 | 7610  | 27422 |   5   |   57458   |  Houses(1)  |     -      |
|  27   |   -   | 14971 | 7927  | 28695 |   5   |   60400   |  Houses(1)  |     -      |
|  28   |   -   | 15570 | 8245  | 29984 |   5   |   63391   |  Houses(1)  |     -      |
|  29   |   -   | 16214 | 8563  | 31213 |   5   |   66433   |  Houses(1)  |     -      |
|  30   |   -   | 16820 | 8885  | 32531 |   5   |   69525   |  Houses(1)  |     -      |

---

### *In Development*

- The castle limits the number of foreign armies that can enter your city (one per castle level). Your armies do not count towards this limit.
- Each castle level allows you to build on 100 new areas available in your region. At level one you can build on 200.