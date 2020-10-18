class Form{
    constructor(){
        this.play = createButton('Play');
        this.shopB=createButton('Shop');
        this.Bspeed=createButton('Increase Bullet Speed');
        this.Health=createButton('Increase Health');
        this.damage=createButton('Increase Bullet Damage');
        this.img1=createButton('Equip');
        this.img2=createButton('Equip')
        this.img3=createButton('Equip');
        this.Reset=createButton('Equip');
    }
    display(){
        this.play.position(width/2,height/2);
        this.shopB.position(width/2,height/2+50);
        this.play.mousePressed(()=>{
            
            gameState='Play';
        });
        this.shopB.mousePressed(()=>{
            gameState='Shop';
            damageShow='Show';
            speedShow='Show';
            healthShow='Show';
            form.img1.show();
            form.img2.show();
            form.img3.show();
            form.Reset.show();
        })
    }
    hide(){
        this.play.hide();
        this.shopB.hide();
    }
  
    
    shop(){
        //damageadsfffffffffffffffffffffffffffffffffffffffffffffffffff
        if(damageShow==='Show'){
        this.damage.show();
        }else{
          this.damage.hide();
        }
        Dsprite=image(Damage,200,80)
        this.damage.position(150,150);
        
        
        this.damage.mousePressed(()=>{
          if(coins>=damagecost&&damageCount<=2){
          damage=damage+1
          coins=coins-damagecost;
          damagecost=damagecost+10
          damageCount=damageCount+1;
          if(damageCount==2){
            damageShow='Hide'
            }
          }
        })
      
      textSize(20)
      fill('yellow')
      text('Cost: '+damagecost,200,200);
        //speedds ahbafffffffffffffffffffffffffffffffffffffff
        if(speedShow==='Show'){
          this.Bspeed.show();
          }else{
            this.Bspeed.hide();
          }
          Ssprite=image(Damage,400,80)
          this.Bspeed.position(350,150);
          
          this.Bspeed.mousePressed(()=>{
            if(coins>=speedcost&&speedcount<=3){
            BSpeed=BSpeed+0.2
            speedcount=speedcount+1;
            coins=coins-speedcost
            speedcost=speedcost+10
            if(speedcount===3){
            speedShow='Hide'
            }
           }
          })
        
        fill('blue')
        text('Cost: '+speedcost,400,200)
          //healthdsaignnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnrffffffffffffffffff
          if(healthShow==='Show'){
            this.Health.show();
            }else{
              this.Health.hide();
            }
            Hsprite=image(health,575,80)
            this.Health.position(550,150);
            
            this.Health.mousePressed(()=>{
              if(coins>=50){
                playerHealth=30
                healthShow='Hide'
                coins=coins-50
              }
          })
        
        fill('cyan')
        text('Cost:50',575,200)
         //imagesgvrrrrrrrrrygggggggggggggggggggggggggg
          this.img1.position(200,450)
          this.img1.mousePressed(()=>{
            player.changeImage(2)
          })
          sprite1=image(vaccine2,200,400,40,40);
          //sgbxfgbdxvg
          this.img2.position(600,450);
          
          
            this.img2.mousePressed(()=>{
              if(coins>=250){
            player.changeImage(3);
            this.img1.hide();
            this.img3.hide();
            this.Reset.hide();
            this.img2.hide();
            damageShow="Hide";
            speedShow='Hide';
            healthShow='Hide';
            damage=4;
            BSpeed=1.2;
            enemyrate=40;
            playerHealth=50;
          }
          })
          
        
          textSize(20);
          fill('orange');
          text('Cost: 250 for vip',585,500);
          sprite2=image(vaccine3,600,400,40,40);
          //dgvsdgsdvgsd
          this.img3.position(400,450)
          this.img3.mousePressed(()=>{
            player.changeImage(4)
          })
          sprite3=image(vaccine4,400,400,40,40);
          this.Reset.position(200,570)
          this.Reset.mousePressed(()=>{
            player.changeImage(1)
          })
          sprite4=image(vaccine,200,525,40,40);
          //endgggggggggggggggggggggggggggggggggggg
      }
}