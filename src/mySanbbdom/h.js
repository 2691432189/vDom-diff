import vnode from './vnode'

export default function (sel,data,c) {
  if (arguments.length != 3) {

    throw new Error('需要三个参数')

  } else if (typeof c === 'string' || typeof c === 'number'){

    return vnode(sel,data,undefined,c,undefined)

  } else if(Array.isArray(c)) {

    const children = []
    for (let i = 0; i < c.length; i++) {
      if(!c[i].hasOwnProperty('sel')) 
      throw new Error('没有sel参数')
      children.push(c[i])
    }
    return vnode(sel,data,children,undefined,undefined)

  } else if(typeof c === 'object') {

    if(!c.hasOwnProperty('sel')) 
    throw new Error('没有sel参数')
    const children = [c]
    return vnode(sel,data,children,undefined,undefined)

  }
}