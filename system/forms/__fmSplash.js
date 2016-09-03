function fmSplash() {
	this.show = function(){
		var window = new UIWindow("", 0, 0);
		window.setWindowStyle('UNDECORATED');
		
		var stage = window.getStage(); // Окно
		var pane = window.getPane(); // Пространство
		var scene = window.getScene(); // Сцена
		
		var splashScreen = new UIImageView("system/media/images/Roovi-Logo.png");
		
		stage.setWidth(splashScreen.image.width);
		stage.setHeight(splashScreen.image.height);
		
		pane.getChildren().add(splashScreen);
		
		stage.show();
		
		new UITimer().setInterval(1000).setOnAction(function(){
			new fmMain().show();
			stage.close();
		}).start();
	};
}