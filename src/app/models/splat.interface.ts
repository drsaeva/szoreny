import { SplatEnum } from './splat.enum'
import { DbAspectEnum, LunarCasteEnum, SolarCasteEnum } from './caste.enum'
import { StyleEnum } from './style.enum'

export interface Splat {
  name: SplatEnum
  typeList: DbAspectEnum[] | LunarCasteEnum[] | SolarCasteEnum[] | StyleEnum[]
  sigCharms?: boolean
  abilities?: boolean
  attributes?: boolean
  isSMA?: boolean
}
