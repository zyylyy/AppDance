// 引入window.fetch polyfill
import 'whatwg-fetch';
import { rootPath, errHandler } from './config';
import store from '../../vuex';
import { mapGetters, mapMutations, mapActions } from 'vuex'
import cookie from 'js-cookie';
import '../../util/common';

console.log()

/**
 * 检查ajax返回的状态码,如果为401,则跳转到登录页
 * @param response
 * @returns {*}
 */
const checkStatus = function(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } 
    else if (response.status == 500) {
        const error = new Error('服务器错误')
        error.response = response
        throw error
    }
    else {
        // 如果没有登录,则跳转到登录页面
        // if (response.status === 401) {
        //     cookie.remove('authToken')
        //     cookie.remove('userInfo')
        //     actions.clearAuth(store)
        //     window.location = '/#/login'
        // }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};
/**
 * 参数为空时报错
 * @param param {string} 参数名
 */
const throwIfMissing = function(param) {
    throw new Error(param + '不能为空');
};
/**
 *
 * @param url {string}  接口路径,必填
 * @param formJson {boolean} 是否需要转换为json格式
 * @param body {object | array} data,传送给后端的数据
 * @param headers {object} 请求头
 * @param method {string} 请求方法 主要是'get'和'post',默认为get
 * @param path {string} 接口路径,默认为'/Api'
 * @param isShowFullLoading {boolean} 是否显示全屏loading动画,默认为false
 * @param auth {boolean} 是否需要口令
 * @param isShowError {boolean} 是否显示错误信息,默认为true
 * @returns {Promise}
 */
const ajax = ({
    url = throwIfMissing('url'),
    formJson = true,
    body = null,
    headersData = { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
    method = 'get',
    path = rootPath,
    //isShowFullLoading = false,
    auth = false,
    isShowError = true,
}) => {
    let headers = {}
    if (auth) {
        headers = {
            ...headersData,
            Authorization: 'Bearer ' + store.getters.authToken
        }
    }
    else {
        headers = headersData
    }

    const options = {
        // credentials: 'same-origin', // 发送cookie
        // credentials: 'include', // cross-origin  调试用 上线删
        // withCredentials: true,  // cross-origin cookie  调试用 上线删
        method,
        headers,
    };

    let bodyString = '';
    if (formJson) {
        bodyString = JSON.stringify(body);
    } else {
        bodyString = Object.keys(body).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
        }).join('&');
    }
    if (bodyString !== 'null') {
        options.body = bodyString;
    }


    return new Promise((resolve, reject) => {
        fetch(path + url, options)
            .then(checkStatus)
            .then((response) => response.json())
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                // 显示错误提示
                console.log(error)
            });
    });
};

export default ajax;