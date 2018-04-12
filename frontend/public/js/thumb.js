(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './praisebutton.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./praisebutton.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.praisebutton);
		global.thumb = mod.exports;
	}
})(this, function (exports, _praisebutton) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _praisebutton2 = _interopRequireDefault(_praisebutton);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Thumb = function (_PraiseButton) {
		_inherits(Thumb, _PraiseButton);

		function Thumb(config) {
			_classCallCheck(this, Thumb);

			return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, config));
		}

		_createClass(Thumb, [{
			key: 'render',
			value: function render() {
				var num = this.getNum();
				if ($('.demo').length == 0) {
					this.praiseButton.append('\n\t\t\t\t<div class="demo">\n\t\t\t\t\t<div class="hand">\n\t\t\t\t\t\t<div class="thumb">\n\t\t\t\t\t\t\t<div class="thumb-top"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="forefinger">\n\t\t\t\t\t\t\t<div class="forefinger-top"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="middlefinger"></div>\n\t\t\t\t\t\t<div class="ringfinger"></div>\n\t\t\t\t\t\t<div class="littlefinger"></div>\n\t\t\t\t\t\t<div class="joint">\n\t\t\t\t\t\t\t<div class="joint-bottom"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>');
					this.praiseButton.after('<span id=\'praise_count\' style=\'float:right;margin-right:35%;\'></span>');
				}
				$('#praise_count').html('点赞数 ' + num);
			}
		}, {
			key: 'bind',
			value: function bind() {
				var self = this;
				this.praiseButton.on('click', function () {
					self.addNum();
					self.render();
				});
			}
		}, {
			key: 'destroy',
			value: function destroy() {}
		}]);

		return Thumb;
	}(_praisebutton2.default);

	exports.default = Thumb;
});