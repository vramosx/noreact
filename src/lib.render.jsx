
const createElement = (function() {
  const isEvent = (k, v) => k.startsWith("on") && typeof v === "function";
  const eventName = k => k.substr(2).toLowerCase();
  const isString = s => typeof s === "string";
  const isNumber = s => typeof s === "number";
  const isFunction = s => typeof s === "function";

  function attrs(el, props) {
    // Remember, JSX sets props to `null` if nothing is defined, so in that case we just return el
    if (!props) {
      return el;
    }

    // For every passed prop, we get key and value
    for (let [k, val] of Object.entries(props)) {
      // Check if it starts with `on`. Then we assume it is an event and add an event listener.
      if (isEvent(k, val)) {
        el.addEventListener(eventName(k), val);
      }
      // If the key is class, we use classList to add one or many CSS classes
      else if (k === "class") {
        el.setAttribute('class', val);       
      }
      // Of finally, if not class nor event, we set attribute using the setAttribute function.
      else {
        el.setAttribute(k, val);
      }
    }
    return el;
  }

  return function createElement(tag, props, ...children) {
    if (isFunction(tag)) {
      return tag({ ...props, children });
    }
    const el = attrs(document.createElement(tag), props);
    children.flat().forEach(child => {
      const node = (!isString(child) && !isNumber(child)) ? child : document.createTextNode(child);
      if(!node) return;
      el.appendChild(node);
    });

    return el;
  };
})();

document.getElementById("root").appendChild(<App name="teste"/>)