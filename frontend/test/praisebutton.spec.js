import PraiseButton from '../src/praisebutton.js';

describe('Praise Button test', function() {
    it('addNum测试', function() {
        const praiseButton = new PraiseButton();
        expect(praiseButton.addNum()).toBe(1);
    });
});
