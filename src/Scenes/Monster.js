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
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
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
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY,"monsterParts", "eye_yellow.png" );

        // right eye
        my.sprite.rightEye = this.add.sprite(this.bodyX+20, this.bodyY-20,"monsterParts", "eye_yellow.png" );
        my.sprite.rightEye.setScale(0.65);

        // left eye
        my.sprite.leftEye = this.add.sprite(this.bodyX-20, this.bodyY-20,"monsterParts", "mouthG.png" );
        my.sprite.leftEye.setScale(0.65);


        // Use container to group body parts
        myContainer = this.add.container(100, 100);

        // Add all body parts to container
        myContainer.add(my.sprite.body);
        myContainer.add(my.sprite.rightArm);
        myContainer.add(my.sprite.leftArm);


    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}

