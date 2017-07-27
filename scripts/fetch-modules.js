'use strict';

const request = require('request-promise');

const modulesUrl = "https://raw.githubusercontent.com/tessel/hardware-modules/master/modules.json";

console.error('Loading modules list...');
const modules = request(modulesUrl);

hexo.extend.filter.register('before_post_render', function(data){
    return modules.then((json) => {
        data.markdown = JSON.parse(json);
    })
});
