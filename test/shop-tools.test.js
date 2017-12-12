var expect=require('chai').expect;
var getPrices=require('../src/shop-tools').getPrices;
var countArticles=require('../src/shop-tools').countArticles();
describe('A function +getPrices+ that doesn\'t take parameter should return an object which describes the prices of your products.',function(){
    it('should be true',function(){
        expect(true).to.be.true;
    })
})
describe('function getPrices()',function(){
    it('expect return the good results',function(){
        expect(getPrices()).to.eql({banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
    })
})
describe('function countArticle()',function(){
    it('we expect the good result',function(){
        
    })
})
