import vnode from './vnode'
import createElement from './createElement'
import pacthVnode from './patchVnode'

export default function (oldNode,newNode) {

  // 判断oldNode是否为dom节点，是则包装成虚拟节点
  if ( oldNode.sel == '' || oldNode.sel == undefined) {
    oldNode = vnode(oldNode.tagName.toLowerCase(),[],undefined,undefined,oldNode)
  }

  // 判断oldNode与newNode是否为同一个节点
  if (oldNode.sel == newNode.sel && oldNode.key == newNode.key ) {

    // 如果新旧两个虚拟dom完全一致，则无需更改
    if (oldNode.text === newNode.text && oldNode.text != undefined && newNode.text !=undefined ) return
  
    // 如果新旧两个虚拟dom不一致，则进行额外处理
    pacthVnode ( oldNode , newNode )


  } else {

    // 暴力添加新的节点后删除旧的节点
    const newElement = createElement(newNode)
    oldNode.elm.parentNode.insertBefore(newElement,oldNode.elm)
    oldNode.elm.parentNode.removeChild(oldNode.elm)

  }

}