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

  function createNode(value) {
    return  { value : value,
              next : null};
  }

  function _getHead() {

    return head;
    ;
  }

  function _getTail() {

    return tail;
  }

  function _add(value) {
    var newNode = createNode(value);
    if (train.getTail() === null) {
      head = newNode;
    }else {
      train.getTail().next = newNode;
    }
    tail = newNode;

    return newNode;
  }

  function _get(number) {

  }

  function _remove(number) {

  }

  function _insert(value,number) {

  }

  return train;
}