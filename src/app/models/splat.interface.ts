import { DbAspectEnum, LunarCasteEnum, SolarCasteEnum } from './caste.enum'
import { SplatEnum } from './splat.enum'
import { StyleEnum } from './style.enum'

export interface Splat {
  name: SplatEnum
  typeList: DbAspectEnum[] | LunarCasteEnum[] | SolarCasteEnum[] | StyleEnum[]
  cascadeMap: Map<string, string>
}
