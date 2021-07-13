import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
} from "snabbdom";

import h from './mySanbbdom/h'

// const patch = init([
//   // Init patch function with chosen modules
//   classModule, // makes it easy to toggle classes
//   propsModule, // for setting properties on DOM elements
//   styleModule, // handles styling on elements with support for animations
//   eventListenersModule, // attaches event listeners
// ]);

import patch from './mySanbbdom/patch'

const container = document.getElementById("container");
const btn = document.querySelector('.btn')

const lists = h('ul',{}, [
  h("li",{ props:{ key:'战地一' } },'战地一'),
  h("li",{ props:{ key:'苹果' } },'苹果'),
  h("li",{ props:{ key:'西瓜' } },'西瓜'),
  h("li",{ props:{ key:'水蜜桃' } },'水蜜桃'),
  h("li",{ props:{ key:'战地4' } },'战地4'),
  h("li",{ props:{ key:'香蕉' } },'香蕉'),
  h("li",{ props:{ key:'战地五' } },'战地五'),
  h("li",{ props:{ key:'菠萝' } },'菠萝'),
  h("li",{ props:{ key:'战地2042' } },'战地2042'),
  h("li",{ props:{ key:'桃子' } },'桃子'),
  h("li",{ props:{ key:'哈密瓜' } },'哈密瓜')
])

// const lists = h('ul',{}, [
//   h("li",{ props:{ key:'战地一' } },'战地一'),
//   h("li",{ props:{ key:'苹果' } },'苹果'),
//   h("li",{ props:{ key:'战地4' } },[
//     h("li",{ props:{ key:'香蕉1' } },'香蕉1'),
//     h("li",{ props:{ key:'香蕉2' } },'香蕉2'),
//     h("li",{ props:{ key:'香蕉3' } },'香蕉3'),
//     h("li",{ props:{ key:'香蕉4' } },'香蕉4'),
//   ]),
//   h("li",{ props:{ key:'战地五' } },'战地五'),
//   h("li",{ props:{ key:'菠萝' } },'菠萝'),
//   h("li",{ props:{ key:'战地2042' } },'战地2042'),
//   h("li",{ props:{ key:'桃子' } },'桃子'),
//   h("li",{ props:{ key:'哈密瓜' } },'哈密瓜')
// ])

// const lists = h('ul',{}, [
//   h("li",{ props:{ key:'战地4' } },'战地4 - 4'),
//   h("li",{ props:{ key:'战地一' } },'战地一 - 1') 
// ])

// const lists = h('ul',{}, 'eeee')

const list = h('ul',{}, [
  h("li",{ props:{ key:'战地一' } },'战地一'),
  h("li",{ props:{ key:'战地4' } },'战地4'),
  h("li",{ props:{ key:'战地五' } },'战地五'),
  h("li",{ props:{ key:'战地2042' } },'战地2042')
])


patch(container, list)

btn.addEventListener('click',()=>{
  patch(list,lists)
})


