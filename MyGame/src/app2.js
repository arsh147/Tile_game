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

var INITIALISED2 =false;
var s=0;
var pre=-1;
var ran =0;
var m=1;
var HelloWorldLayer2 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        
        var size = cc.winSize;
       // First sprite
       this.sprite1= new cc.Sprite.create(res.FirstColor_png);
	this.sprite1.setPosition(cc.p(size.width/2,size.height/2));
        this.sprite1.setAnchorPoint(cc.p(0,0));
	this.addChild(this.sprite1, 0);

        // Second sprite
        this.sprite2= new cc.Sprite.create(res.SecondColor_png);
	this.sprite2.setPosition(cc.p(size.width/2,size.height/2));
        this.sprite2.setAnchorPoint(cc.p(0,1));
	this.addChild(this.sprite2, 0);

        // Third sprite
        this.sprite3= new cc.Sprite.create(res.ThirdColor_png);
	this.sprite3.setPosition(cc.p(size.width/2,size.height/2));
        this.sprite3.setContentSize(400,400);
        this.sprite3.setAnchorPoint(cc.p(1,0));
	this.addChild(this.sprite3, 0);

        // Fourth sprite
        this.sprite4= new cc.Sprite.create(res.DiffColor_png);
	this.sprite4.setPosition(cc.p(size.width/2,size.height/2));
        this.sprite4.setAnchorPoint(cc.p(1,1));
	this.addChild(this.sprite4, 0);
        
         this.sprite5= new cc.Sprite.create(res.NewDiff_png);
	    this.sprite5.setPosition(cc.p(size.width/2,size.height/2));
            this.sprite5.setAnchorPoint(cc.p(1,1));
	    this.addChild(this.sprite5, 0);
 	
	this.label =new cc.LabelTTF("Score "+ s,"Arial");
                this.label.setFontSize(40);
	         this.label.setPosition(cc.p(size.width*0.50, size.height*0.95));
	         this.label.setColor(cc.color(255,255,255));
		this.addChild(this.label);
	        this.label.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        //var sprite_act =cc.TintBy.create(1,234,0,0);
	//sprite4.runAction(sprite_act);
       
        //var random = Math.random( );
	
        this.schedule(this.change_color,1); 

            var self=this;

	    cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: function (touches, event) {
       			var touch = touches[0];
                var x = touch.getLocationX();
                  //var x=Math.floor(touches.getLocationX().X);
				var y=touch.getLocationY();
				cc.log(x);
				//cc.log(ran);
				 self.call1(x,y); 
                     

            }
        }), this);
        

        return true;
    },

    
    end: function()
    {
         var scene = new HelloWorldScene3();
         cc.director.runScene(scene);
    },

    //var self2 = this;
    call1:function(x,y)
    {
		
		
                //cc.log();
		var self2 = this;
		if(ran==3 && m==1 &&(x>80 && x<480) && (y>0 && y<320) ){
					s++;
					self2.label.setString("Score " + s);
					//cc.log("Cricket");
  				}
				else if(ran==2 && m==1 && x>80 && x<480 && y>320 && y<640 ){
					s++;
					self2.label.setString("Score " + s);
					//cc.log("Cricket");
						}
				else if(ran==1 && m==1 && x>480 && x<880 && y>0 && y<320 ){
					s++;
					self2.label.setString("Score " + s);
				}
				else if(ran==0 && m==1 && x>480 && x<880 && y>320 && y<640 ){
					s++;
					self2.label.setString("Score " + s);
					}
				else{
					//cc.log(s);
					//m++;
 				     self2.end();
  				}
				
   },
	
    change_color:function()
    {
  	    ran = (Math.floor(Math.random() * 10))%4;
            var size1 = cc.winSize;
            //cc.log(ran);
	    
            //var sprite_act =cc.TintBy.create(1,0,255,0);
            //sprite5.runAction(sprite_act);
	    if(ran==pre)
            { 
                ran++;
                ran=ran %4;
            }
	    switch(ran) {
                 
                 case 0:
	            this.sprite5.setAnchorPoint(cc.p(0,0));
                    break;
    		 case 1:
        	    this.sprite5.setAnchorPoint(cc.p(0,1));	
                  break;
		 case 2:
        	     this.sprite5.setAnchorPoint(cc.p(1,0));
                  break;
		case 3:
        	     this.sprite5.setAnchorPoint(cc.p(1,1));
                  break;
                
            } 
	    //cc.log(ran);
            pre= ran;
            

	    /*if(cc.sys.capabilities.hasOwnProperty('mouse'))
            {
               cc.eventManager.addListener(
               {
                   event: cc.EventListener.MOUSE,

                   onMouseDown: function(event)
		   {
 			if(event.getButton() == cc.EventMouse.BUTTON_LEFT)
 			{
			     //cc.log("Hello");
				//schedule(change_color,1);
				var x=Math.floor(event.getLocationX());
				var y=Math.floor(event.getLocationY());
				//cc.log(x);
				//cc.log(ran);
				 self.call1(x,y);
                                
				
 			}
    		   }
		   
               }

               

              ,this);
	    }*/
     },
      
});


var HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(INITIALISED2== false)
	{
	    if(s!=0) s=0;
            var layer = new HelloWorldLayer2();
            this.addChild(layer);
	}
    }
});

