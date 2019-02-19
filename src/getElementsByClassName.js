// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var node = node || document.body;
  
  var targetNodes = [];
  
  var getNodes = function(className, node){
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i].className === className) {
          targetNodes.push(childNodes[i])
      }
      getNodes(className, childNodes[i]);
  }
  
  }
  // You should use document.body, element.childNodes, and element.classList
  // For each node in the DOM tree:
    // See if node has target class name...
      // if so, get node name
    // if not, continue
    // for each child node...
      // recursively run getElementsByClassName to get child nodes with target class name
};
