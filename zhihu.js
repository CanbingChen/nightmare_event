var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })
nightmare
    .goto('https://www.zhihu.com/')
    .click('a[href="#signin"]')
    .click('.signin-switch-password')
    .type('input[type="text"]','18280344364')
    .type('input[type="password"]','chencanbing11013')
    .wait(5000)
    .click('.sign-button')
    .wait('#root')
    .type('input[type="text"]', 'javascript')
    .click('.SearchBar-searchIcon')
    .wait('.page-search')
    .evaluate(function () {
        var elements = document.querySelector('.js-title-link');
        var array = [];
        for(var i=0,len=elements.length;i++;i<len){
            var element = elements[i];
            var obj = {
                title : element.innerHtml,
                href : element.href
            };
            array.push(obj);
        }
        return array
    })
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });
