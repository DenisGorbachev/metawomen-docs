# Risks

## What are the risks?

- [Impermanent loss risk](#who-is-bearing-impermanent-loss-risk)
- Minimal [for stablecoin pools](how-it-works.md#for-existing-stablecoin-pools).
- Equivalent to long position [for non-stablecoin pools](how-it-works.md#for-existing-non-stablecoin-pools).
- Smart contract hack risk
- Will be minimized with audits (we have partnered with Zokyo).
- Time-value risk (you need to deposit tokens & wait for somebody to take the other side of your coliquidity position):
- Will be minimized with high volume & high user count of the Coliquidity platform.

## What are the non-risks?

- No smart contract ownership risk
- Coliquidity contract owner can only change the fee, can’t change balances.
- No upgradeable proxy risk:
- Coliquidity contracts are deployed without an upgradeable proxy.
- There will be a version with an upgradeable proxy used during beta testing.
- No stuck funds risk:
- You can always withdraw your tokens if nobody takes the other side of your coliquidity position.

## Why Coliquidity is less risky than providing liquidity?

**Short version**

- Because you don’t need to buy the second token.

**Long version**

- Suppose you provide liquidity directly. You make money if the price is stable. You lose money if the price goes down, and you lose twice, because both sides of your position are worth less (base token is worth less because the price is down + quote token is worth less because its quantity has decreased due to selling).
- Suppose you provide one-sided liquidity via Coliquidity. You make money if the price is stable, because Coliquidity gives you the same LP fees (proportional to your liquidity amount). You lose money if the price goes down, but you lose less than with regular liquidity provisioning, because only the quote token quantity is decreased (you don’t hold the base token, so it doesn’t influence your PnL).
- Coliquidity makes your position behave differently from regular liquidity provider position. You make money if the price goes up (but not as much as with a long position). You lose money if the price goes down (but not as much as with a long position). Essentially, it’s an under-leveraged long position (if you provide the quote token) or an under-leveraged short position (if you provide the base token).

**Simulations**

- [Coliquidity Simulations](https://docs.google.com/spreadsheets/d/1IL5mPngi4a0mJvuTeiMpebVobhgyK8yAOEfxaMBkBvo/edit#)
  (see scenarios with “High volatility” = FALSE, they are essentially stablecoin pools)

## Who is bearing impermanent loss risk?

If one provider takes a loss, the other provider makes a profit. This happens because providers withdraw the same type of tokens that they deposited. So, if Alice deposits ABC, Bob deposits USDT, then ABC-USDT price goes up, there will be less ABC and more USDT in the pool, so Alice will take a loss, and Bob will make a profit. It works the other way, too: if the ABC-USDT price goes down, there will be more ABC and less USDT in the pool, so Alice will make a profit, and Bob will take a loss.

The risk is symmetric:

- If the price goes up, Alice loses and Bob wins
- If the price goes down, Alice wins and Bob loses

It works a bit like a perpetual swap, but the traders don’t pay trading fees - instead, they receive liquidity provider fees (both of them).
