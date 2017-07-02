/**
 * Created by championswimmer on 02/07/17.
 */

const mod = require('./module')

console.log(mod.pubVar);

mod.pubFun();

//not possible
//mod.privFun();
//console.log(mod.privVar);

console.log(mod.privAccess);
mod.privAccessFun();