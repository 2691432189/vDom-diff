export default function (sel,data,children,text,elm) {
  let key 
  if (data.props) {
    key = data.props.key
  } else {
    key = undefined
  }
  return {sel,
    data,
    children,
    text,
    elm,
    key
  }
}