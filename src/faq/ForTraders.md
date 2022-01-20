# FAQ for traders

## What exchanges support Coliquidity?

All decentralized exchanges that use liquidity pools can also use Coliquidity. For example:

- Uniswap
- SushiSwap
- PancakeSwap
- TraderJoe
- … many more

## Who pays for gas?

The user who called the Coliquidity smart contract pays for gas.

If the call results in opening a new pool, the user pays for opening a new pool as well. We recommend that projects make this call from their account, so that regular traders don’t have to pay for opening the pool.

We also have plans to integrate Coliquidity with the [Ethereum Gas Station Network](https://docs.opengsn.org/). As soon as this integration is implemented, the users won’t need to pay for gas anymore.

## Is liquidity mining possible with Coliquidity?

Yes, simply provide liquidity using the Coliquidity smart contract.

## How will you open a liquidity pool on PancakeSwap?

We will use Coliquidity to open the SHLD-WBNB pool on PancakeSwap. The specific plan will be announced closer to launch date. However, we can share some details already:

- The price will be lower than on SHLD-WETH pool (to incentivize traders to buy immediately on launch).
- The Coliquidity pool will have a hard cap (to incentivize providers to deposit earlier to secure their allocation).

## Can I short tokens with Coliquidity?

Yes, you can short the tokens that you own. Please note that when you close the short, you will receive a lot of tokens that you’ve shorted. This happens because closing the short means withdrawing liquidity, and you receive the same token when you withdraw from the pool.

To maximize profit, you should short the tokens that are going down right now, but will be going up in future (according to your analysis).
