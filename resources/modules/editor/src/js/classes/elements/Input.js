import BaseElement from './BaseElement';
import FromIcon from '../../../svgs/form.svg';
import {advancedTabControllers} from "../../decorators/register-controllers";
import {CONTROLLER_TEXTAREA, TAB_CONTENT} from "../modules/ControllersManager";

class Input extends BaseElement{
  static getName(){
    return 'input';
  }
  static getTitle(){
    return'Inout';
  }
  static getIconComponent(){
    return FromIcon;
  }
  static getType(){
    return 'widget';
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return
    }
    this.startControlSection('content_section', {
      tab: TAB_CONTENT,
      label: 'Content',
    });

    this.addControl('default_value', {
      type: CONTROLLER_TEXTAREA,
      label: 'Default Value',
    });

    this.endControlSection();

    advancedTabControllers(this);
  }
}
export default Input;