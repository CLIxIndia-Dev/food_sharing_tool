 window.onload = function()
 {
 var background;
 var question_text_upper;
 var question_text_lower;
 var answer_text1;
 var cutting_board;
 var instruction_board;
 var instruction_text;
 var tray;
 var video_play;
 var question_text_instruction11;
 var question_text_instruction22;
 var tips = [];
 var count_no_of_attempts = 0;
 var cake_num;
 var cake_no;
 var cakes_on_board = [];
 var plates = [];
 var children = [];
 var cakes = [];
 var check = [];
 var video;
 var number_of_pieces = [];
 var sharing_done_btn;
 var reset_btn;
 var input_answer;
 var linkofdemo;
 var line1;
 var p1 = 0;
 var reg={};
  var cutting_sound;
 var yay_sound;
 var click_sound;
 var help_button;
 var game = new Phaser.Game(800, 640);
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
 var rect = [];
 var playGame = function(game){}
 playGame.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
   game.load.image('background','assets/full_background.png');
   game.load.atlasJSONHash('atlas1', 'assets/spritesheet1.png', 'assets/sprites1.json');
   game.load.atlasJSONHash('atlas2', 'assets/spritesheet2.png', 'assets/sprites2.json');
   game.add.plugin(PhaserInput.Plugin);
   game.load.image('cookie1/2','assets/images/HALF1.png');
    game.load.image('cookie1/3','assets/images/ONE_THIRD_3.png');
    game.load.image('answer_11','assets/answers_l1a1.png');
    game.load.image('cookie1/4','assets/images/ONE_FORTH_4.png');
    game.load.image('cookie1/5','assets/images/ONE_FIFTH_5.png');
    game.load.image('cookie1/6','assets/images/ONE_SIXTH_5.png');
    game.load.atlasJSONHash('answers','assets/atlasanswer1.png','assets/atlasanswer1.json');
    game.load.atlasJSONHash('answerscreens','assets/answers_l1.png','assets/answers_l1.json');
    game.load.image('close_button','assets/close_button_normal.png');
    game.load.webfont('tahoma','Tahoma');
    game.load.webfont('fractionfont','SansFractionsPlain');
    game.load.image('OK_BUTTON_NORMAL','assets/OK_BUTTON_NORMAL.png');
    game.load.atlasJSONHash('hindi_buttons','assets/hindi_buttons.png','assets/hindi_buttons.json');
    game.load.atlasJSONHash('hindi_modals','assets/hindi_modals_l1a1_p1.png','assets/hindi_modals_l1a1_p1.json');
    game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
    game.load.audio('cutting_board1','assets/sounds/cutting_board_sound_chop3.wav');
    //game.load.atlasJSONHash('answerscreens','assets/answers_l1.png','assets/answers_l1.json');


  },
  create : function()
  {
      sessionstart();
    reg.modal = new gameModal(game);
        this.createModals();
         cutting_sound = game.add.audio('cutting_board1');
        yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');
   background = game.add.sprite(0,0,'background');
   var style = { font: "16px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
   question_text_upper = game.add.text(195,10,'4 बच्चों में 3 केक निष्पक्ष रूप से बाँटने में जामुनी की मदद करें।',style);
   var style11 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
   question_text_lower = game.add.text(20,507,'प्रत्येक बच्चे का हिस्सा कितना है ?',style11);
   var style4 = { font: "italic 13px tahoma",fill: "#0000CC", boundsAlignH: "center" , boundsAlignV : "middle" };
   var style5 = { font: "bold italic 12px tahoma",fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
   question_text_instruction11 = game.add.text(20,527,'अपने उत्तर को पूर्ण संख्या या भिन्न के रूप में एंटर करें और अपना उत्तर जाँचने के लिए              पर क्लिक करें।',style4);
   //question_text_instruction11.wordWrap = true;
  //question_text_instruction11.wordWrapWidth = 1600;
   question_text_instruction22 = game.add.text(414,527,'बाँट दिया ',style5);
   answer_text1 = game.add.text(100,557,'केक।',style);
   tray = game.add.sprite(5,83,'atlas2','TRAY');
   instruction_board = game.add.sprite(5,365,'atlas2','INSTRUCTION_BOARD');
   instruction_text = game.add.text();
   rect[0] = game.add.sprite(5,225,null);
   game.physics.enable(rect[0],Phaser.Physics.ARCADE);
   rect[0].body.setSize(197,118,0,0);
   cutting_board = game.add.sprite(5,225,'atlas2','CUTTING_BOARD_WITH_GLOW');
   var buttons1_hover = ['SHARING_BUTTON_MOUSE_OVER', 'RESET_BUTTON_MOUSE_OVER'];
   var buttons1_down = ['SHARING_BUTTON_MOUSE_DOWN','RESET_BUTTON_MOUSE_DOWN'];
   var buttons1 = ['SHARING_BUTTON_NORMAL','RESET_BUTTON_NORMAL'];
   sharing_done_btn = game.add.button(20,586, 'hindi_buttons',this.sharing_done_function,this,'sprite6','sprite10','sprite2');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.9,0.9);
   reset_btn = game.add.button(166, 586,'hindi_buttons',this.reset_function,this,'sprite15','sprite19','sprite14');
   reset_btn.scale.setTo(0.9,0.9);
   var buttons_hover = ['1_MOUSE_OVER','2_MOUSE_OVER','3_MOUSE_OVER','4_MOUSE_OVER','5_MOUSE_OVER','6_MOUSE_OVER'];
   var buttons_down = ['1_MOUSE_DOWN','2_MOUSE_DOWN','3_MOUSE_DOWN','4_MOUSE_DOWN','5_MOUSE_DOWN','6_MOUSE_DOWN'];
   //adding plates
   plates[0] = game.add.sprite(345,185,'atlas2','PLATE_WITHOUT_GLOW');
   plates[1] = game.add.sprite(555,185,'atlas2','PLATE_WITHOUT_GLOW');
   plates[2] = game.add.sprite(345,345,'atlas2','PLATE_WITHOUT_GLOW');
   plates[3] = game.add.sprite(555,345,'atlas2','PLATE_WITHOUT_GLOW');
   var k=1;
   for(var i=0;i<4;i++)
   {
         rect[k] = game.add.sprite(plates[i].x,plates[i].y,null);
         game.physics.enable(rect[k], Phaser.Physics.ARCADE);
         //plates[k].scale.setTo(1.5,1.5);
         rect[k].body.setSize(111,80,0,0);
         //console.log(rect[k]);
         k++;
    }
   //initialising sum for each plate
   for(var k=0;i<4;i++)
   {
    plates[k].sum = 0;
   }
   //adding cakes
   for(var i=0;i<3;i++)
   {
    cakes[i] = game.add.sprite(48 + (i*25), 110,'atlas1','CAKE_WITH_OUT_GLOW');
    cakes[i].inputEnabled = true;
    cakes[i].input.enableDrag(true);
   // cakes[i].achor.x = 0.5;
    cakes[i].weight = 1;
    cakes[i].number = i;
    //cakes[i].events.onDragStart.add(this.addGreenTiles, this);
    //cakes[i].input.enableSnap(50,50, false, true);
    cakes[i].anchor.setTo(0,0);

    game.physics.enable(cakes[i],Phaser.Physics.ARCADE);
    cakes[i].events.onDragStop.add(this.stopDrag,this);
    cakes[i].originalPosition = cakes[i].position.clone();

   }
   cake_num = i +1;
   cakes[2].loadTexture('atlas1','CAKE_WITH_GLOW');


   //adding children
   children[0] = game.add.sprite(383,137,'atlas2','student1');
   children[1] = game.add.sprite(590,137,'atlas2','student3');
   children[2] = game.add.sprite(383,295,'atlas2','student4');
   children[4] = game.add.sprite(590,295,'atlas2','student2');

   //adding buttons


   for(var i=0;i<6;i++)
   {
   number_of_pieces[i] = game.add.button(18+(i*30),309,'atlas1',this.cutting_function,this, buttons_hover[i],buttons[i],buttons_down[i]);
   //number_of_pieces[i].inputEnabled = true;
   //number_of_pieces[i].events.onInputOver.add(this.over, this);
   //number_of_pieces[i].events.onInputUp.add(this.cutting_function,this);
   //number_of_pieces[i].events.onInputOut.add(this.out, this);
   number_of_pieces[i].num = i;
   }
   var style1 = { font: "bold 13px tahoma", fill: "#005DBA", boundsAlignH: "center", boundsAlignV: "middle" };
   linkofdemo = game.add.text(50,335,'  कटिंग टूल का डेमो। ',style1);
   linkofdemo.inputEnabled = true;
   linkofdemo.events.onInputDown.add(this.linkofdemo_function,this);
   var graphics = game.add.graphics(55,352);
   graphics.beginFill("0x005DBA");
   graphics.lineStyle(1,"0x005DBA",1);
   graphics.lineTo(100,0)
   graphics.endFill();

   //line1 = new Phaser.Line(12, 356, 178, 356);
   //line1.stroke = "005DBA";
   var style2 = { font: "italic 12px tahoma",fill: "#0000CC", boundsAlignH: "center" };
   var style3 = { font: "bold italic 12px tahoma",fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
   instruction_text = game.add.text(24,384,'केक को छोटे टुकड़ों में काटने के लिए                  का उपयोग करें और केक के टुकड़ों को प्रत्येक बच्चे के पास ले जाकर रखें।',style2);

  instruction_text.wordWrap = true;
  instruction_text.wordWrapWidth = 175;
  var instruction_text1 = game.add.text(25,404, 'कटिंग टूल ',style3);
  help_button = game.add.sprite(732,3,'hindi_buttons','sprite30');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
   input_answer = game.add.inputField(20, 547, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 50,
    height : 9,
    padding: 8,
    borderWidth: 2,
    borderColor: '#0EC2F5',
    borderRadius: 6,
    //placeHolderColor: '#767676',
    //placeHolder:"Enter whole number or fractions only.",

});


},
update : function()
{
  if ((/(^(\+|-)?\d+|-?\d+\/-?\d+)$/.test(input_answer.value)) == false)
  {
            sharing_done_btn.tint = 0x666677;
            sharing_done_btn.inputEnabled = false;
        }
        else
        {
          sharing_done_btn.tint = 0xffffff;
           sharing_done_btn.inputEnabled = true;
        }
},
/* render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);

          }, */
  stopDrag : function(item,pointer)
  {
    click_sound.play('',0,1);
    cake_no = item.number;
    var c =0;



    for(var i=0;i<5;i++)
    {
      var pos;
            //game.physics.arcade.enable(cakes[cake_no]);
      check[i]=game.physics.arcade.overlap(cakes[cake_no],rect[i]);
      //check[i] = Phaser.Rectangle.containsRect(cakes[cake_no].body, rect[i].body);
      console.log(rect[i]);
      console.log(check[i]);

      if(check[i] == true)
      {
        if(check[0] == true)
        {
            for(var x1=0;x1<4;x1++)
           {
             console.log('hihihi1234');
             cutting_board.loadTexture('atlas2','CUTTING_BOARD_WITHOUT_GLOW');
             plates[x1].loadTexture('atlas2','PLATE_WITH_GLOW');

           }
            for(var i=0;i<cakes.length;i++)
            {
              if(i !== cake_no)
              {
              var check_cake_on_board1 = game.physics.arcade.overlap(cakes[i],rect[0]);
               if(check_cake_on_board1 == true)
               {
                  cakes[cake_no].position.copyFrom(cakes[cake_no].originalPosition);
               }
            }  }
         }
        pos = i;
        c++;
      }

    }
    if(c>=1)
    {
      //cakes[cake_no].x = rect[pos].x + rect[pos].width * 0.5;

      //cakes[cake_no].y = rect[pos].y + rect[pos].height * 0.5;
      //cakes[cake_no].anchor.setTo(0.1,0.1);
      cakes[cake_no].loadTexture('atlas1','CAKE_WITH_OUT_GLOW');
       for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = true;
    }
      //cakes[cake_no - 1].loadTexture('atlas1','CAKE_WITH_GLOW');
      //glow plates
      /*if(pos == 0)
      {
       console.log('hihihi123');
      for(var x1=0;x1<4;x1++)
      {
        console.log('hihihi1234');
        cutting_board.loadTexture('atlas2','CUTTING_BOARD_WITHOUT_GLOW');
        plates[x1].loadTexture('atlas2','PLATE_WITH_GLOW');

      }
    } */
    if(cake_no == 0)
        {
          sharing_done_btn.inputEnabled = true;
        }

    }

    else
    {
      cakes[cake_no].position.copyFrom(cakes[cake_no].originalPosition);
    }


  },
  over : function(item)
  {

   //item.loadTexture('atlas1', buttons_hover[item.num]);
  },
  help_function : function()
   {
    window.open("./assets/fraction-chart_copywrite.png");
   },
  out : function(item)
  {
   //item.loadTexture('atlas1', buttons[item.num]);
  },
  linkofdemo_function : function()
  {
     game.state.start('videoScreen');
  },
  cutting_function : function(item)
  {
    cakes_on_board = [];
   //cutting_sound.play('',0,1);
   for(var i=0; i<cakes.length; i++)
   {
     var check_cake_on_board = game.physics.arcade.overlap(cakes[i],rect[0]);
     console.log(check_cake_on_board);
     if(check_cake_on_board == true && cakes[i].weight == 1)
     {

       cakes_on_board.push(cakes[i]);
     }

   }
   console.log('hi');
   var num_of_pieces = item.num+1;
   console.log(num_of_pieces);
   if(cakes_on_board.length >0)
   {
   cutting_board.loadTexture('atlas2','CUTTING_BOARD_WITHOUT_GLOW');
   switch(num_of_pieces)
   {

    case 1:
    for(var i = 0; i <cakes_on_board.length; i++)
    {
      cakes_on_board[i].destroy();
    }
    cakes[cake_num] = game.add.sprite(70,240, 'atlas1','CAKE_WITH_OUT_GLOW');
    cakes[cake_num].events.onDragStart.add(this.startDrag_1,this);
    cakes[cake_num].events.onDragStop.add(this.stopDrag_1,this);
    cakes[cake_num].inputEnabled = true;
    cakes[cake_num].input.enableDrag(true);
    cakes[cake_num].weight = 1;
    cakes[cake_num].number = cake_num;
    cakes[cake_num].originalPosition = cakes[cake_num].position.clone();
    game.physics.enable(cakes[cake_num],Phaser.Physics.ARCADE);
    for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    cake_num++;
    break;
    case 2:
     for(var i = 0; i <cakes_on_board.length; i++)
    {
      cakes_on_board[i].destroy();
    }
    this.circle(95,270,2,'cookie1/2',1.1,0.5);
    for(var x1=0; x1 < 6; x1++)
    {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 3:
    for(var i = 0; i <cakes_on_board.length; i++)
    {
      cakes_on_board[i].destroy();
    }
    this.circle(95,270,3,'cookie1/3',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
    {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 4:
    for(var i = 0; i <cakes_on_board.length; i++)
    {
      cakes_on_board[i].destroy();
    }
    this.circle(95,270,4,'cookie1/4',-0.1,-0.1);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 5:
    for(var i = 0; i <cakes_on_board.length; i++)
    {
      cakes_on_board[i].destroy();
    }
    this.circle(95,270,5,'cookie1/5',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 6:
    for(var i = 0; i <cakes_on_board.length; i++)
    {
      cakes_on_board[i].destroy();
    }
    this.circle(95,270,6,'cookie1/6',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;

   }
 }
  else
  {
    console.log("Please put cookie on board");
  }
   //item.loadTexture('atlas1', buttons_down[item.num]);
  },
      circle: function(x1,y1,cuts,sprite,anx,any){
    var angle =90;
    var NoOfSection = cuts;
    var divisonangle = (360/NoOfSection);
    console.log(divisonangle);
    for (p=0;p < NoOfSection; p++) {
      var x =x1
      var y =y1
      cakes[cake_num] = game.add.sprite(x,y,sprite);
      cakes[cake_num].anchor.setTo(anx,any);
      cakes[cake_num].inputEnabled = true;
      cakes[cake_num].input.enableDrag(true);
      cakes[cake_num].weight = 1/NoOfSection;
      cakes[cake_num].number = cake_num;
      game.physics.enable(cakes[cake_num],Phaser.Physics.ARCADE);
      cakes[cake_num].events.onDragStart.add(this.startDrag_1,this);
      cakes[cake_num].events.onDragStop.add(this.stopDrag_1,this);
      cakes[cake_num].originalPosition = cakes[cake_num].position.clone();
      console.log(angle);
      if(cakes[cake_num].weight == '0.5')
      {
        tips[p1] = new Phasetips(game,{
        targetObject: cakes[cake_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: "1/2",
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
    });
      }
        if(cakes[cake_num].weight == '0.3333333333333333')
        {
        tips[p1] = new Phasetips(game,{
        targetObject: cakes[cake_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: "1/3",
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        if(cakes[cake_num].weight == '0.25')
        {
        tips[p1] = new Phasetips(game,{
        targetObject: cakes[cake_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/4',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        if(cakes[cake_num].weight == '0.20')
        {
          tips[p1] = new Phasetips(game,{
        targetObject: cakes[cake_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/5',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        console.log("weight" + cakes[cake_num].weight);
        if(cakes[cake_num].weight == '0.16666666666666666')
        {
          tips[p1] = new Phasetips(game,{
        targetObject: cakes[cake_num],
        font : 'fractionfont',
        //atlasParent :'atlas2', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/6',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
    console.log(tips[cake_num]);
      cakes[cake_num].angle = angle;
      angle += divisonangle;
      console.log(angle);
      cake_num++;
      p1++;
      }
},
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite1'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 160,
            offsetY: -105,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : "text",
           content: "आगे बढ़ने के लिए टैब को बंद करें|",
          offsetX : 0,
          offsetY: 65,
          fontFamily: "Arial",
          fontSize: 15,
          align: "left",
          color: "0xFF0000",


        },
         {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_HAPPY',
          offsetX : 40,
          offsetY:  - 140,
        },

          ]

    });
     //modal 2
        reg.modal.createModal({
        type: "modal2",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 195,
            offsetY: -120,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons',
          content: 'sprite24',
          offsetX : 120,
          offsetY: 27,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 160,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite6'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 184,
            offsetY: -70,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : "sprite",
          atlasParent: "hindi_buttons",
          content: "sprite24",
          offsetX : 120,
          offsetY: 20,
          callback: function()
          {
            reg.modal.hideModal("modal3");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal4",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal4");
                    }
        },
        {
          type : "image",
          //atlasParent: "atlas1",
          content: 'OK_BUTTON_NORMAL',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal4");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
            reg.modal.createModal({
        type: "modal5",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite2'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 170,
            offsetY: -100,
            callback: function(){
                      reg.modal.hideModal("modal5");
                    }
        },
        {
          type : "sprite",
          atlasParent: "hindi_buttons",
          content: "sprite24",
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal5");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 150,
        },
          ]
    });
             reg.modal.createModal({
        type: "modal6",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite2'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -120,
            callback: function(){
                      reg.modal.hideModal("modal6");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'atlas1',
          content: 'TRY_AGAIN_BUTTON_NORMAL',
          offsetX : 120,
          offsetY: 35,
          callback: function()
          {
            reg.modal.hideModal("modal6");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 160,
        },
          ]
    });
        reg.modal.createModal({
        type: "modal7",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite3'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -100,
            callback: function(){
                      reg.modal.hideModal("modal7");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'atlas1',
          content: 'TRY_AGAIN_BUTTON_NORMAL',
          offsetX : 120,
          offsetY: 40,
          callback: function()
          {
            reg.modal.hideModal("modal7");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 160,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal8",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals',
            content : 'sprite8'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 190,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'atlas1',
          content: 'TRY_AGAIN_BUTTON_NORMAL',
          offsetX : 105,
          offsetY: 26,
          callback: function()
          {
            reg.modal.hideModal("modal8");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'answerscreens',
          content: 'SMILEY_SAD',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
  },
  showModal1:function() {
     yay_sound.play('',0,1);
    reg.modal.showModal("modal1");
},
showModal2:function() {
    reg.modal.showModal("modal2");
},
showModal3:function() {
    reg.modal.showModal("modal3");
},
showModal4:function() {
    reg.modal.showModal("modal4");
},
showModal5:function() {
    reg.modal.showModal("modal5");
},
showModal6:function() {
    reg.modal.showModal("modal6");
},
showModal7:function() {
    reg.modal.showModal("modal7");
},
showModal8 : function()
{
  reg.modal.showModal("modal8");
},
 popup_answer : function()
 {

 },
 reset_function : function()
 {
  count_no_of_attempts = 0;
  game.state.start('PlayGame')
 },
 startDrag_1 : function(item)
 {

 },
 stopDrag_1 : function(item)
 {
  click_sound.play('',0,1);
   var cake_position = item.number;
   var c3 = 0;
   for(var i=1;i<5;i++)
   {
    var check_cake_on_plate = game.physics.arcade.overlap(cakes[cake_position],rect[i]);
    console.log(check_cake_on_plate);
    if(check_cake_on_plate == true)
    {
      c3++;
      //make all plates go glowless
      for(var j=0; j<4; j++)
      {
        plates[j].loadTexture('atlas2','PLATE_WITHOUT_GLOW');
      }
    }
  }
    if(c3 == 0)
    {
      cakes[cake_position].position.copyFrom(cakes[cake_position].originalPosition);
    }



 },
 sharing_done_function : function()
 {
  var splitted_text = [];
  var cd = "";
  var sumineachplate = [0,0,0,0];
  var weightinplate = [];
  count_no_of_attempts = count_no_of_attempts + 1;
  if(count_no_of_attempts < 4)
  {
  var expected_sum = 0.75;
  var l = 0;
  var k =0;
  var check_cake_on_plate;
  if(input_answer.value == '')
  {
    this.showModal3();
  }
  else
  {
    cd = input_answer.value;
  splitted_text = cd.split("/");
  console.log("a : " + splitted_text[0] );
  console.log("b :" + splitted_text[1] );
  var is_ans_true = this.division(splitted_text[0],splitted_text[1],3,4);
  console.log(is_ans_true);
    var k1=0; // counter variable for weightinplate data collection
  for(var i=0;i<4;i++)
  {
    plates[i].sum = 0;
    for(var j=0;j<cakes.length;j++)
    {
     var check_cake_on_plate = game.physics.arcade.overlap(cakes[j],rect[i+1]);
     console.log(check_cake_on_plate);
     if(check_cake_on_plate == true)
     {
      plates[i].sum = plates[i].sum + cakes[j].weight;
      weightinplate[k1] = cakes[j].weight;
      k1=k1+1;
     }
    }
    console.log(expected_sum);
    console.log(plates[i].sum);
    if(plates[i].sum == expected_sum)
    {
     l=l+1;
    }
    if(plates[i].sum == 0)
    {
      k=k+1;
    }
      sumineachplate[i] = plates[i].sum; //for data storage
  }
    if(k == 4 && input_answer.value!== null)
    {
      console.log('modal5');
     this.showModal5();
    }

    else if(l == 4 && (input_answer.value == '3/4' || is_ans_true == true))
    {
      console.log('modal1');
      this.showModal1();
    }
    else if( l==4 && (input_answer.value!=='3/4' || is_ans_true == false))
    {
      console.log('modal2');
      this.showModal2();
    }
    else if( l!==4 && (input_answer.value == '3/4' || is_ans_true == true))
    {
      if(count_no_of_attempts == 1)
      {
         console.log('modal6');
        this.showModal6();
      }
      else if(count_no_of_attempts >= 2 || count_no_of_attempts == 3)
      {
        console.log('modal7');
        this.showModal7();
      }
      else
      {
        console.log('modal8');
        this.showModal8();
      }

    }
    else if( l!==4 && (input_answer.value!=='3/4' || is_ans_true == false))
    {
      console.log('modal81');
      this.showModal8();
    }
    else
    {
      console.log('modal4');
      this.showModal4();
    }
 } }

 else
 {
  game.state.start('answer_screen');

 }
 clueEnd(count_no_of_attempts,cd,sumineachplate,weightinplate);
},
division : function(a,b,c,d)
 {
   console.log(a/b);
   console.log(c/d);
   var and = a/b;
   var mans = c/d;
    var value;
    if (and == mans)
    {
      value = true;
    }
    else
    {
      value = false;
    }

    return value;
}
}
var answerScreen = function(game){}
    answerScreen.prototype =
    {

      preload : function()
      {
       game.load.atlasJSONHash('answerscreens','assets/answers_l1.png','assets/answers_l1.json');
       game.load.image('answers1','assets/answers_l1a1.png');
       //game.load.image('background','assets/full_background.png');
      },
      create : function()
      {

       game.stage.backgroundColor = "#00FA9A";
       var answer_screen1 = game.add.sprite(0,120,'answers1');
       //answer_screen1.scale.setTo(2, 2);
       var style = { font: "20px Arial", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'सही वितरण का यह एक तरीका है। 3 केक 4 बच्चों में बराबर–बराबर बाँटने के दूसरे तरीके सोचें। अगली गतिविधि पर जाने के लिए  अगला पर क्लिक करें। ',style);
       text1.wordWrap = true;
       text1.wordWrapWidth = 700;
      }
    }
   var videoScreen = function(game){}
    videoScreen.prototype =
    {

      preload : function()
      {
        game.add.image('back','assets/back-button.png')
        game.load.video('demo','assets/demo.mp4');
      },
      create : function()
      {
        video_play = 0;
        game.stage.backgroundColor = '#232323';
        video = game.add.video('demo');
        video.play(true);
        var sprite = video.addToWorld(0,40,0,0);
        var style2 = { font: "bold 20px tahoma", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
        var back_text = game.add.text(690,10,'वापस',style2);
        back_text.inputEnabled = true;
        console.log(video.loop);

        video.loop = false;
        video.onComplete.add(this.video_stop,this);
        back_text.events.onInputDown.add(this.back_function,this);
        //var image4 = game.add.image(550,590,'back',this.back_function,this);
        console.log(video.onComplete);

    //  true = loop


       game.input.onDown.add(this.pause, this);
      },
      pause : function()
      {

      video.paused = (video.paused) ? false : true;

      },
      video_stop : function()
      {

       game.state.start('PlayGame');

      },
      back_function : function()
      {
        game.state.start('PlayGame');
      }

    }
    game.state.add('videoScreen',videoScreen);
game.state.add('PlayGame', playGame);
game.state.add('answer_screen',answerScreen);
game.state.start('PlayGame');
}
