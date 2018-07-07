/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var INITILISED1 = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

       var sprite= new cc.Sprite.create(res.HelloWorld_png);
       sprite.setAnchorPoint(cc.p(5,5));
	sprite.setPosition(cc.p(size.width/4,size.height / 4));
	//this.addChild(sprite, 0);
        //var sprite_action = cc.MoveTo.create(2,cc.p(20,40));
        //sprite.runAction(sprite_action);
 	var menuItem1= new cc.MenuItemFont("Start",Start);
	var menuItem2= new cc.MenuItemFont("Highscore",Highscore);
	var menuItem3= new cc.MenuItemFont("Setting",Setting);
 	
	//menuItem1.setPosition(cc.p(size.width/2,(size.height/4)*3));
	//menuItem2.setPosition(cc.p(size.width/2,(size.height/4)*2));
	//menuItem3.setPosition(cc.p(size.width/2,(size.height/4)*1));

	

	var menu = new cc.Menu(menuItem1,menuItem2,menuItem3);
	menu.alignItemsVerticallyWithPadding(40);
	//menu.setPosition(cc.p(0,0));
	this.addChild(menu);

        return true;
    }
});

var Start = function()
{
      var scene = new HelloWorldScene2();
      cc.director.runScene(scene);
      cc.log("Start Game");
}

var Highscore = function()
{
      cc.log("Highscore");
}

var Setting = function()
{
      cc.log("Setting");
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

	if(INITILISED1== false)
	{
	    INITILISED1 = true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
	}
    }
});

