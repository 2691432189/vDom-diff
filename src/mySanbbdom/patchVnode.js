import createElement from './createElement'
import uploadChildren from './uploadChildren'

export default function pacthVnode ( oldNode , newNode ) {

  // 如果新虚拟dom节点中有文字，则直接更改旧对应dom节点
  if (newNode.text != undefined && newNode.children == [] || newNode.children == undefined ) {
      
    oldNode.elm.innerHTML = newNode.text
    

  } else {
    
    // 新虚拟dom节点中没有文字，则证明新虚拟dom节点中有子节点
    // 判断旧虚拟dom中是否有children属性，没有则证明旧虚拟dom中有文字
    if (oldNode.children == [] || oldNode.children == undefined && oldNode.text != undefined ) {
      // 删除旧节点的文字
      oldNode.elm.innerHTML = ''
      // 循环追加新节点
      for (let i = 0; i < newNode.children.length; i++) {
        const newElement = createElement(newNode.children[i])
        oldNode.elm.appendChild(newElement)
      }

    } else {

      // 新旧虚拟dom中都有有children属性，使用diff算法进行精细化比较
      uploadChildren(oldNode.elm,oldNode.children,newNode.children)

    }

  }
}