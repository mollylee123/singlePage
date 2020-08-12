var log = console.log.bind(console)
var router = {
    '?index=0': '0',
    '?index=1': '1',
    '?index=2': '2',
    '?index=3': '3',
    '?index=4': '4',

}

layui.use('layer', function(){
    var $ = layui.jquery
    $('.layui-tab-title li').on('click', function(title) {
        var index = this.dataset.index
        var link = window.location.pathname + `?index=${index}`
        window.history.pushState({name: index}, link, link)
        // log('click', index, window.history.state)
    })

    window.addHistoryListener('history', function(event){
        log('窗口的history改变了', event)
        // 20200812 问题：注册事件时如何把传参传给回调函数
        // a：window.history.state 取到，但有个问题啊，应该在订阅发布上也把
        // 参数一致传给回调函数才对
        var state = window.history.state
        var h = state.name
        $('.layui-tab-content').html(h)
    })
})
// 模拟原生的单页应用
// 点击根据index，修改url
// url更改切换不同效果 ？
//
