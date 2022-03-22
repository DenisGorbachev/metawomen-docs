# Coliquidity Learn-To-Earn Game

You can win $250 BUSD in 5 minutes once a week in the Coliquidity game. The game is based on a Learn-To-Earn concept: you need to answer questions about [Coliquidity](../WhatIsColiquidity.md) (our product).

## How to win

The round starts every Thursday at 07:00 UTC. The round lasts for 24 hours. During the round, you need to answer 1 question about [Coliquidity](../WhatIsColiquidity.md).

**Important:** [Join our channel](https://t.me/ColiquidityAnnouncements) to get notified when the new round starts (every week). Please enable the notifications for our channel (long tap the channel -> "Enable notifications").

See also: [How is the winning probability calculated?](#how-is-the-winning-probability-calculated)

## Full instruction

1. Receive a notification when the new round starts from [our channel](https://t.me/ColiquidityAnnouncements).
2. Open the game page.
3. Read a small text about Coliquidity.
4. Answer 1 question (find the answer in the text).
5. Provide your public address for the reward.

We will send the reward directly to the winner's address & announce it on our social media channels.

## Frequently Asked Questions

### How is the winning probability calculated?

Your winning probability depends on how much money you have on your address. Higher balance = higher chance of winning. If you have multiple addresses, you can submit them all at once.

The COLI holders have an advantage, since the [COLI token](../COLI/FAQ.md) comes with a 5x multiplier. However, you don't need to hold COLI to win, because ETH, BNB, USDT, USDC, BUSD, DAI have a 1x multiplier.

Your balance is calculated as the USD equivalent of the tokens on your addresses. [Click here to see the formulas](#formulas).

### Why did you design it this way?

This system is designed to stop the bots - otherwise they would join the game with zero balances.

You **don't need** to bet your money. You just need to answer questions about our product. The capital calculation is automatic, it's only used to determine your chance of winning.

### How do I prove that I own the address?

To prove that you own the address, you'll need to sign a message. It's fast & free (no transaction fee). This is necessary to stop the malicious actors from submitting the addresses that they don't own.

### How is it related to Rewards Program?

The Learn-To-Earn Game is a "smaller cousin" of [The Rewards Program](../Rewards/Summary.md). The game is easier to start with, because you don't need to hold the COLI token. However, the game prize is a fixed amount, whereas in the Rewards Program payout is 1% weekly (scales up with your deposit).

|                     | Rewards Program           | Learn-To-Earn Game    |
|---------------------|---------------------------|-----------------------|
| Need to hold COLI?  | Yes                       | No                    |
| Prize scalability   | 1% weekly of your deposit | Fixed amount          |
| How many questions? | 3-5                       | 1                     |

### Formulas

#### Constants

* Round duration: 24 hours
* Round start: every Thursday at 07:00 UTC
* Prize amount:
  * First round: $250
  * Next rounds: TBD
* Prize currency: BUSD

#### Winning Probability

Winning Probability = [Your Capital](#your-capital) / [Total Capital](#total-capital)

#### Your Capital

Your Capital = Sum of [Capital on each of your Addresses](#capital-on-address)

#### Total Capital

Total Capital = Sum of [Capital on all participating Addresses](#capital-on-address)

#### Capital On Address

Capital On Address = Sum of [USD Equivalents](#usd-equivalent) of [Assets](#assets) on Address

#### USD Equivalent

USD Equivalent = [Multiplier](#multiplier) × Amount × Price in USD at the start of the round

#### Assets

Supported assets: [COLI](../COLI/FAQ.md), ETH, BNB, WETH, WBNB, USDT, USDC, BUSD, DAI

We're open to adding more assets in the future.

#### Blockchains

Supported blockchains: Ethereum, Binance Smart Chain

#### Multiplier

Multiplier = 5 for COLI, 1 for others.

COLI holders have an advantage in the game. However, it is not a hard requirement to hold COLI - it's possible to win even without it. The game is designed to maximize participation, so that more people learn about Coliquidity and our upcoming [Rewards Program](../Rewards/Summary.md).
