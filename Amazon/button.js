class button {
    constructor() {

    if(gameState === 0){
    this.fridge1 = createButton("BUY")
	this.mobile1 = createButton("BUY")
	this.watch1 = createButton("BUY")
	this.camera1 = createButton("BUY")
	this.laptop1 = createButton("BUY")

    fridge = createSprite(140,320);
	fridge.addImage(fridge_img)
	fridge.scale = 0.5

	mobile = createSprite(390, 300);
	mobile.addImage(mobile_img);
	mobile.scale = 0.37;

	laptop = createSprite(650,310);
	laptop.addImage(laptop_img);
	laptop.scale = 0.7;

	watch = createSprite(900,310)
	watch.addImage(watch_img);
	watch.scale = 0.37;

	camera = createSprite(1140,300);
	camera.addImage(camera_img);
	camera.scale = 0.5;
    }



    }
    
    display() {
        this.fridge1.position(125,520);
	    this.mobile1.position(380,520);
        this.laptop1.position(630,520);
        this.watch1.position(885,520);
	    this.camera1.position(1135,520);

        this.fridge1.mousePressed(()=> {
            this.laptop1.hide();
            this.mobile1.hide();
            this.camera1.hide();
            this.watch1.hide();
            this.fridge1.hide();

            fridge.destroy();
            mobile.destroy();
            camera.destroy();
            watch.destroy();
            laptop.destroy();

            gameState = 1;

            fridgeInf = createSprite(400,400);
            fridgeInf.addImage(fridgeInf_img);
            fridgeInf.scale = 0.5



        }) 

        this.laptop1.mousePressed(()=> {
            this.laptop1.hide();
            this.mobile1.hide();
            this.camera1.hide();
            this.watch1.hide();
            this.fridge1.hide();

            fridge.destroy();
            mobile.destroy();
            camera.destroy();
            watch.destroy();
            laptop.destroy();

            gameState = 1;

            laptopInf = createSprite(450,400);
            laptopInf.addImage(laptopInf_img);
            laptopInf.scale = 0.5


        }) 
        this.mobile1.mousePressed(()=> {
            this.laptop1.hide();
            this.mobile1.hide();
            this.camera1.hide();
            this.watch1.hide();
            this.fridge1.hide();

            fridge.destroy();
            mobile.destroy();
            camera.destroy();
            watch.destroy();
            laptop.destroy();

            gameState = 1;

            mobileInf = createSprite(400,400);
            mobileInf.addImage(mobileInf_img);
            mobileInf.scale = 0.5


        }) 
        this.camera1.mousePressed(()=> {
            this.laptop1.hide();
            this.mobile1.hide();
            this.camera1.hide();
            this.watch1.hide();
            this.fridge1.hide();

            fridge.destroy();
            mobile.destroy();
            camera.destroy();
            watch.destroy();
            laptop.destroy();

            gameState = 1;

            cameraInf = createSprite(440,400);
            cameraInf.addImage(cameraInf_img);
            cameraInf.scale = 0.5


        }) 
        this.watch1.mousePressed(()=> {
            this.laptop1.hide();
            this.mobile1.hide();
            this.camera1.hide();
            this.watch1.hide();
            this.fridge1.hide();

            fridge.destroy();
            mobile.destroy();
            camera.destroy();
            watch.destroy();
            laptop.destroy();

            gameState = 1;

            watchInf = createSprite(400,390);
            watchInf.addImage(watchInf_img);
            watchInf.scale = 0.5


        }) 

        if(gameState === 1) {
            
        }
    }
}