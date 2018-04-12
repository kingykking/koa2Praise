import PraiseButton from './praisebutton.js';
class Thumb extends PraiseButton{
	constructor(config) {
		super(config);
	}
	render() {
		var num = this.getNum();
		if($('.demo').length == 0) {
			this.praiseButton.append(`
				<div class="demo">
					<div class="hand">
						<div class="thumb">
							<div class="thumb-top"></div>
						</div>
						<div class="forefinger">
							<div class="forefinger-top"></div>
						</div>
						<div class="middlefinger"></div>
						<div class="ringfinger"></div>
						<div class="littlefinger"></div>
						<div class="joint">
							<div class="joint-bottom"></div>
						</div>
					</div>
				</div>`
			);
			this.praiseButton.after(`<span id='praise_count' style='float:right;margin-right:35%;'></span>`);
		}
		$('#praise_count').html('点赞数 '+num);
	}
	bind() {
		var self = this;
		this.praiseButton.on('click',function(){
			self.addNum();
			self.render();
		})
	}
	destroy() {

	}
}
export default Thumb;