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
