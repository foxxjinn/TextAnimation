;(function(){
    
    function textAnimation(text) {
        //text.style.visibility = "hidden"

        // text.style.visibility = "visible"

        let clonedTextNode = text.cloneNode(true)

        const bodyThickness = getBodyMaringAndPaddingTopAndLeft()
        clonedTextNode.style.visibility = "visible" // Temporary
        clonedTextNode.style.display = 'relative'
        clonedTextNode.style.color = 'blue'
    
        const div = getDivParent(text)
        console.log(div)
        div.appendChild(clonedTextNode)
    }

    function getBodyMaringAndPaddingTopAndLeft() {
        const body = document.querySelector('body')
        return {
            paddingTop:     parseFloat(window.getComputedStyle(body, null).paddingTop),
            paddingLeft:    parseFloat(window.getComputedStyle(body, null).paddingLeft),
            marginTop:      parseFloat(window.getComputedStyle(body, null).marginTop),
            marginLeft:     parseFloat(window.getComputedStyle(body, null).marginLeft)
        }
    }

    // Bubble up DOM until you find the node's div parent.  If none, then body.
    function getDivParent(node) {
        if (node.parentElement.nodeName === 'DIV' || node.parentElement.nodeName === 'BODY') {
            return node.parentElement
        }
        return getDivParent(node.parentElement)
    }

    // Export spinnyButton Function
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

        // AMD. Register as an anonymous module.
        define(function() {
          return textAnimation;
        });
      } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = textAnimation;
            module.exports.textAnimation = textAnimation;
      } else {
            window.textAnimation = textAnimation;
      }
}());