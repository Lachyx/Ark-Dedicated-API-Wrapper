Made this because it's kinda cool if you know what you're doing

Fetches the arkdedicated api for server data easily

# Example Code

```javascript

const Query = require('ark-dedicated-api-wrapper');

Query({
    name: 'Server Name or Empty String',
    platform: 'xbx or ps4' 
}).then(function (result) { 
    console.log(result); 
})

```