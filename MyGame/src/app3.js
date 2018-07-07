var HelloWorldLayer3 = cc.Layer.extend({
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
       //sprite.setAnchorPoint(cc.p(5,5));
	sprite.setPosition(cc.p(size.width/4,size.height / 4));
	//this.addChild(sprite, 0);
        //var sprite_action = cc.MoveTo.create(2,cc.p(20,40));
        //sprite.runAction(sprite_action);
        

	
	var label =new cc.LabelTTF("GAME OVER","Arial");
        label.setFontSize(50);
	label.setPosition(cc.p(500,400));
	label.setColor(cc.color(255,255,255));
	label.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        



	this.addChild(label);
	var menuItem= new cc.MenuItemFont("Restart",Start1);	
        var menu = new cc.Menu(menuItem);
	menu.alignItemsVerticallyWithPadding(40);
	this.addChild(menu);
        return true;
    }
});

var Start1 = function()
{
      var scene = new HelloWorldScene2();
      cc.director.runScene(scene);
      //cc.log("Start Game");
}

var HelloWorldScene3 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer3();
        this.addChild(layer);
    }
});

