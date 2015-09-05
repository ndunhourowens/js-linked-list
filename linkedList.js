/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var train = {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };

  var head = null;
  var tail = null;

  var length = 0;

  function createNode(value) {
    return  { value : value,
              next : null};
  }

  function _getHead() {

    return head;

  }

  function _getTail() {

    return tail;
  }

  function _add(value) {
    var newNode = createNode(value);
    if (tail === null) {
      head = newNode;
    }else {
      tail.next = newNode;
    }
    tail = newNode;
    length = length + 1;
    console.log(newNode);

    return newNode;

  }

  function _get(number) {
    var current = train.getHead();
    //retrun false if no node is found'
    if (number >= length) {
      return false;
    }
    for (var i = 0; i < number; i++) {
      current = current.next;
    }
    return current;
  }

  function _remove(number) {



  }

  function _insert(value,number) {

  }
    return train;
}
