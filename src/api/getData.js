/**
 * Created by jie on 2017/11/13.
 */


import db from './db';
/**
 * 获取用户信息
 */
export const getUserList = data => db.doPost('getUserList',data);

/**
 * 获取订单信息
 */
export const getOrderList = data => db.doPost('getOrderList',data);

// 方法二
// export const getUserList =async data =>await db.doPost('getUserList',data);
