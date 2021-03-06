import {
    getAction,
    deleteAction,
    putAction,
    postAction
} from '@/api/manage'
import api from '@/api/api'

// 获取模型
export const getUserInfo = (params) => {
    return getAction(api.UserInfo, params)
}
// 添加模型
export const getUserInfo1 = (params) => {
    return getAction(api.test, params)
}
// 获取微信用户openid
export const getUserOpenid = (params) => {
    return getAction(api.getUserOpenid, params)
}
// 获取微信用户
export const getWechatUserList = (params) => {
    return getAction(api.getWechatUserList, params)
}
//根据ID查询微信用户
export const getWechatUserById = (params) => {
    return getAction(api.getWechatUserById, params)
}
// 添加微信用户
export const addWechatUser = (params) => {
    return postAction(api.addWechatUser, params)
}
// 更新微信用户
export const updateWechatUser = (params) => {
    return putAction(api.updateWechatUser, params)
}
//删除微信用户
export const deleteWechatUser = (params) => {
    return deleteAction(api.deleteWechatUser, params)
}
//获取用户列表
export const getUserListByInitialGroup = (params) => {
    return getAction(api.getUserListByInitialGroup, params);
}
// 查询所有校友列表
export const queryAllByUserId = (params) => {
    return getAction(api.queryAllByUserId, params)
}
// 查询关注我的校友列表
export const queryFansListByUserId = (params) => {
    return getAction(api.queryFansListByUserId, params)
}
// 查询我关注的校友列表
export const queryAttentionListByUserId = (params) => {
    return getAction(api.queryAttentionListByUserId, params)
}

// 获取关注校友
export const getWechatUserAttentionList = (params) => {
    return getAction(api.getWechatUserAttentionList, params)
}
//根据ID查询关注校友
export const getWechatUserAttentionById = (params) => {
    return getAction(api.getWechatUserAttentionById, params)
}
// 添加关注校友
export const addWechatUserAttention = (params) => {
    return postAction(api.addWechatUserAttention, params)
}
// 更新关注校友
export const updateWechatUserAttention = (params) => {
    return putAction(api.updateWechatUserAttention, params)
}
//删除关注校友
export const deleteWechatUserAttention = (params) => {
    return deleteAction(api.deleteWechatUserAttention, params)
}

//获取用户信息
export const getUserDetailsByUserId = (params) => {
    return getAction(api.getUserDetailsByUserId, params)
}

// 获取我的消息
export const getMyNews = (params) => {
    return getAction(api.getMyNews, params)
}

//获取我的申请
export const getApply = (params) => {
    return getAction(api.getApply, params)
}
//添加收藏
export const addCollect = (params) => {
    return postAction(api.addCollect, params)
}
//删除收藏
export const delteCollect = (params) => {
    return deleteAction(api.delteCollect, params)
}
//获取收藏状态
export const getCollect = (params) => {
    return getAction(api.getCollect, params)
}