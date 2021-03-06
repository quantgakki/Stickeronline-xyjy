package com.tb.service.cdxyh.service;

import io.vertx.codegen.annotations.ProxyGen;
import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;

@ProxyGen
public interface BClassGradeService {
    /**
     * 新增新闻
     *
     * @param params
     * @param handler
     */
    void add(JsonObject params, Handler<AsyncResult<String>> handler);

    /**
     * 分页查询新闻列表
     *
     * @param params
     * @param handler
     */
    void queryPageList(JsonObject params, Handler<AsyncResult<JsonObject>> handler);

    /**
     * 编辑新闻
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
     * 查询所有新闻
     *
     * @param params
     * @param handler
     */
    void queryall(JsonObject params, Handler<AsyncResult<JsonArray>> handler);
    /**
     * 根据ID查询新闻详情
     *
     * @param params
     * @param handler
     */
    void queryById(JsonObject params, Handler<AsyncResult<JsonObject>> handler);
}
