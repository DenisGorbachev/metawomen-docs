# Formulas
  
```typescript
import { BasicExperience, BasicIncome, MaxPotential } from './constants.js'
import { Milliseconds } from './types.js'
import { day } from './util/src/duration.js'
import { expect } from './util/src/chai.js'
import { Random } from 'random'

/**
 * How much experience the user needs to upgrade to `level`
 */
export function getMinExperienceForUpgrade(level: number) {
  expect(level).to.be.greaterThanOrEqual(1)
  return Math.floor(BasicExperience * Math.pow(level - 1, 1.2))
}

/**
 * How many tokens the user needs to upgrade to `level`
 */
export function getMinTokenAmountForUpgrade(level: number) {
  expect(level).to.be.greaterThanOrEqual(1)
  const minExperience = getMinExperienceForUpgrade(level)
  return Math.floor(BasicIncome * minExperience * Math.pow(1.5, (level - 1)))
}

/**
 * How many tokens the user will mine with each basic action
 */
export function getTokenMinedAmount(random: Random, power: number, luck: number, fatigue: number) {
  const min = getTokenMinedAmountMin(power, luck)
  const max = getTokenMinedAmountMax(power, luck)
  const getRandomAmount = random.uniform(min, max)
  return Math.floor(getRandomAmount() * Math.pow(fatigue, 0.8))
}

export function getTokenMinedAmountMin(power: number, luck: number) {
  return Math.floor(BasicIncome * power)
}

export function getTokenMinedAmountMax(power: number, luck: number) {
  return Math.floor(getTokenMinedAmountMin(power, luck) * Math.pow(luck, 1.3))
}

/**
 * How many tokens the user needs to mint a new NFT
 * Parent potential drops -> Mint cost increases
 */
export function getMinTokenAmountForMint(parentAPotential: number, parentBPotential: number) {
  const potentialDiff = MaxPotential - Math.min(parentAPotential, parentBPotential)
  return Math.floor(BasicIncome * 50 * Math.pow(1.2, potentialDiff))
}

/**
 * How many tokens the user needs to rest (drop fatigue to 0)
 */
export function getMinTokenAmountForRest(experience: number) {
  return Math.floor(BasicIncome * experience * 0.1)
}

/**
 * How many tokens the user needs to freeze the NFT (prevent slashing)
 */
export function getTokenAmountForFreeze(duration: Milliseconds) {
  return Math.floor(BasicIncome * duration / day)
}

export function getTokenAmountForFreezePerDayFloored(dayCount: number) {
  return getTokenAmountForFreeze(dayCount * day)
}

```
