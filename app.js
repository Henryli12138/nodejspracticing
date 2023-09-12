//npm --version
//local dependency
//npm i <packagename>

//global dependency
//npm install -g <packagename>
//sudo npm install -g <packagename> (mac)

//package.json - manifest file
//npm init
//npm init -y (default setting)

const _ = require('lodash');

const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)