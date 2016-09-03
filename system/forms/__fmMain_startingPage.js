function fmMain_startingPage(){
	var pane = new UIPane();
	var buttonCreate = new UIButton("Новый проект", new UIImageView(Ide.getIcon("new32")));
	var buttonOpen = new UIButton("Открыть проект", new UIImageView(Ide.getIcon("open32")));
	
	buttonCreate.relocate(5, 5);
	buttonCreate.setPrefWidth(230);
	buttonCreate.setPrefHeight(50);
	buttonCreate.setStyle("-fx-font-size: 15px;");
	buttonCreate.setOnAction(function() { new fmNewProject().show() });
	
	buttonOpen.relocate(5, buttonCreate.getPrefHeight() + 10);
	buttonOpen.setPrefWidth(230);
	buttonOpen.setPrefHeight(50);
	buttonOpen.setStyle("-fx-font-size: 15px;");
	buttonOpen.setOnAction(function() {
		var FileChooser = javafx.stage.FileChooser;
		var fileChooser = new FileChooser();
		fileChooser.setTitle("Open Resource File");
			fileChooser.getExtensionFilters().addAll(
							new FileChooser.ExtensionFilter("RooviJSStudio project", "*.jsproj")
			);
		var file = fileChooser.showOpenDialog(NODES.__fmMain.getStage());
		Ide.getProject().open(replaceSl(file.getAbsolutePath()));
	});
	
	pane.getChildren().addAll(buttonCreate, buttonOpen);
	pane.getStyleClass().add("toolbox");
	
	return pane;
}