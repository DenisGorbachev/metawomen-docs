import { z } from 'zod'
import { getDuplicatesRefinement } from '../util/src/zod.js'
import { MaxPotential } from '../constants.js'

const attribute = () => z.number().int().min(0)

export const NFTSchema = z.object({
  id: z.number().int().min(0),
  level: attribute().default(1),
  experience: attribute().default(0),
  potential: attribute().max(MaxPotential).default(MaxPotential),
  fatigue: attribute().default(0),
  power: attribute().default(1),
  regeneration: attribute().default(1),
  endurance: attribute().default(1),
  luck: attribute().default(1),
  childLevel: attribute().default(1),
}).describe('NFT')

export const NFTsSchema = z.array(NFTSchema)
  .superRefine(getDuplicatesRefinement('NFT', parseNFTUid))

export const NFTUidSchema = NFTSchema.pick({
  id: true,
})

export type NFT = z.infer<typeof NFTSchema>

export type NFTUid = z.infer<typeof NFTUidSchema>

export function parseNFT(nft: NFT): NFT {
  return NFTSchema.parse(nft)
}

export function parseNFTs(nfts: NFT[]): NFT[] {
  return NFTsSchema.parse(nfts)
}

export function parseNFTUid(nftUid: NFTUid): NFTUid {
  return NFTUidSchema.parse(nftUid)
}
