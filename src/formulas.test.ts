import { test } from '@jest/globals'
import { getMinExperienceForUpgrade, getMinTokenAmountForUpgrade } from './formulas.js'
import { expect } from './util/src/chai.js'

test(getMinExperienceForUpgrade.name, () => {
  expect(getMinExperienceForUpgrade(1)).to.equal(0)
})

test(getMinTokenAmountForUpgrade.name, () => {
  expect(getMinTokenAmountForUpgrade(1)).to.equal(0)
})
