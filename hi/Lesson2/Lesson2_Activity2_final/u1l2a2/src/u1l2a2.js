 window.onload = function()
 {
 var background;
  var count_no_of_attempts = 0;
  var count_no_of_attempts_1 = 0;
  var count_no_of_attempts_2 = 0;
  var count_no_of_attempts_3 = 0;
 var question_text_upper;
 var question_text_lower;
 var instruction_text;
 var answer_text1;
 var groups = [];
  var yay_sound;
 var click_sound;
 var cutting_board;
 var rect1 = [];
var number_of_pieces = [];
 var linkofdemo;
  var tips = [];
 var plates = [];
 var workers1 = [];
 var cutting_board;
 var worker_check_on_group = [];
 var plates1 = [];
 var paratha_no;
 var check = [];
 var parathas_on_board = [];
 var workers2 = [];
 var plates2 = [];
 var parathas1 = [];
 var input_answer1;
 var parathas2= [];
 var paratha_num;
 var parathas2_num;
 var sharing_done_btn;
 var reset_btn;
 var radio_buttons = [];
 var radio_texts = [];
 var selected = false;
 var rotis = [];
 var workers = [];
 var rect = [];
 var style3;
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
var buttons_hover = ['1_MOUSE_OVER','2_MOUSE_OVER','3_MOUSE_OVER','4_MOUSE_OVER','5_MOUSE_OVER','6_MOUSE_OVER'];
var buttons_down = ['1_MOUSE_DOWN','2_MOUSE_DOWN','3_MOUSE_DOWN','4_MOUSE_DOWN','5_MOUSE_DOWN','6_MOUSE_DOWN'];
 var worker_names = ['sprite121','sprite115','sprite129','sprite147','sprite143','sprite114','sprite136','sprite144','sprite122','sprite138','sprite130'];
 var worker_names1 = ['09','02','08','06','14','11'];
 var p1 = 0;
 var reg={};
 var help_button;
 var game = new Phaser.Game(800, 640);
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
 var rect = [];
 var done_button;
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
    game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
    game.load.webfont('tahoma','Tahoma');
    game.load.atlasJSONHash('modals','assets/l2a2_modals.png','assets/l2a2_modals.json');
    game.load.image('close_button','assets/close_button_normal.png');
    game.load.atlasJSONHash('workers','assets/workers.png','assets/workers.json');
    game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');

  },
  create : function()
  {
       reg.modal = new gameModal(game);
        this.createModals();
    background = game.add.sprite(0,0,'background');
    var style = { font: "12px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(185,15,'समूह A में मज़दूरों की संख्‍या की तुलना में पराठे तीन कम हैं । अत: मैनें इसी तर्क की पालना की और समूह B को उस समूह में मज़दूरों की संख्‍या की तुलना में तीन पराठे कम दे दिए।',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 500;
    question_text_upper.lineSpacing = -5;
    groups[0] = game.add.sprite(30,95,'lesson2','WORKER_BACK_GROUP_A');
    groups[1] = game.add.sprite(30,310,'lesson2','WORKER_BACK_GROUP_B');
    plates[0] = game.add.sprite(29,207,'lesson2','FOOD_PLATE');
    plates[1] = game.add.sprite(29,423,'lesson2','FOOD_PLATE');
    for (var i =0; i<8; i++)
    {
      if(i<5)
      {
       rotis[i] = game.add.sprite(230 + (i*70), 220,'lesson2','PARATHA');
      }
      if(i >=5)
      {
        rotis[i] = game.add.sprite(238 + ((i-4)*70), 435,'lesson2','PARATHA');
      }
    }
    for(var j = 0;j<14;j++)
    {
      if(j<8)
      {
      workers[j] = game.add.sprite(50 + (j*90),127,'lesson2',worker_names[j]);
      }
      if(j>=8)
      {
       workers[j] = game.add.sprite(120 + ((j-8)*100),339,'workers',worker_names1[j-8]);
      }
    }
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,550,'क्‍या आपके विचार से पराठों का वितरण से निष्पक्ष रूप हुआ है?',style4);
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,569,'नीचे दिए गए विकल्‍पों में से एक को चुने और          पर क्लिक करें।',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(280,569,'किया  ',style2);
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,590,'lesson2','radio-highlighted');
    radio_texts[0] = game.add.text(92,593,'हाँ',style3);
    radio_texts[1] = game.add.text(197,593,'नहीं ',style3);
    //radio_texts[2] = game.add.text(306,593,'Workers in both groups got the same share',style3);
    //radio_texts[3] = game.add.text(642,593,'I do not know',style3);
    radio_buttons[1] = game.add.sprite(176,590,'lesson2','radio-highlighted');
    //radio_buttons[2] = game.add.sprite(285,590,'lesson2','radio-highlighted');
    //radio_buttons[3] = game.add.sprite(623,590,'lesson2','radio-highlighted');
    for(var i=0;i<2;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }
    
     done_button = game.add.button(77,618,'hindi_buttons6',this.done_Action,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;

  },
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 205,
            offsetY: -83,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p1');
          }

        },
          ]
        
    });
   },
    showModal1:function() {
    reg.modal.showModal("modal1");
},
  done_Action : function() 
  {
    if(radio_buttons[0].selectedcheck == true)
    {
      
      this.showModal1();
       
    } 
    else if(radio_buttons[1].selectedcheck == true)
    {
      game.state.start('question_two');
      
    } 
  },
  input_function : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<2;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('lesson2','radio-highlighted');  
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('lesson2','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
    },
    input_function1 : function(item)
    {
        
    }
 }
 var question_two = function(game){}
 question_two.prototype = 
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.image('background','assets/full_background.png');
    game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
    game.load.webfont('tahoma','Tahoma');
    game.load.image('scrnshot1','assets/hi_prnt.png');
    game.load.image('lower_band','assets/lower.png');
     game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');

  },
  create : function()
  {
    var screenshot = game.add.sprite(0,0,'scrnshot1');
    screenshot.scale.setTo(1.02,1);
    var lowerband = game.add.sprite(0,508,'lower_band');
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,550,'किस समूह में मज़दूरों को भोजन का बड़ा हिस्‍सा मिला?',style4);
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,569,'नीचे दिए हुए विकल्‍पों में से एक को चुनों और        पर क्लिक करें।',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(280,569,'किया ',style2);
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,590,'lesson2','radio-highlighted');
    radio_texts[0] = game.add.text(92,593,'समूह A',style3);
    radio_texts[1] = game.add.text(197,593,'समूह B',style3);
    radio_texts[2] = game.add.text(306,593,'दोनों समूहों के मज़दूरों को समान हिस्सा  मिला।',style3);
    radio_texts[3] = game.add.text(642,593,'मुझे नहीं मालुम',style3);
    radio_buttons[1] = game.add.sprite(176,590,'lesson2','radio-highlighted');
    radio_buttons[2] = game.add.sprite(285,590,'lesson2','radio-highlighted');
    radio_buttons[3] = game.add.sprite(623,590,'lesson2','radio-highlighted');
     for(var i=0;i<4;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function1,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }
    
     done_button = game.add.button(77,618,'hindi_buttons6',this.done_Action1,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;


  },
  done_Action1 : function()
  {
     game.state.start('question_three');
  },
  input_function1 : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<4;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('lesson2','radio-highlighted');
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('lesson2','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
  }
}
  var a1_p1 = function(game){}
  a1_p1.prototype=
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
   game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
   game.load.webfont('tahoma','Tahoma');
   game.load.image('top','assets/top.png');
    game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
        game.load.atlasJSONHash('workers','assets/workers.png','assets/workers.json');
  },
  create : function()
  {
   //reg.modal = new gameModal(game);
        //this.createModals();
    background = game.add.sprite(0,0,'top');
    var style = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(125,11,'प्रत्‍येक समूह से 2 मज़दूरों के उप-समूह के हिस्‍से का पता लगाएँ।',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style1 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(130,28,'1. समूह A के लिए                 पर क्लिक करके शुरू करें। . ',style1);
    var style2 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(215,28,'भोजन बाँटें  ',style2);
    var instruction_text2 = game.add.text(130,42,'2. अब समूह B के लिए                पर क्लिक करके बाँटने का काम पूरा करें।',style1);
    var instruction_text3 = game.add.text(229,42,' भोजन बाँटें  ',style2); 
    groups[0] = game.add.sprite(30,95,'lesson2','WORKER_BACK_GROUP_A');
    groups[1] = game.add.sprite(30,380,'lesson2','WORKER_BACK_GROUP_B');
    plates[0] = game.add.sprite(29,207,'lesson2','FOOD_PLATE');
    plates[1] = game.add.sprite(29,493,'lesson2','FOOD_PLATE');
     for (var i =0; i<8; i++)
    {
      if(i<5)
      {
       rotis[i] = game.add.sprite(240 + (i*70), 220,'lesson2','PARATHA');
      }
      if(i >=5)
      {
        rotis[i] = game.add.sprite(271 + ((i-5)*70), 510,'lesson2','PARATHA');
      }
    }
    for(var j = 0;j<14;j++)
    {
      if(j<8)
      {
      workers[j] = game.add.sprite(100 + (j*80),127,'lesson2',worker_names[j]);
      }
      if(j>=8)
      {
       workers[j] = game.add.sprite(140 + ((j-8)*90),409,'workers',worker_names1[j-8]);
      }
    }
    share_button_A = game.add.button(303,300,'hindi_buttons6',this.share_a_function,this,'hindi_SHARE_FOOD_PACKET_BUTTON_over','hindi_SHARE_FOOD_PACKET_BUTTON_normal','hindi_SHARE_FOOD_PACKET_BUTTON_down');
    share_button_B = game.add.sprite(303,580,'hindi_buttons6','hindi_SHARE_FOOD_PACKET_BUTTON_deactivate');
  },
  share_a_function : function()
  {
    game.state.start('a1_p2');
  }

  }
  var question_three = function(game){}
  question_three.prototype = 
  {
    init : function()
    {
      game.load = new CustomLoader(game);
    },
    preload : function()
    {
     game.load.webfont('tahoma','Tahoma');
    game.load.image('scrnshot1','assets/hi_prnt.png');
    game.load.image('lower_band','assets/lower.png'); 
    game.add.plugin(PhaserInput.Plugin);
     game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
        game.load.image('close_button','assets/close_button_normal.png');
    },
    create : function()
    {
       reg.modal = new gameModal(game);
        this.createModals();
    var screenshot = game.add.sprite(0,0,'scrnshot1');
    screenshot.scale.setTo(1.02,1);
    var lowerband = game.add.sprite(0,508,'lower_band');
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,545,'आप इस निष्‍कर्ष पर कैसे पहुँचे?',style4);
    instruction_text = game.add.text(78,560,'अपना उत्‍तर नीचे एन्‍टर करें और        पर क्लिक करें। ',style1);
    var style2 = { font: " bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(225,560,' किया ',style2);
    var input_answer = game.add.inputField(78, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 550,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0EC2F5',
    borderRadius: 6,
    
});
    done_button = game.add.button(77,618,'hindi_buttons6',this.showModal1,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     


    }, 
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 205,
            offsetY: -83,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p1');
          }

        },
          ]
        
    });
   },
    showModal1:function() 
  {
    reg.modal.showModal("modal1");
  },

  }
  var a1_p2 = function(game){}
  a1_p2.prototype=
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    //game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
    game.load.atlasJSONHash('modals','assets/l2a2_modals.png','assets/l2a2_modals.json');
   game.load.image('close_button','assets/close_button_normal.png');
   game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
   game.load.webfont('tahoma','Tahoma');
   game.load.image('bg','assets/groupa_bg.png');
   game.load.atlasJSONHash('buttons','assets/spritesheet_112.png','assets/sprites_112.json');
   game.load.atlasJSONHash('workers','assets/workers.png','assets/workers.json');
    game.add.plugin(PhaserInput.Plugin);
     game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
       game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
    game.load.audio('cutting_board1','assets/sounds/cutting_board_sound_chop3.wav');

  },
  create : function()
  {
    reg.modal = new gameModal(game);
        this.createModals();
       cutting_sound = game.add.audio('cutting_board1');
        yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');

   background = game.add.sprite(0,0,'bg');
  var style4 = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(66,542,'समूह A में 2 मज़दूरों वाले प्रत्‍येक उप-समूह का हिस्‍सा कितना है?',style4);
    instruction_text = game.add.text(115,20,'1.                  का उपयोग करते हुए प्रत्‍येक मज़दूर को एक समूह में लेते हुए दो-दो मज़दूरों के छोटे समूह बनाएँ। ',style1);
    instruction_text.wordWrap = true; 
    instruction_text.wordWrapWidth = 580; 
    instruction_text.lineSpacing = -5;
    var instruction_text2 = game.add.text(118,39,'2. अब 5 पराठों को निष्पक्ष रूप से इन उप-समूहों में बाँट दें  और प्रत्‍येक उप-समूह के हिस्‍से का पता लगाएँ।',style1)
    var style2 = { font: "bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(134,20,'ग्रुपिंग टूल  ',style2);
    question_text_upper = game.add.text(110,5,'समूह A के 8 मज़़दूरों में 5 पराठों का निष्पक्ष वितरण करें।',style4);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style11 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text_lower = game.add.text(66,560,'अपना उत्‍तर एक पूर्ण संख्‍या या भिन्‍न के रूप में एन्‍टर करें और अपने उत्‍तर की जाँच के लिए              क्लिक करें।  ',style11);  
    var instruction_text_lower1 = game.add.text(476,560,'बाँट दिया',style2);
   rect[0] = game.add.sprite(72,156,null);
   game.physics.enable(rect[0],Phaser.Physics.ARCADE);
   rect[0].body.setSize(313,143,0,0);
   rect[1] = game.add.sprite(72,320,null);
   game.physics.enable(rect[1],Phaser.Physics.ARCADE);
   rect[1].body.setSize(313,175,0,0);
   //adding workers 
   for(var i=2;i<6;i++)
   {   
   if(i<4)
   {
   rect[i] = game.add.sprite((410 + (i%2)*170),162,null);
   game.physics.enable(rect[i],Phaser.Physics.ARCADE);
   rect[i].body.setSize(156,63,0,0);
   rect[i].numberof_workeringroup = 0;
   }
   else
   {
   rect[i] = game.add.sprite((410 + (i%2)*170),347,null);
   game.physics.enable(rect[i],Phaser.Physics.ARCADE);
   rect[i].body.setSize(156,63,0,0);
   rect[i].numberof_workeringroup = 0;
   }
   }
   for(i=6;i<10;i++)
   {
    if(i<8)
    {
    rect[i] = game.add.sprite((420+(i%2)*167),239,null);
   game.physics.enable(rect[i],Phaser.Physics.ARCADE);
   rect[i].body.setSize(140,70,0,0);
   rect[i].sum = 0;
   }
   else
   {
   rect[i] = game.add.sprite((420+(i%2)*167),426,null);
   game.physics.enable(rect[i],Phaser.Physics.ARCADE);
   rect[i].body.setSize(140,70,0,0);
   rect[i].sum = 0;
   }
   }
   for(var i=0;i<8;i++)
   {
    if(i<4)
    {
    workers1[i] = game.add.sprite(94 + (i*60),165,'lesson2',worker_names[i]);
    workers1[i].scale.setTo(1,0.9);
     workers1[i].inputEnabled = true;
    workers1[i].input.enableDrag(true);
    workers1[i].originalPosition = workers1[i].position.clone();
    workers1[i].events.onDragStop.add(this.workers_stopDrag,this);
    workers1[i].number = i;
    }
    else
    {
    workers1[i] = game.add.sprite(94 + ((i-4)*60),240,'lesson2',worker_names[i]);
    workers1[i].scale.setTo(1,0.9);
    workers1[i].inputEnabled = true;
    workers1[i].input.enableDrag(true);
    workers1[i].originalPosition = workers1[i].position.clone();
    workers1[i].events.onDragStop.add(this.workers_stopDrag,this);
    workers1[i].number = i;
    
    }
   }
   
   var style1 = { font: "bold 13px tahoma", fill: "#005DBA", boundsAlignH: "center", boundsAlignV: "middle" };
   
   sharing_done_btn = game.add.button(66,615, 'hindi_buttons6',this.sharing_done_function,this,'hindi_SHARING_BUTTON_over','hindi_SHARING_BUTTON_normal','hindi_SHARING_BUTTON_down');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.8,0.8);
   reset_btn = game.add.button(210, 615,'hindi_buttons6',this.reset_function,this,'hindi_RESET_BUTTON_over','hindi_RESET_BUTTON_normal','hindi_RESET_BUTTON_down');
   reset_btn.scale.setTo(0.8,0.8);
   
    for(var i=0;i<10;i++)
    {
      if(i<2)
      {
        parathas1[i] = game.add.sprite(120,346 + (i*60),'lesson2','PARATHA');
         
         parathas1[i].weight = 1;
         parathas1[i].number = i;
         parathas1[i].anchor.setTo(0,0);
         parathas1[i].originalPosition = parathas1[i].position.clone();
      }
      if(i>=2 && i <6)
      {
        parathas1[i] = game.add.sprite(200,339 + ((i-2)*30),'workers','HALF_PARATHA');
         
         parathas1[i].weight = 0.5;
         parathas1[i].number = i;
         parathas1[i].anchor.setTo(0,0);
         parathas1[i].originalPosition = parathas1[i].position.clone();
      }
      if(i>=6)
      {
        parathas1[i] = game.add.sprite(283,339 + ((i-6)*30),'workers','1_4th_PARATHA');
         parathas1[i].weight = 0.25;
         parathas1[i].number = i;
         parathas1[i].anchor.setTo(0,0);
         parathas1[i].originalPosition = parathas1[i].position.clone();
      }
    }
   help_button = game.add.sprite(725,5,'hindi_buttons6','hindi_HELP_OVER');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
   input_answer1 = game.add.inputField(66, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 50,
    height : 9,
    padding: 8,
    borderWidth: 2,
    borderColor: '#0EC2F5',
    borderRadius: 6,
    
});
   var answer_text1 = game.add.text(140,590,'पराठे ।',style4);
   
  },
   update : function()
{
  if ((/(^(\+|-)?\d+|-?\d+\/-?\d+)$/.test(input_answer1.value)) == false)
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
  workers_stopDrag : function(item)
  {
     click_sound.play('',0,1);
    worker_check_on_group = [];
    var worker_no = item.number;
    var c = 0;
    game.physics.enable(workers1[worker_no],Phaser.Physics.ARCADE);
    for(var i=2;i<6;i++)
    {
     worker_check_on_group[i-2] = game.physics.arcade.overlap(workers1[worker_no],rect[i]);
     console.log(worker_check_on_group[i-2]);
     if(worker_check_on_group[i-2] == true)
     {
       c++;
     }
   }
      if(c==0)
     {
      workers1[worker_no].position.copyFrom(workers1[worker_no].originalPosition);   
     }
     //checking if all r not on worker area
       var c1 = 0;
    for(var r=0;r<8;r++)
    {
    game.physics.enable(workers1[r],Phaser.Physics.ARCADE);
    var check_if_worker_on_area = game.physics.arcade.overlap(workers1[r],rect[0]);
    
    if(check_if_worker_on_area == true)
    {
      c1++;
    }
    }
    if(c1 == 0)
    {
     
      for(var i =0;i<10;i++)
      {
        parathas1[i].inputEnabled = true;
        parathas1[i].input.enableDrag(true);
        parathas1[i].events.onDragStop.add(this.parathas_stopDrag,this);
        
      }
    }
    
  },
 /* render : function()
  {
   game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
  }, */
  help_function : function()
  {
   window.open("../u1l2a2/assets/fraction-chart_copywrite.png");
  },
  parathas_stopDrag : function(item)
  {
     click_sound.play('',0,1);
    paratha_no = item.number;
    var c =0;
    var c1 = 0;
    game.physics.arcade.enable(parathas1[paratha_no]);
    for(var i=6;i<10;i++)
    {
      var pos;
      check[i]=game.physics.arcade.overlap(parathas1[paratha_no],rect[i]);
      console.log(check[i]);

      if(check[i] == true)
      {
        c++;
      }     
    }

    if(c == 0)
    {
      parathas1[paratha_no].position.copyFrom(parathas1[paratha_no].originalPosition);  
    }
    for(var i=0;i<10;i++)
    {
      game.physics.arcade.enable(parathas1[i]);
      check[10] = game.physics.arcade.overlap(parathas1[i],rect[2]);
      if(check[10] == false)
      {
        c1++;
      }
    }
    if(c1 == 10)
    {
      sharing_done_btn.inputEnabled = true;
      sharing_done_btn.events.onInputDown.add(this.sharing_done_function,this);

    }

  },
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite8'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -95,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            //start next level 
            game.state.start('a1_p3');
          }

        },
         {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite89',  
          offsetX : 20,
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
            atlasParent :'hindi_modals6',
            content : 'sprite16'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -115,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 130,
          offsetY: 45,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 35,
          offsetY:  - 160,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite9'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 147,
            offsetY: -80,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 95,
          offsetY: 25,
          callback: function()
          {
            reg.modal.hideModal("modal3");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 20,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal4",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -86,
            callback: function(){
                      reg.modal.hideModal("modal4");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 110,
          offsetY: 38,
          callback: function()
          {
            reg.modal.hideModal("modal4");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
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
            atlasParent :'hindi_modals6',
            content : 'sprite3'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal5");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal5");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
             reg.modal.createModal({
        type: "modal6",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite11'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal6");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal6");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
       /* reg.modal.createModal({
        type: "modal7",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 700,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal7");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 120,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal7");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });  */
           reg.modal.createModal({
        type: "modal8",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal8");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
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
  sharing_done_function : function()
  {
    worker_check_on_group = [];
   count_no_of_attempts = count_no_of_attempts + 1;
  if(count_no_of_attempts < 4)
  {
  var expected_sum = 1.25;
  var l = 0;
  var k =0;
  var m = 0;
  var check_cake_on_plate;
  if(input_answer1.value == '')
  {
    //please enter answer in textbox
    this.showModal3();
  }
  else
  {
  for(var i=0;i<4;i++)
  {
    rect[i+2].numberof_workeringroup = 0;
    rect[i+6].sum = 0;
      for(var j1 = 0; j1<8; j1++)
     {
      game.physics.arcade.enable(workers1[j1]);
      worker_check_on_group = game.physics.arcade.overlap(workers1[j1],rect[i+2]);
      if(worker_check_on_group == true)
      {
        rect[i+2].numberof_workeringroup = rect[i+2].numberof_workeringroup + 1;
      }
     }
    for(var j=0;j<10;j++)
    {
      game.physics.arcade.enable(parathas1[j]);
     var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[j],rect[i+6]);
     console.log(check_cake_on_plate);
     if(check_paratha_on_plate == true)
     {
      rect[i+6].sum = rect[i+6].sum + parathas1[j].weight;
      //console.log('platesum'+'i'+plates1[i].sum);
     }
    }
    //console.log(expected_sum);
    //console.log(i + 'sum' + plates1[i].sum);
    if(rect[i+6].sum == expected_sum)
    {
     l=l+1;
    }
    if(rect[i+6].sum == 0)
    {
      k=k+1;
    }
  }
   for(i=2;i<6;i++)
   {
    console.log('noofworkers in ' + (i) + rect[i].numberof_workeringroup);
    if(rect[i].numberof_workeringroup == 2)
    {
     console.log('mmm' + m);
     m = m+ 1;
    }
   }
   console.log('m : ' + m);
    if((k == 4 && m==4) && input_answer1.value!== null)
    {
     this.showModal5();
    }

    else if((l == 4 && m==4) && input_answer1.value == '5/4')
    {
      this.showModal1();
    }
    else if((l==4 && m==4) && input_answer1.value == '1.25')
    {
      this.showModal1();
      console.log('correct answer but please enter fractional value in textbox');
    }
    else if((l==4 && m == 4)&& input_answer1.value!=='5/4')
    {   
      console.log('modal2');
      this.showModal2();
    }
    else if((l!==4 || m!==4) && input_answer1.value == '5/4')
    {
      if(count_no_of_attempts == 1)
      {
        this.showModal6();
      }
      else if(count_no_of_attempts == 2 || count_no_of_attempts == 3)
      {
        console.log('modal6');
        this.showModal6();
      }
      else 
      {
        console.log('modal8');
        this.showModal8();
      }
      
    }
    else 
    {
      this.showModal4();
    }
 } } 
 else 
 {
  game.state.start('answer_screen');

 }
},
  reset_function : function()
  {
    count_no_of_attempts = 0;
  game.state.start('a1_p2');
  }
  }
  var answer_screen = function(game){}
    answer_screen.prototype = 
    {
      
      preload : function()
      {
       game.load.image('answer1','assets/printscreen_2_1.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
        game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
       //game.load.atlasJSONHash('')
      },
      create : function()
      {
       game.stage.backgroundColor = "#00000"; 
       var answer_screen1 = game.add.sprite(50,100,'answer1');
       answer_screen1.scale.setTo(0.85, 0.85);
       var style = { font: "13px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'यह निष्पक्ष वितरण का एक तरीका है। 4 उप-समूहों में 5 पराठे वितरित करने के अन्‍य ठीक तरीके सोचें।',style);
       var style1 = { font: "14px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text2= game.add.text(20,45,'जारी रखने के लिए अगला पर क्लिक करें।',style1);


       text1.wordWrap = true;
       text1.wordWrapWidth = 800;
       var next_button = game.add.sprite(680,550,'hindi_buttons6','hindi_NEXT_BUTTON_over');
       next_button.inputEnabled = true;
       next_button.events.onInputDown.add(this.next1_function,this);

      },
      next1_function : function()
      {
        game.state.start('a1_p3');
      }
    }
  
  var a1_p3 = function(game){}
  a1_p3.prototype = 
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
   game.load.image('top','assets/top.png');
   game.load.image('scrnsht','assets/ppscrn.png');
    game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
  },
  create : function()
  {
    background = game.add.sprite(0,0,'top');
    var style = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(125,11,'प्रत्‍येक समूह से 2 मज़दूरों के उप-समूह के हिस्‍से का पता लगाएँ।',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style1 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(130,28,'1. समूह A के लिए                  पर क्लिक करके शुरू करें I  ',style1);
    var style2 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(210,28,'भोजन बाँटें  ',style2);
    var instruction_text2 = game.add.text(130,42,'2. फिर समूह B के लिए                   पर क्लिक करें और समूह B के लिए वितरण पूरा करें।',style1);
    var instruction_text3 = game.add.text(230,42,'भोजन बाँटें   ',style2); 
    var scrnn = game.add.sprite(0,80,'scrnsht');
    scrnn.scale.setTo(1,1);
    share_button_B = game.add.button(303,590,'hindi_buttons6',this.share_b_function,this,'hindi_SHARE_FOOD_PACKET_BUTTON_over','hindi_SHARE_FOOD_PACKET_BUTTON_normal','hindi_SHARE_FOOD_PACKET_BUTTON_down');

  },
  share_b_function : function()
  {
    game.state.start('a1_p4');
  }

  }
  var a1_p4 = function(game){}
  a1_p4.prototype = 
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    //game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
    game.load.atlasJSONHash('modals','assets/l2a2_modals.png','assets/l2a2_modals.json');
    game.load.atlasJSONHash('workers','assets/workers.png','assets/workers.json');
     game.load.image('close_button','assets/close_button_normal.png');
    
   game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
   game.load.webfont('tahoma','Tahoma');
   game.load.image('bg','assets/groupb_bg.png');
   game.load.atlasJSONHash('buttons','assets/spritesheet_112.png','assets/sprites_112.json');
    game.add.plugin(PhaserInput.Plugin);
     game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
       game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
    game.load.audio('cutting_board1','assets/sounds/cutting_board_sound_chop3.wav');

  },
  create : function()
  {
    reg.modal = new gameModal(game);
        this.createModals();
     yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');
   background = game.add.sprite(0,0,'bg');
  var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(66,545,'समूह B में 2 मज़दूरों के प्रत्‍येक उप समूह का हिस्‍सा क्‍या है?',style4);
    instruction_text = game.add.text(117,23,'1.                 का उपयोग करते हुए प्रत्‍येक मज़दूर को समूह में लेते हुए दो-दो मज़दूरों के छोटे समूह बनाएँ। ',style1);
    instruction_text.wordWrap = true; 
    instruction_text.wordWrapWidth = 580; 
    instruction_text.lineSpacing = -5;
    var instruction_text2 = game.add.text(118,39,'2. अब 3 पराठे निष्पक्ष रूप से इन उप-समूहों में बाँट दें और प्रत्‍येक उप-समूह के हिस्से का पता लगाएँ।  ',style1)
    var style2 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(132,23,'ग्रुपिंग टूल  ',style2);
    question_text_upper = game.add.text(113,6,'समूह A के 6 मज़दूरों में 3 पराठेनिष्पक्ष रूप से वितरित करें।',style4);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style11 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text_lower = game.add.text(66,560,'अपना उत्‍तर एक पूर्ण संख्‍या या भिन्‍न के रूप में एन्‍टर करें और आपने उत्‍तर की जाँच के लिए             पर क्लिक करें। ',style11);  
    var instruction_text_lower1 = game.add.text(448,560,'बाँट दिया',style2);
   rect1[0] = game.add.sprite(72,156,null);
   game.physics.enable(rect1[0],Phaser.Physics.ARCADE);
   rect1[0].body.setSize(313,143,0,0);
   rect1[1] = game.add.sprite(72,320,null);
   game.physics.enable(rect1[1],Phaser.Physics.ARCADE);
   rect1[1].body.setSize(313,175,0,0);
   //adding workers 
   for(var i=2;i<5;i++)
   {   
   if(i<4)
   {
   rect1[i] = game.add.sprite((407 + (i%2)*170),158,null);
   game.physics.enable(rect1[i],Phaser.Physics.ARCADE);
   rect1[i].body.setSize(156,72,0,0);
   rect1[i].numberof_workeringroup = 0;
   }
   else
   {
   rect1[i] = game.add.sprite((407 + (i%2)*170),347,null);
   game.physics.enable(rect1[i],Phaser.Physics.ARCADE);
   rect1[i].body.setSize(156,72,0,0);
   rect1[i].numberof_workeringroup = 0;
   }
   }
   for(i=5;i<8;i++)
   {
    if(i<7)
    {
    rect1[i] = game.add.sprite((409+(i-5)*167),239,null);
   game.physics.enable(rect1[i],Phaser.Physics.ARCADE);
   rect1[i].body.setSize(152,65,0,0);
   rect1[i].sum = 0;
   }
   else
   {
   rect1[i] = game.add.sprite(409,425,null);
   game.physics.enable(rect1[i],Phaser.Physics.ARCADE);
   rect1[i].body.setSize(152,65,0,0);
   rect1[i].sum = 0;
   }
   }
   for(var i=0;i<6;i++)
   {
    if(i<3)
    {
    workers2[i] = game.add.sprite(94 + (i*100),165,'lesson2',worker_names[i]);
    workers2[i].scale.setTo(1,0.9);
     workers2[i].inputEnabled = true;
    workers2[i].input.enableDrag(true);
    workers2[i].originalPosition = workers2[i].position.clone();
    workers2[i].events.onDragStop.add(this.workers_stopDrag,this);
    workers2[i].number = i;
    }
    else
    {
    workers2[i] = game.add.sprite(94 + ((i-3)*100),240,'lesson2',worker_names[i]);
    workers2[i].scale.setTo(1,0.9);
    workers2[i].inputEnabled = true;
    workers2[i].input.enableDrag(true);
    workers2[i].originalPosition = workers2[i].position.clone();
    workers2[i].events.onDragStop.add(this.workers_stopDrag,this);
    workers2[i].number = i;
    
    }
   }
   
   var style1 = { font: "bold 13px tahoma", fill: "#005DBA", boundsAlignH: "center", boundsAlignV: "middle" };
   
   sharing_done_btn = game.add.button(66,615, 'hindi_buttons6',this.sharing_done_function,this,'hindi_SHARING_BUTTON_over','hindi_SHARING_BUTTON_normal','hindi_SHARING_BUTTON_down');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.8,0.8);
   reset_btn = game.add.button(210, 615,'hindi_buttons6',this.reset_function,this,'hindi_RESET_BUTTON_over','hindi_RESET_BUTTON_normal','hindi_RESET_BUTTON_down');
   reset_btn.scale.setTo(0.8,0.8);
   
    for(var i=0;i<8;i++)
    {
      if(i<4)
      {
        parathas1[i] = game.add.sprite(140,339 + ((i)*30),'workers','HALF_PARATHA');
         
         parathas1[i].weight = 0.5;
         parathas1[i].number = i;
         parathas1[i].anchor.setTo(0,0);
         parathas1[i].originalPosition = parathas1[i].position.clone();
      }
      else
      {
        parathas1[i] = game.add.sprite(260,339 + ((i-4)*30),'workers','1_4th_PARATHA');
         parathas1[i].weight = 0.25;
         parathas1[i].number = i;
         parathas1[i].anchor.setTo(0,0);
         parathas1[i].originalPosition = parathas1[i].position.clone();
      }
    }
   help_button = game.add.sprite(725,5,'hindi_buttons6','hindi_HELP_OVER');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
   input_answer1 = game.add.inputField(66, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 50,
    height : 9,
    padding: 8,
    borderWidth: 2,
    borderColor: '#0EC2F5',
    borderRadius: 6,
    
});
   var answer_text1 = game.add.text(140,590,' पराठे ।',style4);
   
  },
   update : function()
{
  if ((/(^(\+|-)?\d+|-?\d+\/-?\d+)$/.test(input_answer1.value)) == false)
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
  workers_stopDrag : function(item)
  {
     click_sound.play('',0,1);
   worker_check_on_group = [];
    var worker_no = item.number;
    var c = 0;
    game.physics.enable(workers2[worker_no],Phaser.Physics.ARCADE);
    for(var i=2;i<5;i++)
    {
               game.physics.enable(rect1[i],Phaser.Physics.ARCADE);

     worker_check_on_group[i-2] = game.physics.arcade.overlap(workers2[worker_no],rect1[i]);
     console.log(worker_check_on_group[i-2]);
     if(worker_check_on_group[i-2] == true)
     {
       c++;
     }
   }
      if(c==0)
     {
      workers2[worker_no].position.copyFrom(workers2[worker_no].originalPosition);   
     }
     //checking if all r not on worker area
       var c1 = 0;
    for(var r=0;r<6;r++)
    {
    game.physics.enable(workers2[r],Phaser.Physics.ARCADE);
    var check_if_worker_on_area = game.physics.arcade.overlap(workers2[r],rect1[0]);
    
    if(check_if_worker_on_area == true)
    {
      c1++;
    }
    }
    if(c1 == 0)
    {
     
      for(var i =0;i<8;i++)
      {
        parathas1[i].inputEnabled = true;
        parathas1[i].input.enableDrag(true);
        parathas1[i].events.onDragStop.add(this.parathas_stopDrag,this);
        
      }
    }
    
  },
  /*render : function()
  {
   game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
  },*/
  help_function : function()
  {
   window.open("../u1l2a2/assets/fraction-chart_copywrite.png");
  },
  parathas_stopDrag : function(item)
  {
     click_sound.play('',0,1);
    paratha_no = item.number;
    var c =0;
    var c1 = 0;
    game.physics.arcade.enable(parathas1[paratha_no]);
    for(var i=5;i<8;i++)
    {
      var pos;
      check[i]=game.physics.arcade.overlap(parathas1[paratha_no],rect1[i]);
      console.log(check[i]);

      if(check[i] == true)
      {
        c++;
      }     
    }

    if(c == 0)
    {
      parathas1[paratha_no].position.copyFrom(parathas1[paratha_no].originalPosition);  
    }
    for(var i=0;i<8;i++)
    {
      game.physics.arcade.enable(parathas1[i]);
      check[8] = game.physics.arcade.overlap(parathas1[i],rect1[2]);
      if(check[8] == false)
      {
        c1++;
      }
    }
    if(c1 == 8)
    {
      sharing_done_btn.inputEnabled = true;
      sharing_done_btn.events.onInputDown.add(this.sharing_done_function,this);

    }

  },
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -95,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            //start next level 
            game.state.start('a1_p5');
          }

        },
         {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite89',  
          offsetX : 20,
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
            atlasParent :'hindi_modals6',
            content : 'sprite16'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -100,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 130,
          offsetY: 37,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 35,
          offsetY:  - 140,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite9'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -80,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 95,
          offsetY: 25,
          callback: function()
          {
            reg.modal.hideModal("modal3");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 20,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal4",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -86,
            callback: function(){
                      reg.modal.hideModal("modal4");
                    } 
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 110,
          offsetY: 38,
          callback: function()
          {
            reg.modal.hideModal("modal4");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
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
            atlasParent :'hindi_modals6',
            content : 'sprite3'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal5");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal5");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
             reg.modal.createModal({
        type: "modal6",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite11'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal6");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal6");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal8",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal8");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite90',  
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
  sharing_done_function : function()
  {
    worker_check_on_group = [];
   count_no_of_attempts_1 = count_no_of_attempts_1 + 1;
  if(count_no_of_attempts_1 < 4)
  {
  var expected_sum = 1;
  var l = 0;
  var k =0;
  var m = 0;
  var check_cake_on_plate;
  if(input_answer1.value == '')
  {
    //please enter answer in textbox
    this.showModal3();
  }
  else
  {
  for(var i=0;i<3;i++)
  {
    rect1[i+2].numberof_workeringroup = 0;
    rect1[i+5].sum = 0;
      for(var j1 = 0; j1<6; j1++)
     {
      game.physics.arcade.enable(workers2[j1]);
      worker_check_on_group = game.physics.arcade.overlap(workers2[j1],rect1[i+2]);
      if(worker_check_on_group == true)
      {
        rect1[i+2].numberof_workeringroup = rect1[i+2].numberof_workeringroup + 1;
      }
     }
    for(var j=0;j<8;j++)
    {
      game.physics.arcade.enable(parathas1[j]);
     var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[j],rect1[i+5]);
     console.log(check_cake_on_plate);
     if(check_paratha_on_plate == true)
     {
      rect1[i+5].sum = rect1[i+5].sum + parathas1[j].weight;
      //console.log('platesum'+'i'+plates1[i].sum);
     }
    }
    //console.log(expected_sum);
    //console.log(i + 'sum' + plates1[i].sum);
    if(rect1[i+5].sum == expected_sum)
    {
     l=l+1;
    }
    if(rect1[i+5].sum == 0)
    {
      k=k+1;
    }
  }
   for(i=2;i<5;i++)
   {
    console.log('noofworkers in ' + (i) + rect1[i].numberof_workeringroup);
    if(rect1[i].numberof_workeringroup == 2)
    {
     console.log('mmm' + m);
     m = m+ 1;
    }
   }
   console.log('m : ' + m);
    if((k == 3 && m==3) && input_answer1.value!== null)
    {
     this.showModal5();
    }

    else if((l == 3 && m==3) && input_answer1.value == '1')
    {
      this.showModal1();
    }
    else if((l==3 && m == 3)&& input_answer1.value!=='1')
    {   
      console.log('modal2');
      this.showModal2();
    }
    else if((l!==4 || m!==4) && input_answer1.value == '1')
    {
      if(count_no_of_attempts_1 == 1)
      {
        this.showModal6();
      }
      else if(count_no_of_attempts_1 == 2 || count_no_of_attempts_1 == 3)
      {
        console.log('modal6');
        this.showModal6();
      }
      else 
      {
        console.log('modal8');
        this.showModal8();
      }
      
    }
    else 
    {
      this.showModal4();
    }
 } } 
 else 
 {
  game.state.start('answer_screen_2');

 }
},
  reset_function : function()
  {
  count_no_of_attempts_1 = 0;
  game.state.start('a1_p4');
  }
  }
    var answer_screen_2 = function(game){}
    answer_screen_2.prototype = 
    {
      
      preload : function()
      {
       game.load.image('answer2','assets/printscreen_2_2.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
       //game.load.atlasJSONHash('')
        game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
      },
      create : function()
      {
       game.stage.backgroundColor = "#00000"; 
       var answer_screen1 = game.add.sprite(50,100,'answer2');
       answer_screen1.scale.setTo(0.85, 0.95);
       var style = { font: "15px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'यह निष्पक्ष वितरण का एक तरीका है। उप-समूहों में 3 पराठे ठीक से बाँटने के अन्‍य तरीके सोचें',style);
       var style1 = { font: "15px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text2= game.add.text(20,45,'जारी रखने के लिए अगला पर क्लिक करें।',style1);


       text1.wordWrap = true;
       text1.wordWrapWidth = 800;
       var next_button = game.add.sprite(680,550,'hindi_buttons6','hindi_NEXT_BUTTON_over');
       next_button.inputEnabled = true;
       next_button.events.onInputDown.add(this.next1_function,this);

      },
      next1_function : function()
      {
        game.state.start('a1_p5');
      }
    }
     var a1_p5 = function(game){}
    a1_p5.prototype = 
    {
      
      preload : function()
      {

       game.load.image('answer2','assets/last_q_1.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
       game.load.image('lower','assets/lower.png');
      game.load.atlasJSONHash('sprite111', 'assets/l2a2_final.png', 'assets/l2a2_final.json');
      game.load.image('close_button','assets/close_button_normal.png');
       game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
        game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
       game.load.audio('yay','assets/sounds/yay.wav');
      },
      create : function()
      {
         yay_sound = game.add.audio('yay');
         reg.modal = new gameModal(game);
        this.createModals(); 
       var answer_screen1 = game.add.sprite(0,0,'answer2');
       answer_screen1.scale.setTo(1.001,1.01);
       var lowerband = game.add.sprite(0,500,'lower');

       lowerband.scale.setTo(1,0.95);
         var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        question_text_lower = game.add.text(78,540,'किस समूह में मज़़दूरों को प्रति व्‍यक्ति अधिक भोजन मिला?',style4);
        var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,560,'नीचे दी गई सूची में से एक विकल्‍प चुनो और           पर क्लिक करें।',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(270,560,'किया ',style2);
    radio_buttons[0] = game.add.sprite(77,578,'lesson2','radio-highlighted');
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_texts[0] = game.add.text(92,580,'समूह A',style3);
    radio_texts[1] = game.add.text(197,580,'समूह B',style3);
    radio_texts[2] = game.add.text(306,580,'दोनों समूहों के मजदूरों को समान हिस्सा मिला। ',style3);
    radio_buttons[1] = game.add.sprite(176,578,'lesson2','radio-highlighted');
    radio_buttons[2] = game.add.sprite(285,578,'lesson2','radio-highlighted');
       help_button = game.add.sprite(725,5,null);
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);

    for(var i=0;i<3;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function1,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }
    
     done_button = game.add.button(77,607,'hindi_buttons6',this.next1_function,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;

      },
      input_function1 : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<3;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('lesson2','radio-highlighted');
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('lesson2','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
  },
   /*render : function()
  {
   game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
  },*/
  help_function : function()
  {
   window.open("../u1l2a2/assets/fraction-chart_copywrite.png");
  },
       createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite15'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -90,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p66');
          }

        },
         {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite12',  
          offsetX : 20,
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
            atlasParent :'hindi_modals6',
            content : 'sprite14'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -90,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 130,
          offsetY: 34,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite18'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 205,
            offsetY: -100,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons6',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 95,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p66');
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',  
          offsetX : 20,
          offsetY:  - 190,
        },
          ]
    });
        },
        showModal1:function() {
            yay_sound.play('',0,1);
    console.log('modal1');
    reg.modal.showModal("modal1");
},
showModal2:function() {
   console.log('modal2');
    reg.modal.showModal("modal2");
},
showModal3:function() {
   console.log('modal3');
    reg.modal.showModal("modal3");
},

      next1_function : function()
      {
        count_no_of_attempts_2 = count_no_of_attempts_2 + 1;
        if(count_no_of_attempts_2 < 3)
        {
        if(radio_buttons[0].selectedcheck == true)
        {
          this.showModal1();
        }
        else if(radio_buttons[1].selectedcheck == true)
        {
          this.showModal2();
        }
        else
        {
         this.showModal2();
        }
        }
        else
        {
         this.showModal3();
        }
      },
    }
     var a1_p66 = function(game){}
    a1_p66.prototype = 
    {
      
       preload : function()
      {
       game.load.image('answer2','assets/last_q_1.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
       game.load.image('lower','assets/lower.png');
       game.add.plugin(PhaserInput.Plugin);
       game.load.image('close_button','assets/close_button_normal.png');
        game.load.atlasJSONHash('hindi_buttons6','assets/hindi_buttons6.png','assets/hindi_buttons6.json');
       game.load.atlasJSONHash('hindi_modals6','assets/hi_l2a2_modals.png','assets/hi_l2a2_modals.json');
       game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
       game.load.atlasJSONHash('sprite111', 'assets/l2a2_final.png', 'assets/l2a2_final.json');

      },
      create : function()
      {
       reg.modal = new gameModal(game);
        this.createModals(); 
       var answer_screen1 = game.add.sprite(0,0,'answer2');
       answer_screen1.scale.setTo(1.001,1.01);
       var lowerband = game.add.sprite(0,500,'lower');
       lowerband.scale.setTo(1,0.95);
        var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        question_text_lower = game.add.text(78,540,'आपने कैसे तय किया कि किस समूह को प्रति मज़दूर अधिक भोजन मिला?',style4);
        var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,560,'अपने अंतर को नीचे एन्‍टर करें और           पर क्लिक करें।',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(237,560,'किया ',style2);
 var input_answer = game.add.inputField(78, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 550,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0EC2F5',
    borderRadius: 6,
    
});
    done_button = game.add.button(77,618,'hindi_buttons6',this.showModal1,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
  },
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals6',
            content : 'sprite17'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -90,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          
          type : "text",
           content: "आगे बढ़ने के लिए टैब को बंद करें|",
          offsetX : 0,
          offsetY: 40,
          fontFamily: "Arial",
          fontSize: 15,
          align: "left",
          color: "0xFF0000",


        },
       

          ]
        
    });
},
showModal1:function() {
    console.log('modal1');
    reg.modal.showModal("modal1");
},
    }

game.state.add('PlayGame', playGame);
game.state.add('question_two',question_two);
game.state.add('question_three',question_three);
game.state.add('a1_p1',a1_p1);
game.state.add('a1_p2',a1_p2);
game.state.add('answer_screen',answer_screen);
game.state.add('answer_screen_2',answer_screen_2);
game.state.add('a1_p3',a1_p3);
game.state.add('a1_p4',a1_p4);
game.state.add('a1_p5',a1_p5);
game.state.add('a1_p66',a1_p66);
game.state.start('PlayGame');
}


 


