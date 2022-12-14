/**
 * 系统配置信息
 */
declare interface sysConfig extends COMMON.obj {
  sysName:string,
  sysLoginBackground:string,
  sysLogo:string
}

/**
 * 系统菜单列表
 */
declare interface sysMenu {
  id:number,
  appName:string,
  appId:string,
  appType:'app'|'category',
  orderNum:number,
  pid:string,
  description:string,
  children:any[]|sysMenu[]
}

/**
 * 系统字典
 */
declare interface sysDict {
  id:number,
  dictType:string,
  dictTypeChdesc:string,
  value:string|number,
  label:string,
  orderNum:number,
  description:string
}