function WhetherIdentical (vnodeA,vnodeB) {
  return vnodeA.sel == vnodeB.sel && vnodeA.key == vnodeB.key
}

import patch from './patch'
import createElement from './createElement'
export default function uploadChildren(parentElm,oldChr,newChr) {
  
  let newStartIndex = 0                      //新前指针
  let newEndIndex = newChr.length - 1        //新后指针
  let oldStartIndex = 0                      //旧前指针
  let oldEndIndex = oldChr.length - 1        //旧后指针
  let newStartVnode = newChr[0]              //新前节点
  let newEndVnode = newChr[newEndIndex]      //新后节点
  let oldStartVnode = oldChr[0]              //旧前节点
  let oldEndVnode = oldChr[oldEndIndex]      //旧后节点

  while (newStartIndex <= newEndIndex && oldStartIndex <= oldEndIndex) {
    
    if (WhetherIdentical(newStartVnode,oldStartVnode)) {
      // 新前 == 旧前
      patch(oldStartVnode,newStartVnode)
      console.log(oldStartVnode,newStartVnode);
      newStartVnode = newChr[++newStartIndex]
      oldStartVnode = oldChr[++oldStartIndex]

    } else if (WhetherIdentical(newEndVnode,oldEndVnode)) {
      // 新后 == 旧后
      patch(oldEndVnode,newEndVnode)
      newEndVnode = newChr[--newEndIndex]
      oldEndVnode = oldChr[--oldEndIndex]

    } else if (WhetherIdentical(newEndVnode,oldStartVnode)) {
      // 新后 == 旧前
      patch(oldStartVnode,newEndVnode)
      parentElm.insertBefore(oldStartVnode.elm,oldEndVnode.elm.nextSibling)
      // oldChr[oldStartIndex] = undefined
      newEndVnode = newChr[--newEndIndex]
      oldStartVnode = oldChr[++oldStartIndex]
      

    } else if (WhetherIdentical(newStartVnode,oldEndVnode)) {
      // 新前 == 旧后
      patch(oldEndVnode,newStartVnode)
      parentElm.insertBefore(oldEndVnode.elm,oldStartVnode.elm)
      // oldChr[oldEndIndex] = undefined
      newStartVnode = newChr[++newStartIndex]
      oldEndVnode = oldChr[--oldEndIndex]

    } else {
     
      // 循环判断新前在所有旧节点中是否存在
      let isExist = true
      for (let i = oldStartIndex; i < oldEndIndex; i++) {
        // 存在
        if (WhetherIdentical(newStartVnode,oldChr[i])) {
          patch(oldChr[i],newStartVnode)
          parentElm.insertBefore(oldChr[i].elm,oldStartVnode.elm)
          newStartVnode = newChr[++newStartIndex]
          oldChr[i] = undefined
          isExist = false
        }
      }
      if (isExist) {
        // 不存在
        const newElm = createElement(newStartVnode)
        parentElm.insertBefore(newElm,oldStartVnode.elm)
        newStartVnode = newChr[++newStartIndex]
      }

    }

  }

  // 判断是否剩余新节点，有则是新增节点，循环插入到所有子节点之后
  if (newStartIndex <= newEndIndex) {
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      const newElm = createElement(newStartVnode)
      parentElm.appendChild(newElm)
      newStartVnode = newChr[++newStartIndex]
    }
  }
   // 判断是否剩余旧节点，有则是删除节点，循环删除所有节点
  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      parentElm.removeChild(oldChr[i].elm)
    }
  }

}