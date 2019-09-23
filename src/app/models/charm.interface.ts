import { Node } from 'vis'
import { Minima } from './minima.interface'

export class Charm implements Node {
  id: string
  image?: string
  label: string
  level: number
  minima: Minima
  shape = 'image'

  constructor(id: string, minima: Minima, label: string, level: number) {
    this.id = id
    this.label = label
    this.level = level
    this.minima = minima
  }
}
