export interface MineData {
  title: string,
  noIcon?: boolean
  icon?: string,
  badge?:
    | string
    | {
      text?: string,
      type?: 'info' | 'tip' | 'warning' | 'danger'
    }
  desc: string,
  link?: string,
  image?: string,
  image2?: string,
  time?: string,
}