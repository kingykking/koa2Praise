(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.praisebutton = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

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

	var PraiseButton = function () {
		function PraiseButton(config) {
			_classCallCheck(this, PraiseButton);

			this._config = config || { baseNumber: 0, id: 'body' };
			this._num = this.getConfig('baseNumber');
			this.praiseButton = $(this.getConfig('id'));
		}

		_createClass(PraiseButton, [{
			key: 'init',
			value: function init() {
				this.bind();
				this.render();
			}
		}, {
			key: 'bind',
			value: function bind() {}
		}, {
			key: 'render',
			value: function render() {}
		}, {
			key: 'destroy',
			value: function destroy() {}
		}, {
			key: 'getConfig',
			value: function getConfig(key) {
				return this._config[key];
			}
		}, {
			key: 'setConfig',
			value: function setConfig(key, value) {
				this._config[key] = value;
			}
		}, {
			key: 'addNum',
			value: function addNum() {
				this._num++;
				$.ajax({
					type: 'GET',
					url: 'http://localhost:3000',
					data: '',
					dataType: 'json',
					success: function success(data) {
						this._num = data;
					}
				});
				return this._num;
			}
		}, {
			key: 'getNum',
			value: function getNum() {
				return this._num;
			}
		}, {
			key: 'setNum',
			value: function setNum(num) {
				this._num = num;
			}
		}]);

		return PraiseButton;
	}();

	exports.default = PraiseButton;
});