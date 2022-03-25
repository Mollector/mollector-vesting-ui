export interface CHAINID_MAPPING {
  [key: string | number]: string
}

export interface TOKEN_MAPPING {
  [key: string | number]: {
    ADDRESS: string
    SYMBOL: string
    NAME: string
  }
}
