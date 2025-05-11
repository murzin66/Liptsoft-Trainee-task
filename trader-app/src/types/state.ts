export type ActionList = {
  securities:Action[],
}

type Action = {
  SECID: string,
  BOARDID: string,
  SHORTNAME: string,
  PREVPRICE: number
}

type series_info = {
    open_time: number,
    close_time:number,
    value: number,
    open_time_x: number,
    open_time_y: number
}
export type ActionPrice = {
  series:
  {
    candles: series_info [],
  },
}