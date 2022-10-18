import { CurrencyAmount, JSBI } from '@danielvindax/metaviral-sdk'
import { maxAmountSpend } from './maxAmountSpend'

describe('maxAmountSpend', () => {
  it('should be undefined if no input', () => {
    expect(maxAmountSpend()).toBeUndefined()
  })

  it('should has value when CurrencyAmount is MTV and CurrencyAmount is higher than min mtv', () => {
    expect(
      JSBI.greaterThan(
        maxAmountSpend(CurrencyAmount.ether(JSBI.exponentiate(JSBI.BigInt(100), JSBI.BigInt(16)))).raw,
        JSBI.BigInt(0),
      ),
    ).toBeTruthy()
  })

  it('should be 0 when CurrencyAmount is MTV and CurrencyAmount is low', () => {
    expect(JSBI.equal(maxAmountSpend(CurrencyAmount.ether('0')).raw, JSBI.BigInt(0))).toBeTruthy()
  })
})
