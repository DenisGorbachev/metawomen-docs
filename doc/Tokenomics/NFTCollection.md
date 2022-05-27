# MetaWomen NFT Collection

## Value propositions

* Earn MWL token via Learn-to-Earn mechanics.
* Gain private access to our closed community.

## Parameters

* Initial supply: `1000`
* Mintable: yes, by users ([see docs](./Minting.md))

## Characteristics

* **Level** determines max count of available upgrades
  * Initial value: `1`
* **Experience** determines max available level
  * Initial value: `0`
  * Increases: by `1` after each successful [learning action](#learn)
* **Potential** determines if this NFT can be used to [mint new NFTs](./Minting.md).
  * Initial value: `7`
  * Min value: `0`
  * Decreases: by `1` after each successful minting action

## Primary attributes

* **Power** determines max token reward per action
  * Initial value: `1`
* **Regeneration** determines how much energy is restored per second
  * Initial value: `1`
* **Endurance** determines max energy limit
  * Initial value: `1`
* **Luck** determines max multiplier of reward per action
  * Initial value: `1`
* **Child level** determines the child NFT level ([see minting](./Minting.md))
  * Initial value: `1`

## Secondary attributes

* **Energy** determines if the user can take a [Learn action](#learn)
  * Initial value: `5000`
  * Max value: `5000 * Endurance`
  * Increased by: `Regeneration` per second
  * Decreased by: `5000` per [Learn](#learn) action
  * Implementation details:
    * Calculate the current energy level dynamically: `const energy = getEnergy(events)`

<!--
* **Mint energy** determines if the user can take a [Mint action](#mint)
  * Initial value: `172800` (24 hours * 60 minutes * 60 seconds)
  * Max value: `172800`
  * Increased by: `1` per second
  * Decreased by: `172800` per [Mint](#mint) action
  * Implementation details:
    * Calculate the current energy level dynamically: `const mintEnergy = getMintEnergy(events)`
-->

## Constants

* **BasicIncome** determines the base amount of MWL tokens per [Learn action](#learn)
  * Value: `1000`

## Actions

### Learn

Inputs:

* `NFT` - a MetaWomen NFT

Checks:

* `NFT Energy` must be at least 5000

Effects:

* Increases `NFT Experience` by 1
* Decreases `NFT Energy` by 5000
* Increases `User MWL Balance` by `BasicIncome * Power`

### Mint

Inputs:

* `Parent A` - a MetaWomen NFT
* `Parent B` - a MetaWomen NFT

Checks:

* `Parent A` and `Parent B` must be owned by the same `User`
* `Parent A` must have `Potential` greater than `0`
* `Parent B` must have `Potential` greater than `0`
* `Parent A` must not have minted in the last 48 hours
* `Parent B` must not have minted in the last 48 hours
* `User MWL Balance` must be at least:
  * `MWLBalanceForMint = BasicIncome * 50 * 1.2 ^ (Potential.max - getLowestPotential(ParentA, ParentB))`

Effects:

* Decreases `Parent A Potential` by `1`
* Decreases `Parent B Potential` by `1`
* Decreases `User MWL Balance` by `the formula above`
* Mints a new NFT:
  * Characteristics:
    * Level: max of (`Parent A Child Level` or `Parent B Child Level`)

### Level up

Inputs:

* `NFT` - a MetaWomen NFT

Checks:

* `NFT Experience` must be greater than:
  * `MinExperience = 10 * 1.2 ^ CurrentLevel`
* `User MWL Balance` must be at least:
  * `MWLBalanceForLevelUp = BasicIncome * MinExperience * 1.3 ^ TargetLevel`

Effects:

* Increases `NFT Level` by `1`
* Decreases `User MWL Balance` by `the formula above`

### Increase attribute

Inputs:

* `NFT` - a MetaWomen NFT
* `Attribute` - a MetaWomen NFT attribute

Checks:

* Sum of `NFT` attribute increments must be less than `NFT Level`
  * Default values of NFT attributes don't count, only the increments.

Effects:

* Increase `[Attribute]` by `1`

Notes:

* This action is free but irreversible.

## Implementation details

* Omnichain using [LayerZero ONFT standard](https://github.com/LayerZero-Labs/solidity-examples/tree/main/contracts/token/onft) (can be listed on multiple marketplaces on different blockchains).