class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }
// Check out the container, Check out phaser docs
    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas D name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        
        // right leg
        my.sprite.rightLeg = this.add.sprite(this.bodyX+55, this.bodyY+90,"monsterParts", "leg_redC.png" );
        
        // left leg
        my.sprite.leftLeg = this.add.sprite(this.bodyX-55, this.bodyY+90,"monsterParts", "leg_redC.png" );
        my.sprite.leftLeg.flipX=true;
        
        // right arm
        my.sprite.rightArm = this.add.sprite(this.bodyX+75, this.bodyY+35,"monsterParts", "arm_redE.png" );
        
        // left arm
        my.sprite.leftArm = this.add.sprite(this.bodyX-75, this.bodyY+35,"monsterParts", "arm_redE.png" );
        my.sprite.leftArm.flipX=true;

        // Mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY,"monsterParts", "mouthA.png" );
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+20,"monsterParts","mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        // right eye
        my.sprite.rightEye = this.add.sprite(this.bodyX+20, this.bodyY-20,"monsterParts", "eye_yellow.png" );
        my.sprite.rightEye.setScale(0.65);

        // left eye
        my.sprite.leftEye = this.add.sprite(this.bodyX-20, this.bodyY-20,"monsterParts", "eye_yellow.png" );
        my.sprite.leftEye.setScale(0.65);

        // Horns
        my.sprite.rightHorn = this.add.sprite(this.bodyX+40, this.bodyY-75,"monsterParts", "detail_red_horn_large.png" );
        my.sprite.leftHorn = this.add.sprite(this.bodyX-40, this.bodyY-75,"monsterParts", "detail_red_horn_large.png" );
        my.sprite.leftHorn.flipX = true;


        // Use container to group body parts

        this.my.container = this.add.container(100, 100);

        // Add all body parts to container
        this.my.container.add(my.sprite.body);
        this.my.container.add(my.sprite.rightArm);
        this.my.container.add(my.sprite.leftArm);
        this.my.container.add(my.sprite.rightLeg);
        this.my.container.add(my.sprite.leftLeg);
        this.my.container.add(my.sprite.mouth);
        this.my.container.add(my.sprite.fangs);
        this.my.container.add(my.sprite.rightEye);
        this.my.container.add(my.sprite.leftEye);
        this.my.container.add(my.sprite.rightHorn);
        this.my.container.add(my.sprite.leftHorn);

        
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.keyS.isDown) {
            my.sprite.fangs.visible = false;
            my.sprite.mouth.visible = true;
        }

        if (this.keyF.isDown) {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        }

        if (this.keyA.isDown) {
            my.container.x -= 1;
            
        }else if (this.keyA.isUp) {
            my.container.x -= 0;
        }

        if (this.keyD.isDown) {
            my.container.x += 1;
            
        }else if (this.keyD.isUp) {
            my.container.x += 0;
        }


        

       
    }

}

