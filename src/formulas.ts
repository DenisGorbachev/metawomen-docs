import { expect } from './util/src/chai.js'
import { BasicExperience, BasicIncome } from './constants.js'

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

export function getTokenMinedAmountMin(power: number, luck: number) {
  return Math.floor(BasicIncome * power)
}

export function getTokenMinedAmountMax(power: number, luck: number) {
  return Math.floor(getTokenMinedAmountMin(power, luck) * Math.pow(luck, 1.3))
}
