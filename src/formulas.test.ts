import { test } from '@jest/globals'
import { getMinExperienceForUpgrade, getMinTokenAmountForUpgrade } from './formulas'
import { expect } from './util/src/chai'

test(getMinExperienceForUpgrade.name, () => {
  expect(getMinExperienceForUpgrade(1)).to.equal(0)
})

test(getMinTokenAmountForUpgrade.name, () => {
  expect(getMinTokenAmountForUpgrade(1)).to.equal(0)
})
