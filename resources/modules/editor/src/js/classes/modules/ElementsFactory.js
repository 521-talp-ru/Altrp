import BaseModule from './BaseModule';
import {getEditor} from "../../helpers";

class ElementsFactory extends BaseModule{
  parseData(object, parent){
    let children = [];
    const elementsManager = window.elementsManager;
    /**
     * @member {BaseElement} element
     * */
    let element = new (elementsManager.getElementClass(object.name));
    if( object.children && object.children.length ){
      for( let child of object.children){
        children.push( this.parseData(child, element) );
      }
    }
    element.id = object.id;
    element.children = children;
    /**
     * Если настройки пустый то с сервера приходит пустой массив -- меняем на пустой объект
     * */
    element.settings = (object.settings.length === 0) ? {} : object.settings;

    if(parent){
      element.parent = parent;
    }
    return element;
  }

  /**
   * @param {BaseElement} element
   * @param {BaseElement} target
   * @return{BaseElement}
   * */
  duplicateElement(element, target){

    let newElement = this._duplicateElement(element);
    target.insertNewChildAfter(element.getId(), newElement);
    /**
     * @member {TemplateDataStorage} templateDataStorage
     * */
    let templateDataStorage = getEditor().modules.templateDataStorage;
    templateDataStorage.elementsIds = _.union(templateDataStorage.elementsIds, newElement.getIds());
    return newElement;
  }
  /**
   * @param {BaseElement} element
   * */
  _duplicateElement(element){
    /**
     * @member {BaseElement} newElement
     * */
    let newElement = new (elementsManager.getElementClass(element.getName()));
    let newChildren = [];
    element.children.map((childrenItem)=>{
      let newChild = this._duplicateElement(childrenItem);
      newChild.setParent(newElement);
      newChildren.push(newChild);
    });
    newElement.component = new
    newElement.setChildren(newChildren);
    newElement.settings = _.cloneDeep(element.settings);
    newElement.children = newChildren;
    return newElement;
  }
}

export default ElementsFactory;