# MetaWomen NFT Collection

## Value propositions

* Earn MWL token via Learn-to-Earn mechanics.
* Gain private access to our closed community.

## Parameters

* Initial supply: 1000
* Mintable: yes, by users ([see docs](./Minting.md))

## Attributes

* **Level** determines max count of available upgrades
  * Initial value: 1
* **Experience** determines max available level
  * Initial value: 0
  * Increments: by 1 after each successful learning action
* **Power** determines max token reward per action
  * Initial value: 1
* **Endurance** determines max count of actions per day
  * Initial value: 1
* **Luck** determines max multiplier of reward per action
  * Initial value: 1

## Implementation details

* Omnichain using [LayerZero ONFT standard](https://github.com/LayerZero-Labs/solidity-examples/tree/main/contracts/token/onft) (can be listed on multiple marketplaces on different blockchains).
