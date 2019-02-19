// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var targetNodes = [];
  
  var getNodes = function(className, node) {
    if (node.classList && node.classList.contains(className)) {
      targetNodes.push(node);
    }
      if (node.hasChildNodes()) {
        var childNodes = node.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
          getNodes(className, childNodes[i]);
        }
      }
  }

  getNodes(className, document.body);
  // You should use document.body, element.childNodes, and element.classList
  // For each node in the DOM tree:
    // See if node has target class name...
      // if so, get node name
    // if not, continue
    // for each child node...
      // recursively run getElementsByClassName to get child nodes with target class name
  return targetNodes.slice();
};
