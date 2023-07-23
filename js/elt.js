function elt(name, attributes){
  const node = document.createElement(name);
  console.log(attributes);
  if (attributes){
    for (let attr in attributes){
      console.log(attributes.hasOwnProperty(attr));
      if (attributes.hasOwnProperty(attr)){
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }

  console.log(arguments);
  for(let i=2; i<arguments.length; i++){
    let child = arguments[i];
    if( typeof child == "string"){
      child = document.createTextNode(child);
    } 
    node.appendChild(child);
  }
  return node;
}