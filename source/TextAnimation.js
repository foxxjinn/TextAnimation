;(function(){


    
    function textAnimation(text) {
        text.style.visibility = "hidden" //"hidden" or "visible"

        let clonedTextNode = text.cloneNode(true)

        clonedTextNode.style.visibility = "visible" // Temporary
        clonedTextNode.style.position = 'absolute'
        clonedTextNode.style.left = `${text.getBoundingClientRect().left}px`
        clonedTextNode.style.top = `${text.getBoundingClientRect().top}px`
        clonedTextNode.style.color = 'blue'

        console.log(clonedTextNode.getBoundingClientRect())

        text.parentElement.appendChild(clonedTextNode)
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