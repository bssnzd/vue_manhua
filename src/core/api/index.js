import request from "./http"
import axios from "axios"
import mock from  "@/mock"

class Apis {
    
    // json1811.ashx?v=1562741893374&c=NewIndexController&m=index
    getHomeData(params) {
        return request({
            method: 'get',
            url: '/api/v3/home',
            params
        });
    }
    getHotWord() {
        return request({
            method: 'get',
            url: '/search/hot_keyword',
        });
    }
    postSearch(data) {
        return request({
            method: 'post',
            url: '/search/ajax_search',
            data,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        });
    }
    postTips(data) {
        return request({
            method: 'post',
            url: '/search/ajax_tips_v2',
            data,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        });
    }
    postRank() {
        return request({
            method: 'post',
            url: '/ranking/get_data',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        });
    }
    postCate(data) {
        return request({
            method: 'post',
            url: '/category/ajax_group',
            data,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        });
    }
}
export default new Apis();