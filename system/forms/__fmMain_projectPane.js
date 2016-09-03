function fmMain_projectPane(){
	
	var pane = new UIPane();
	
	var projectName = new UIEdit();
	var projectNameLabel = new UILabel("Имя проекта: ");
	
	var projectPath = new UIEdit();
	var projectPathLabel = new UILabel("Путь проекта: ");
	
	NODES.__fmMain_projectPane_projectName = projectName;
	NODES.__fmMain_projectPane_projectPath = projectPath;
			
	pane.getChildren().addAll(projectName, projectNameLabel, projectPath, projectPathLabel);
	pane.getStyleClass().add("toolbox");
	
	projectNameLabel.relocate(5, 9);
	projectNameLabel.setStyle("-fx-font-size: 14px;");
	projectName.relocate(100, 5);
	projectName.setPrefWidth(250);
	projectName.setStyle("-fx-font-size: 13px;");
	projectName.setEditable(false);
	
	projectPathLabel.relocate(5, projectName.getLayoutY() + projectName.getHeight() + 39);
	projectPathLabel.setStyle("-fx-font-size: 14px;");
	projectPath.relocate(100, projectName.getLayoutY() + projectName.getHeight() + 35);
	projectPath.setPrefWidth(500);
	projectPath.setStyle("-fx-font-size: 13px;");
	projectPath.setEditable(false);
	
	return pane;

}