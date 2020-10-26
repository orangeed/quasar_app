import request from './request'

//随机一句一言API接口
export const ian = () => {
    return request({
        baseURL: 'https://api.vvhan.com/api/ian',
        method: "get",
        params: {
            type: "json" // 不填为字符串输出，json为jsonn格式，js为js格式
        }
    })
}

//随机笑话api
export const xh = () => {
    return request({
        baseURL: 'https://api.vvhan.com/api/xh',
        method: "get",
        params: {
            type: "json" // 不填为字符串输出，json为jsonn格式，js为js格式
        }
    })
}

//随机情话api
export const love = () => {
    return request({
        baseURL: 'https://api.vvhan.com/api/love',
        method: "get",
        params: {
            type: "json" // 不填为字符串输出，json为jsonn格式，js为js格式
        }
    })
}

// 随机骚话api
export const sao = () => {
    return request({
        baseURL: 'https://api.vvhan.com/api/sao',
        method: "get",
        params: {
            type: "json" // 不填为字符串输出，json为jsonn格式，js为js格式
        }
    })
}

//随机生成一张风景图片
export const view = () => {
    return request({
        baseURL: 'https://api.vvhan.com/api/view',
        method: "get",
        params: {
            type: "json" // 不填为字符串输出，json为jsonn格式，js为js格式
        }
    })
}

// 垃圾分类查询
export const laji = (params) => {
    return request({
        baseURL: 'https://api.vvhan.com/api/la.ji',
        method: "get",
        params
    })
}

// 实时影院排行
export const movies = (params) => {
    return request({
        baseURL: 'https://api.vvhan.com/api/movies',
        method: "get",
        params
    })
}

// 豆瓣电影排行
export const douban = (params) => {
    return request({
        baseURL: 'https://api.vvhan.com/api/douban',
        method: "get",
        params
    })
}

// 文字转语音
export const audio = (params) => {
    return request({
        baseURL: 'https://api.vvhan.com/api/song',
        method: 'get',
        params
    })
}