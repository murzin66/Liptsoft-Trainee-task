import { store } from "../store"

export type ActionList = [
{
  charsetinfo: string,
},
{
  securities:Action[],
},
{
  currentAction:string,
},

]

export type Action = {
  SECID: string,
  BOARDID: string,
  SHORTNAME: string,
  PREVPRICE: number
}

export type SeriesInfo = {
    open_time: number,
    close_time:number,
    value: number,
    open_time_x: number,
    open_time_y: number
}
export type GraphInfo = {
  left: number,
  top: number,
  right: number,
  bottom: number,
  title: {
    top:number,
    left:number,
    width: number,
    height:number,
    labels: [
      {
        title: string,
      }
    ]
  },
  series: [
    {
    id: string,
    type: string,
    candles: SeriesInfo[],
  }
  ]

}

export type ActionPrice = {
  canvas:{
    width:number,
    height:number,
  }
  zones: GraphInfo[],
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;