import BaseElement from "./BaseElement";
import Column from "./Column";
import {CONTROLLER_NUMBER} from "../modules/ControllersManager";

class Section extends BaseElement{

  static getName(){
    return 'section';
  }
  static getTitle(){
    return 'Section';
  }
  static getType(){
    return 'section';
  }
  _registerControls(){
    this.startControlSection('content',{
      label: 'Section'
    });
    this.addControl('text',{
      type: CONTROLLER_NUMBER,
      label: 'Section',
    });
    this.endControlSection();
  }

  appendColumn(newColumn) {
    if(!newColumn instanceof Column){
      throw 'Only Column can be a Child of Section';
    }
    this.appendChild(newColumn);
  }
}

export default Section