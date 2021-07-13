export default function createElement(newNode) {

  const newElement = document.createElement(newNode.sel)

  // 判断节点内包含的内容
  if (newNode.text != undefined || newNode.text != undefined && newNode.children == [] || newNode.children == undefined ) {
    
    // 文字则直接添加
    newElement.innerText = newNode.text

  } else {

    // 循环创建子节点并添加进父节点
    for (let i = 0; i < newNode.children.length; i++) {
      // 建子节点
      const newChildrenElement = createElement(newNode.children[i])
      // 添加进父节点
      newElement.appendChild(newChildrenElement)
    }

  }

  // 将dom节点存入当前虚拟dom的elm属性中
  newNode.elm = newElement

  return newElement

}