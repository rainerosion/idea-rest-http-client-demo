/**
 * 从response中获取token
 * @param response
 */
export function findLoginToken(response) {
    if (response.status === 200 && response.body.status === 200) {
        client.log(response.body.datas.token)
    } else {
        client.error("登录失败");
    }
}

/**
 * 从response中获取token，并设置到全局变量中
 * @param response
 * @param tokenKeyName
 */
export function setLoginToken(response, tokenKeyName) {
    if (response.status === 200 && response.body.status === 200) {
        client.log(response.body.datas.token)
        client.global.set(tokenKeyName, response.body.datas.token)
    } else {
        client.log("登录失败");
    }
}

export function test(response, testName) {
    client.test(testName, () => {
        client.assert(response.status === 200 && response.body.status === 200, "接口调用失败");
    })
}

/**
 * md5
 * @param password
 * @returns {*}
 */
export function md5(password) {
    return crypto.md5()
        .updateWithText(password)
        .digest()
        .toHex();
}