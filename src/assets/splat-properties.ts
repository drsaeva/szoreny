interface Splat {
  name: string;
  casteList?: string[];
  styleList?: string[];
  sigCharms?: boolean;
  abilities?: boolean;
  attributes?: boolean;
  isSMA?: boolean;
}

class SplatProperties {

  readonly sol: Splat = {
    name: 'Solar',
    casteList: ['Dawn', 'Zenith', 'Twilight', 'Night', 'Eclipse'],
    abilities: true,
    attributes: false,
    sigCharms: false
  }

  readonly db: Splat = {
    name: 'Dragon-Blooded',
    casteList: ['Air', 'Earth', 'Fire', 'Water', 'Wood'],
    abilities: true,
    attributes: false,
    sigCharms: true
  }

  // private lun: Splat;
  // private sid: Splat;
  // private gen: Splat;
  // private exi: Splat;

  readonly ma: Splat = {
    name: 'Martial Arts',
    styleList: ['Snake', 'Tiger'],
    isSMA: false
  }

  readonly splatList: Splat[] = [this.sol, this.db];

}

export const Splats = new SplatProperties();
