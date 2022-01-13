# Coliquidity

## Frequently Asked Questions

# Quick links

**[For project owners](#why-should-i-use-coliquidity-as-a-project-owner)** | **[For yield farmers](#why-should-i-use-coliquidity-as-a-yield-farmer)** | **[For long-term investors](#why-should-i-use-coliquidity-as-a-long-term-investor)**

**[How it works](#how-does-it-work)** | **[Pricing](#how-much-does-it-cost)** | **[Risks](#what-are-the-risks?)** | **[Non-Risks](#what-are-the-non-risks?)** | **[Try on Testnet](#can-i-try-coliquidity-on-testnet?)**

# What is Coliquidity?

Coliquidity is **a new way to trade crypto**:

- More profitable than buying tokens ([proof](#why-coliquidity-is-more-profitable-than-buying-tokens?)).
- Less risky than providing liquidity ([proof](#why-coliquidity-is-less-risky-than-providing-liquidity?)).

Normally you need to deposit two tokens into the liquidity pool to earn liquidity provider fees. However, Coliquidity allows you to deposit **only one token**. You don’t need to buy the other token at all. Coliquidity will match your deposit with someone else’s deposit for another token.

Benefits:

- You get liquidity provider fees
- You get liquidity mining bonuses
- You don’t pay the trading fees (you earn them instead)
- You don’t lose on slippage.

Drawbacks:

- You may need to wait for a matching deposit.

Technical description: Coliquidity is a smart contract that combines 2 tokens from 2 providers to create a new pool or deposit into an existing pool on Uniswap / PancakeSwap / any exchange.

# What’s the best way to make money with Coliquidity?

Coliquidity is better suited for long-term holding. You can make more money this way, because you will accumulate more LP fees. Meanwhile, if the token continues to go up, you’ll also capitalize on the uptrend.

Coliquidity profit = Trend profit + LP fees profit.

Since “LP fees profit” is always positive, it is always better to use Coliquidity than simply buying and holding without providing liquidity.

# Why should I use Coliquidity?

Please choose the section:

- [For project owners](#what-s-the-best-way-to-make-money-with-coliquidity?)
- [For yield farmers](#why-should-i-use-coliquidity-as-a-yield-farmer?)
- [For long-term investors](#why-should-i-use-coliquidity-as-a-long-term-investor?)

# Why should I use Coliquidity as a project owner?

As a project owner, you can create the pool without providing ETH - just provide the tokens and allow community members to provide ETH (works with BNB / MATIC / AVAX, too):

- **Save your capital** - don’t use it to create the pool, allow other people to add liquidity.
- **Get more liquidity** - simplify the process of adding liquidity into your pool after creation.
  Drawbacks:
- Community members can remove liquidity in future. Solutions:
- Lock liquidity by setting a date until which they can’t withdraw.
- Incentivize holding liquidity through a [liquidity mining program](#for-existing-non-stablecoin-pools).
  Learn more: [Coliquidity for new pools](#for-new-pools) | [How much does it cost?](#how-much-does-it-cost?)

# Why should I use Coliquidity as a yield farmer?

As a yield farmer, you can provide ETH without buying the tokens:

- **Save money** - don’t buy the 2nd asset, save on slippage & trading fees.
- **Minimize risk** - Avoid holding 2 assets at the same time.
  Drawbacks:
- Some projects may not have a Coliquidity pool. Solution:
- Use a combined strategy: if there’s a Coliquidity pool, provide only one token, if not, provide both tokens.
  Learn more: [Coliquidity for existing stablecoin pools](#for-existing-stablecoin-pools) | [How much does it cost?](#how-much-does-it-cost?)

# Why should I use Coliquidity as a long-term investor?

As a long-term investor, you can accumulate a large long position without slippage & fees.

- **Save money** - build a gigalong without slippage & trading fees (the project provides the tokens, you provide the ETH, smart contract puts your liquidity together into the pool).
- **Maximize profit** - receive liquidity provider fees while holding a gigalong position.
  Drawbacks:
- Short-term profit is lower. However:
- Short-term loss is lower (same risk-reward ratio).
- Long-term profit is higher: LP fees are always positive (**better** risk-reward ratio with additional fees).
  Learn more: [Coliquidity for existing non-stablecoin pools](#for-existing-non-stablecoin-pools) | [How much does it cost?](#how-much-does-it-cost?)

# How does it work?

- [For new pools](#for-new-pools)
- [For existing stablecoin pools](#for-existing-stablecoin-pools)
- [For existing non-stablecoin pools](#for-existing-non-stablecoin-pools)

## For new pools

- The project deposits ABC tokens into the Coliquidity smart contract.
- The investors deposit WETH tokens into the Coliquidity smart contract.
- When there is enough WETH liquidity, the project triggers the creation of a new pool though Coliquidity contract.
- The Coliquidity contract deploys a new ABC-WETH pool using combined liquidity from the project & the investors.

## For existing stablecoin pools

- Alice & Bob decide to put their stablecoins into the DAI-USDT pool to earn LP fees.
- Alice deposits DAI tokens into the Coliquidity smart contract.
- Bob deposits USDT tokens into the Coliquidity smart contract.
- The Coliquidity contract combines DAI + USDT and puts them into the DAI-USDT pool.
- When either Alice or Bob requests a withdrawal, Alice gets her DAI deposit + DAI fees, Bob gets his USDT deposit + USDT fees.
- If DAI-USDT price doesn’t change: both Alice & Bob earn the fees.
- If DAI-USDT price does change: this scenario is equivalent to “[For existing non-stablecoin pools](#for-existing-non-stablecoin-pools)”

See also:

- [What if a single provider requests a withdrawal?](#what-if-a-single-provider-requests-a-withdrawal?)

## For existing non-stablecoin pools

- Alice deposits ABC tokens into the Coliquidity smart contract.
- Bob deposits WETH tokens into the Coliquidity smart contract.
- The Coliquidity contract combines ABC + WETH and puts them into the ABC-WETH pool.
- When either Alice or Bob requests a withdrawal, Alice gets her ABC deposit + ABC fees, Bob gets his WETH deposit + WETH fees.
- If ABC-WETH price doesn’t change: both Alice & Bob earn the fees.
- If ABC-WETH price goes up: there will be less ABC and more WETH in the pool, so Alice will get less ABC + ABC fees, Bob will get more WETH + WETH fees. It works like a long position for Bob.
- If ABC-WETH price goes down: there will be more ABC and less WETH in the pool, so Alice will get more ABC + ABC fees, Bob will get less WETH + WETH fees. It works like a short position for Alice (e.g. she believed ABC would crash short-term but recover long-term, so she put her ABC in the pool to make more ABC short-term).

# What are the risks?

- [Impermanent loss risk](#who-is-bearing-impermanent-loss-risk?)
- Minimal [for stablecoin pools](#for-existing-non-stablecoin-pools).
- Equivalent to long position [for non-stablecoin pools](#for-existing-stablecoin-pools).
- Smart contract hack risk
- Will be minimized with audits (we have partnered with Zokyo).
- Time-value risk (you need to deposit tokens & wait for somebody to take the other side of your coliquidity position):
- Will be minimized with high volume & high user count of the Coliquidity platform.

# What are the non-risks?

- No smart contract ownership risk
- Coliquidity contract owner can only change the fee, can’t change balances.
- No upgradeable proxy risk:
- Coliquidity contracts are deployed without an upgradeable proxy.
- There will be a version with an upgradeable proxy used during beta testing.
- No stuck funds risk:
- You can always withdraw your tokens if nobody takes the other side of your coliquidity position.

# Can you show by example how to make money using Coliquidity?

### Specific example for $TAUR token

Short version:

1. Deposit BUSD.
2. Wait until TAUR goes up.
3. Withdraw more BUSD (trend profit + liquidity provider fees)

Detailed instruction:

1. Open deposit page for $TAUR token: [click here](https://app.shieldfinance.io/coliquidity/deposit?preset=MarnotaurMainnet).
2. Input “Amount to deposit” (how much BUSD you want to provide).
3. Click “Deposit”.
4. Confirm transactions.
5. Wait until $TAUR goes up.
6. Open withdraw page for $TAUR token: [click here](https://app.shieldfinance.io/coliquidity/withdraw?preset=MarnotaurMainnet).
7. Find your position.
8. Click “Withdraw”.
9. Confirm transactions.
10. Celebrate! You have withdrawn **more BUSD** than you deposited.

### General example for any token

1. Find a token that is going up.
2. Ensure that this token has already been deposited into the Coliquidity smart contract by the project team.
3. If not: you can ask the project team to do it (send them a link to this FAQ).
4. Open the Coliquidity app using the link provided by the project team (should contain the preset for their token).
5. Fill the form to deposit liquidity.
6. Wait until the token goes up.
7. Open the Coliquidity app to withdraw liquidity.
8. Fill the form to withdraw liquidity.
9. Celebrate! You have withdrawn **more money** than you deposited.

# Can I try Coliquidity on testnet?

Yes, you can try it on the following networks:

- [Try on Ethereum Ropsten](https://ropsten.etherscan.io/address/0x1aD607f7eED0185a6fbE397f40774Cf2c9C1f5B3#writeContract)
- [Try on Binance Smart Chain Testnet](https://testnet.bscscan.com/address/0x5740dCDB74A6BD1e5064Ad06226FFdCd13e05649#writeContract)

Click “Contract > Write contract” to see the list of available methods:

- Use “createOffer” if you want to deposit initial liquidity.
- Use “createPosition” if you want to match your liquidity with an existing offer & put the combined liquidity into the pool.
- Use “withdrawPosition” if you want to redeem your LP tokens & withdraw liquidity from the pool.
- Use “withdrawOffer” if you want to withdraw initial liquidity. Please note that if someone has already created a position using your initial liquidity, you will need to call “withrawPosition” first (for every open position). You can see all your positions with “positionsByMaker” call (see below).

Click “Contract > Read contract” to see the list of available calls:

- Use “offersByMaker” to see your offers
- Use “positionsByMaker” to see your positions in which you are the maker (offer creator)
- Use “positionsByMaker” to see your positions in which you are the taker (position creator)

# When can I withdraw?

- Regular positions: you can withdraw anytime.
- Timelocked positions: you can withdraw as soon as the lock period finishes.

The timelocked positions are created by accepting timelocked offers. The app will clearly mark such offers & show the lock period, so that you can decide if you want to accept it. Normally, timelocked offers come with additional benefits (for example, extra project tokens).

# Why Coliquidity is more profitable than buying tokens?

**Short version**

- Because you earn LP fees.
- Because you have no slippage on entry / exit (perfect for whales).

**Long version**

- Suppose you buy & sell the token directly. You lose on LP fees & slippage two times (both when buying & when selling). Your profit depends on the price change, minus LP fees, minus slippage.
- Suppose you provide [one-sided](#how-does-it-works?) liquidity via Coliquidity. You earn LP fees, you have no slippage. Your profit is a function of the price difference plus gains on fees.
- Coliquidity makes your position less sensitive to price difference. That means you lose less & gain less compared to a regular long position. However, Coliquidity gives you LP fees. Therefore, Coliquidity gives you a better risk/reward profile (because price sensitivity is decreased symmetrically, but the fees are always a plus)

**Simulations**

- (WARN_UNRECOGNIZED_ELEMENT: RICH_LINK)
  (see scenarios with “High volatility” = TRUE)

  **Note**
  Coliquidity works best for long-term positions (it accumulates more LP fees). For very short-term positions, it’s better to simply buy & sell tokens. One exception is high-volume high-volatility markets - in these it’s more profitable to use Coliquidity even for short-term positions.

# Why Coliquidity is less risky than providing liquidity?

**Short version**

- Because you don’t need to buy the second token.

**Long version**

- Suppose you provide liquidity directly. You make money if the price is stable. You lose money if the price goes down, and you lose twice, because both sides of your position are worth less (base token is worth less because the price is down + quote token is worth less because its quantity has decreased due to selling).
- Suppose you provide one-sided liquidity via Coliquidity. You make money if the price is stable, because Coliquidity gives you the same LP fees (proportional to your liquidity amount). You lose money if the price goes down, but you lose less than with regular liquidity provisioning, because only the quote token quantity is decreased (you don’t hold the base token, so it doesn’t influence your PnL).
- Coliquidity makes your position behave differently from regular liquidity provider position. You make money if the price goes up (but not as much as with a long position). You lose money if the price goes down (but not as much as with a long position). Essentially, it’s an under-leveraged long position (if you provide the quote token) or an under-leveraged short position (if you provide the base token).

**Simulations**

- (WARN_UNRECOGNIZED_ELEMENT: RICH_LINK)
  (see scenarios with “High volatility” = FALSE, they are essentially stablecoin pools)

# Who is bearing impermanent loss risk?

If one provider takes a loss, the other provider makes a profit. This happens because providers withdraw the same type of tokens that they deposited. So, if Alice deposits ABC, Bob deposits USDT, then ABC-USDT price goes up, there will be less ABC and more USDT in the pool, so Alice will take a loss, and Bob will make a profit. It works the other way, too: if the ABC-USDT price goes down, there will be more ABC and less USDT in the pool, so Alice will make a profit, and Bob will take a loss.

The risk is symmetric:

- If the price goes up, Alice loses and Bob wins
- If the price goes down, Alice wins and Bob loses

It works a bit like a perpetual swap, but the traders don’t pay trading fees - instead, they receive liquidity provider fees (both of them).

# I run the ABC project. Should I provide ABC tokens into the Coliquidity contract?

Yes, if you want to get more liquidity.

More liquidity → Less slippage → More traders → Higher volume.

# How much will I receive if I withdraw now?

WithdrawalAmount = PoolLiquidity \* PoolShare

Short example:

- The pool has 1000000 ABC + 200 ETH.
- Your pool share is 2.5%.
- Your withdrawal amount is 5 ETH.

We’re working on a UI update where you will be able to see the withdrawal amount automatically (no manual calculations).

# What if a single provider requests a withdrawal?

The smart contract will check **the timelock** of the coliquidity position:

- If the timelock hasn’t expired yet, the smart contract will deny withdrawal.
- If the timelock has expired, the smart contract will withdraw the requested part of the position:
- Send token 1 to the provider of token 1.
- Send token 2 to the provider of token 2.

**Notes:**

- The provider can set the timelock to zero (= no timelock) when creating an offer for coliquidity position.
- The provider can change the default action from “send the token” to “leave the token in the Coliquidity contract” by setting “reinvest” option to “true”. This is recommended for providers who want to invest for long term.
- Both providers will receive tokens at the same time, even if only a single provider requests a withdrawal. This implementation prevents a deadlock, which could happen if both provider votes were required and one of the providers would become unavailable.

# Is Coliquidity the same as Uniswap V3?

No, it’s a different concept.

- Coliquidity allows to provide one-sided liquidity **at the current price**.
- Uniswap allows to provide one-sided liquidity **strictly above or strictly below** the current price.

With Coliquidity, you’re making money immediately & always. With Uniswap, you’re making money only when the price is within your liquidity range (not immediately, not always).

Proof: [Uniswap docs](https://help.uniswap.org/en/articles/5406286-faq-provide-liquidity-on-uniswap-v3) (search for “single-sided liquidity”).

# Does Coliquidity work in a bear market?

Yes, you can make money using Coliquidity in a bear market. For example:

- You’re bullish on ETH long-term.
- You’re bearish on ETH short-term.
- You provide ETH into the ETH-USDT pool.
- ETH-USDT price goes down (bear market).
- There is more ETH in the pool / less USDT in the pool.
- You take out more ETH, because your pool share stays the same (always, no matter whether it’s bull or bear market).

# What pairs support Coliquidity?

Any pair with a liquidity pool supports Coliquidity.

We will build an application where the users could provide coliquidity for a single side of the position, see the offers of other users & provide the second side of the mutual coliquidity position.

# What exchanges support Coliquidity?

All decentralized exchanges that use liquidity pools can also use Coliquidity. For example:

- Uniswap
- SushiSwap
- PancakeSwap
- TraderJoe
- … many more

# What blockchains support Coliquidity?

Any EVM-compatible blockchain supports Coliquidity. For example:

- Ethereum - ETH
- Binance Smart Chain - BSC
- Polygon - MATIC
- Avalanche - AVAX
- Reef Chain - REEF
- Fantom - FTM
- … many more

We have plans to port Coliquidity to blockchains with other VM implementations (e.g. Solana).

# Who pays for gas?

The user who called the Coliquidity smart contract pays for gas.

If the call results in opening a new pool, the user pays for opening a new pool as well. We recommend that projects make this call from their account, so that regular traders don’t have to pay for opening the pool.

We also have plans to integrate Coliquidity with the [Ethereum Gas Station Network](https://docs.opengsn.org/). As soon as this integration is implemented, the users won’t need to pay for gas anymore.

# What is 1-Click Liquidity?

1-Click Liquidity is a widget for providing liquidity into your pool.

Most users don’t provide liquidity because it’s too hard: they have to calculate how much of your token they should buy to provide liquidity at correct ratio. It takes mental effort, and it takes time. So most users just skip this opportunity, leaving your pool with low liquidity.

1-Click Liquidity is a solution for this problem. It allows the users to provide liquidity into your existing pool in a **single click**. Technically, it is a widget for your project website. The widget has a form with “Amount” field & submit button. The “Amount” field is prefilled with desired amount of liquidity. To provide liquidity, the user simply needs to submit the form (make 1 click).

All without leaving your project website.

Interested to learn more? Schedule a call with us (if you have a direct contact), or send a message to our general [Telegram group](https://t.me/ShieldFinanceHQ).

# How to prepare for a token launch?

_Note: this is a temporary instruction for project owners. We are currently developing a user interface that would automate most of these steps._

1. Choose how much liquidity you want to see in the pool:
1. We recommend to choose the token amount equivalent to $150000 - $200000.
1. Approve liquidity amount for depositing into Coliquidity smart contract:
1. Open your token contract on blockchain explorer
1. Click “Contract”
1. Click “Write contract”
1. Find “approve” function
1. Fill approve function form:
1. Address: [Coliquidity address - see below]
1. Open [Coliquidity Info](https://app.shieldfinance.io/coliquidity/info)
1. Find the address for your network
1. Copy the address
1. Amount: [Amount of tokens multiplied by 10 in power of [decimals]]
1. **Important: the amount must be multiplied by 10 ^ [your token decimals], otherwise you will approve an insufficient amount.**
1. Click “Write”
1. Confirm transaction
1. Wait until transaction is confirmed
1. Deposit liquidity into Coliquidity smart contract:
1. Open Coliquidity

## Example for $TAUR-$BUSD mainnet pool

1. Approve on [TAUR contract page](https://www.bscscan.com/token/0x19b99162adaab85134e781ac0048c275c31b205a#writeContract):
1. method:
1. address: 0xcd9dc4C48DDC0e578bd2C42254841f0223b88a3F
1. amount: 120000 TAUR \* 10 ^ 18 decimals = 120000000000000000000000
1. Create offer on [Coliquidity contract page](https://bscscan.com/address/0xcd9dc4C48DDC0e578bd2C42254841f0223b88a3F#writeContract):
1. makerToken: 0x19b99162adaab85134e781ac0048c275c31b205a
1. makerAmount: 120000 TAUR \* 10 ^ 18 decimals = 120000000000000000000000
1. taker: 0x0000000000000000000000000000000000000000
1. takerTokens: [0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56]
1. makerDenominator: 0
1. takerDenominator: 0
1. reinvest: true
1. pausedUntil: 0
1. lockedUntil: 0

# Does Coliquidity protect from a rugpull?

Yes - if the project sets Offer.lockedUntil parameter to a specific timestamp in future. No rugpull is possible until Offer.lockedUntil is passed.

Here’s a more technical explanation. Coliquidity provides a special parameter: “Offer.lockedUntil” ([see contract](https://github.com/ShieldFinanceHQ/contracts/blob/dev/contracts/Coliquidity.sol)). This parameter is checked when the “withdrawPosition” method is called: if the current timestamp is less than Offer.lockedUntil, the withdrawal is denied. Therefore, it is not possible to withdraw liquidity (do a rugpull) before the current timestamp passes Offer.lockedUntil.

Please note that Offer.lockedUntil can be set to 0, which allows withdrawals anytime.

# Is liquidity mining possible with Coliquidity?

Yes, please see details below:

- For users: simply provide liquidity using the Coliquidity smart contract.
- For projects: Please note that LP tokens do not show up in the users’ wallets - they are locked in the Coliquidity contract. That means you need to adjust the reward calculation algorithm to make a call to fetch the LP token balance from the Coliquidity contract. Otherwise, you can run the same liquidity mining program as you planned.

# Can I short tokens with Coliquidity?

Yes, you can short the tokens that you own. Please note that when you close the short, you will receive a lot of tokens that you’ve shorted. This happens because closing the short means withdrawing liquidity, and you receive the same token when you withdraw from the pool.

To maximize profit, you should short the tokens that are going down right now, but will be going up in future (according to your analysis).

# Can I migrate my existing liquidity to Coliquidity?

- If you plan to provide liquidity with only one token: yes, you can migrate liquidity manually using the following steps (we’ll automate this in our app soon):
- Withdraw liquidity from the pool.
- (Optional) Consolidate position: swap one token for another to double the size of your liquidity position.
- Deposit liquidity into the Coliquidity contract.
- If you plan to provide liquidity with both tokens: no need to migrate. However, please consider that one of the tokens may go down in value relative to another token. With Coliquidity, you can prevent such loss by converting the full position into this token and providing liquidity using only this token.

# Is Coliquidity related to Market Crash Protection?

Coliquidity and Market Crash Protection are two different products. We intend to develop them separately, see which one generates more revenue & focus on that one (choose the most successful product).

# Is Coliquidity similar to Uniswap?

Coliquidity works with existing decentralized exchanges - it doesn’t replace them. So the answer has two parts:

- Yes, you can use Coliquidity to provide liquidity into the pools on Uniswap / SushiSwap / PancakeSwap / other exchanges.
- No, you can’t use Coliquidity to buy & sell tokens (you can just use existing exchanges).

Additionally, Coliquidity is similar to Uniswap because it’s also a marketplace ([read more](#is-coliquidity-a-marketplace?)).

See also: [Is Coliquidity the same as Uniswap V3?](#is-coliquidity-the-same-as-uniswap-v3?)

# Is Coliquidity a marketplace?

Yes, Coliquidity matches the liquidity providers who have different tokens & want to deposit into the same pool together. For example:

- Alice has USDT.
- Bob has ETH.
- Alice & Bob want to provide liquidity into ETH-USDT pool.
- Coliquidity will match them (accept Alice’s USDT and Bob’s ETH, then put it together into the pool).

Being a marketplace is **a competitive advantage**. People start trading where others are already trading. So if we get a core user base, it will grow naturally, and people will be wary of using competitors (who are not original implementers of the idea).

We will get the core user base by executing our [marketing plan](#what-is-your-marketing-plan?) for Coliquidity.

# What is your marketing plan?

- Launch [Moonshot](https://docs.google.com/document/d/1kzOJbNYqf1kqeMbNsRVADGGh8zwNwMHvSbz0ZngdAOg/edit#) to demonstrate the benefits of Coliquidity to other projects.
- Ask other projects to tell their followers that they can use Coliquidity to provide liquidity in the project's pool:
- Our current partners.
- New projects who need to create a new liquidity pool.
- Ask influencers to tell their followers that they can use Coliquidity to make more money in long-term positions.
- Our private investors-influencers.
- New influencers who are already supporting us.
- New influencers who don’t know about us yet.
- Ask our marketing partners to spread the information about Coliquidity via word-of-mouth in Telegram groups & Twitter comments.

# Do you have competitors?

As of 08 Jan 2022, we have not heard of any projects with the same idea.

# How will you open a liquidity pool on PancakeSwap?

We will use Coliquidity to open the SHLD-WBNB pool on PancakeSwap. The specific plan will be announced closer to launch date. However, we can share some details already:

- The price will be lower than on SHLD-WETH pool (to incentivize traders to buy immediately on launch).
- The Coliquidity pool will have a hard cap (to incentivize providers to deposit earlier to secure their allocation).

# How much does it cost?

- The smart contract charges 1% of the user’s profit.
- No charge if no profit.
- No charge if you deposit and withdraw the same amount.
- The fee is calculated as “0.01 \* (WithdrawAmount - DepositAmount)”.
- The fee is calculated separately for each participant of coliquidity position.
- The fee is charged upon withdrawal.

See also:

- [What is Coliquidity](#what-is-coliquidity?)

# What is the project status?

Updated on Nov 08, 2021:

- Done: [Smart contract](https://github.com/ShieldFinanceHQ/contracts/blob/dev/contracts/Coliquidity.sol#L95) + [automated tests](https://github.com/ShieldFinanceHQ/contracts/blob/dev/test/contracts/Coliquidity.test.ts) (security audit pending)
- Done: [User interface prototype](https://coliquidity.glideapp.io/)
- Done: [User Interface app](https://app.shieldfinance.io/coliquidity/deposit)
- Done: [Used Coliquidity during $TAUR token launch](https://medium.com/marnotaur/add-your-one-sided-liquidity-to-taur-busd-pool-36314059e546)
- Working now: get more partners to launch their tokens using Coliquidity.

# Do you already have users?

Yes, we already have users on Binance Smart Chain Mainnet (people who deposited during the [Marnotaur token launch](https://medium.com/marnotaur/add-your-one-sided-liquidity-to-taur-busd-pool-36314059e546)).

# What is Coliquidity launch date?

The Coliquidity launch is split into two phases:

- [Done] Soft launch: Coliquidity will be used to launch the tokens of partner projects:
- Already launched the [Marnotaur](https://marnotaur.com/en) token.
- Accepting proposals from new partners to launch their tokens.
- Full launch: Coliquidity will become available for the general public.

The full launch date will be announced on our social media channels - please follow us on [Telegram](https://t.me/ShieldFinanceHQ) & [Twitter](https://twitter.com/ShieldFinance) to get notified earlier.
