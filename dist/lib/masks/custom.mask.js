Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _base=require('./_base.mask');var _base2=_interopRequireDefault(_base);var _maskInRegex=require('./maskInRegex');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _getDefaultTranslation(){return{'9':function _(val){return val.replace(/[^0-9]+/g,'');},A:function A(val){return val.replace(/[^a-zA-Z]+/g,'');},S:function S(val){return val.replace(/[^a-zA-Z0-9]+/g,'');},'*':function _(val){return val;}};}function toPattern(value,mask,translation){var result='';var maskCharIndex=0;var valueCharIndex=0;while(true){if(maskCharIndex===mask.length){break;}if(valueCharIndex===value.length){break;}var maskChar=mask[maskCharIndex];var valueChar=value[valueCharIndex];if(maskChar===valueChar){result+=maskChar;valueCharIndex+=1;maskCharIndex+=1;continue;}var translationHandler=translation[maskChar];if(translationHandler){var resolverValue=translationHandler(valueChar||'');if(resolverValue===''){valueCharIndex+=1;continue;}else if(resolverValue!==null){result+=resolverValue;valueCharIndex+=1;}else{result+=maskChar;}maskCharIndex+=1;continue;}result+=maskChar;maskCharIndex+=1;continue;}return result;}var DEFAULT_TRANSLATION=_getDefaultTranslation();var CustomMask=function(_BaseMask){_inherits(CustomMask,_BaseMask);function CustomMask(){_classCallCheck(this,CustomMask);return _possibleConstructorReturn(this,(CustomMask.__proto__||Object.getPrototypeOf(CustomMask)).apply(this,arguments));}_createClass(CustomMask,[{key:'getKeyboardType',value:function getKeyboardType(){return'default';}},{key:'getValue',value:function getValue(value,settings){var masked='';if(value===''){return value;}if(settings.type){masked=(0,_maskInRegex.replaceMaskRegex)(value,settings.type);}else{var mask=settings.mask;var translation=this.mergeSettings(DEFAULT_TRANSLATION,settings.translation);masked=toPattern(value,mask,translation);}return masked;}},{key:'getRawValue',value:function getRawValue(maskedValue,settings){if(!!settings&&settings.getRawValue){return settings.getRawValue(maskedValue,settings);}return maskedValue;}},{key:'validate',value:function validate(value,settings){if(!!settings&&settings.validator){return settings.validator(value,settings);}return true;}}],[{key:'getType',value:function getType(){return'custom';}},{key:'getDefaultTranslation',value:function getDefaultTranslation(){return _getDefaultTranslation();}}]);return CustomMask;}(_base2.default);CustomMask.shared=new CustomMask();exports.default=CustomMask;