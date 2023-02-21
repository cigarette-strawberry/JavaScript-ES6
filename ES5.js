"use strict";

var _class, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer
      ? descriptor.initializer.call(context)
      : void 0,
  });
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _applyDecoratedDescriptor(
  target,
  property,
  decorators,
  descriptor,
  context
) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators
    .slice()
    .reverse()
    .reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error(
    "Decorating class property failed. Please ensure that " +
      "proposal-class-properties is enabled and runs after the decorators transform."
  );
}

// 装饰器   草案语法 可以修饰类的属性   类原型的方法
// 修饰的时候 就是把这个类的属性传递给修饰函数
// @connect @withRoute react中的写法 都是语法糖
// @flag('工程师2')
var Person =
  ((_class = /*#__PURE__*/ (function () {
    function Person() {
      _classCallCheck(this, Person);

      _initializerDefineProperty(this, "name", _descriptor, this);
    }

    _createClass(Person, [
      {
        key: "address",
        value: function address(a, b) {
          console.log(a, b);
        },
      },
    ]);

    return Person;
  })()),
  ((_descriptor = _applyDecoratedDescriptor(
    _class.prototype,
    "name",
    [readOnly],
    {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return "xiaowu";
      },
    }
  )),
  _applyDecoratedDescriptor(
    _class.prototype,
    "address",
    [before],
    Object.getOwnPropertyDescriptor(_class.prototype, "address"),
    _class.prototype
  )),
  _class);
/* function flag(constructor) {   // @flag 不传参的写法
    constructor.type = '工程师'
  } */

function flag(value) {
  return function (constructor) {
    constructor.type = value;
  };
} // target 类的原型, property 装饰器的属性, descriptor 属性的描述器

function readOnly(target, property, descriptor) {
  descriptor.writable = false;
}

function before(target, property, descriptor) {
  var oldValue = descriptor.value; // 获取原来的内容

  descriptor.value = function () {
    console.log("say");
    oldValue.call.apply(
      oldValue,
      [target].concat(Array.prototype.slice.call(arguments))
    );
  };
}

flag("工程师3")(Person); // @flag('') 等同于这行代码

console.log(Person.type);
var p = new Person(); // p.name = 'xiaoyu'

console.log(p.name);
p.address(1, 2);
