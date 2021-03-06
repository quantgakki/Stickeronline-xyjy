package com.tb.service.cdxyh.service;

import io.vertx.codegen.annotations.ProxyGen;
import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;

@ProxyGen
public interface BWechatUsersAsyncService {
    /**
     * 新增微信用户
     *
     * @param params
     * @param handler
     */
    void add(JsonObject params, Handler<AsyncResult<String>> handler);

    /**
     * 分页查询微信用户列表
     *
     * @param params
     * @param handler
     */
    void queryPageList(JsonObject params, Handler<AsyncResult<JsonObject>> handler);

    /**
     * 编辑微信用户
     *
     * @param params
     * @param handler
     */

    void edit(JsonObject params, Handler<AsyncResult<String>> handler);

    /**
     * 通过id删除
     *
     * @param params
     * @param handler
     */
    void delete(JsonObject params, Handler<AsyncResult<String>> handler);



    /**
     * 根据ID查询微信用户
     *
     * @param params
     * @param handler
     */
    void queryById(JsonObject params, Handler<AsyncResult<JsonObject>> handler);
    void queryAllByUserId(JsonObject params, Handler<AsyncResult<JsonObject>> handler);
    /**
     * 根据ID查询粉丝列表
     *
     * @param params
     * @param handler
     */
    void queryFansListByUserId(JsonObject params, Handler<AsyncResult<JsonObject>> handler);
    /**
     * 根据ID查询我关注的校友
     *
     * @param params
     * @param handler
     */
    void queryAttentionListByUserId(JsonObject params, Handler<AsyncResult<JsonObject>> handler);

    /**
     * 获取用户列表
     * @param params
     * @param handler
     */
    void getUserListByInitialGroup(JsonObject params, Handler<AsyncResult<JsonObject>> handler);

    /**
     * 根据校友会ID获取校友用户
     * @param params
     * @param handler
     */
    void queryListByAlumnusId(JsonObject params, Handler<AsyncResult<JsonObject>> handler);

    /**
     * 根据用户ID查询用户详细信息
     * @param params
     * @param handler
     */
    void getUserDetailsByUserId(JsonObject params, Handler<AsyncResult<JsonObject>> handler);
    /**
     * 审核
     *
     * @param params
     * @param handler
     */
    void checkById(JsonObject params, Handler<AsyncResult<JsonObject>> handler);
}
