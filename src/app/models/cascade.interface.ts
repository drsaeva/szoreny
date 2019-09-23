import { Data, Edge, Node } from 'vis'

import { AbilityEnum } from './ability.enum'
import { AttributeEnum } from './attribute.enum'
import { Charm } from './charm.interface'
import { SplatEnum } from './splat.enum'
import { StyleEnum } from './style.enum'

export interface Cascade extends Data {
  nodes: Charm[] | Node[]
  edges: Edge[]
  trait: AbilityEnum | AttributeEnum | StyleEnum
  splat: SplatEnum
  isSMA?: boolean
}
