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
  return BasicIncome * minExperience * Math.pow(level - 1, 1.3)
}
