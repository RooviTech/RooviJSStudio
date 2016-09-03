function fmNewProject() {
	
	this.inited = false;
	
	this.init = function(mode){
	
		// Окно
		var window = new UIWindow("Новый проект");
			
		this.stage = window.getStage(); // Окно
		
		var stage = this.stage;
		var pane = window.getPane(); // Пространство
		var scene = window.getScene(); // Сцена
		
		var tip = new UIImageView(Ide.getIcon("idea72"));
		var separator1 = new UISeparator("HORIZONTAL");
		var tipHint1 = new UILabel("- Создание нового проекта");
		var tipHint2 = new UILabel("Вдальнейшем вы сможете превратить ваши старания\nв приложение которое запускается на Windows, Linux, \nи на всем где есть Java!"); // Первый разделитель
		var label1 = new UILabel("Введите путь:");
		var path = new UIEdit();
		var availableProjects = new UIListView(["JavaScript"]);
		var buttonCreate = new UIButton("Создать", new UIImageView(Ide.getIcon("new16")));
		var buttonCancel = new UIButton("Отмена", new UIImageView(Ide.getIcon("close16")));
		NODES.__fmNewProject = window;
			
		pane.getChildren().addAll(tip, separator1, tipHint1, tipHint2, label1, path, availableProjects, buttonCreate, buttonCancel);
		
		if(mode==true){
			// Запуск окна
			this.stage.setResizable(false);
			this.stage.setWidth(450);
			this.stage.setHeight(500);
			this.stage.initModality(javafx.stage.Modality.APPLICATION_MODAL);
			this.stage.show();	
		}
	
		tip.setLayoutY(5);
		separator1.setLayoutY(tip.getImage().height + 14);
		separator1.setPrefWidth(stage.width);
		tipHint1.relocate(tip.getImage().width, 3);
		tipHint1.setStyle("-fx-font-size: 16px;");
		tipHint2.relocate(tip.getImage().width, 25);
		tipHint2.setStyle("-fx-font-size: 13px;");
			
		label1.relocate(5, separator1.getLayoutY() + 10);
		label1.setStyle("-fx-font-size: 12px;");
			
		path.relocate(5, label1.getLayoutY() + 20);
		path.setPrefWidth(stage.width - 15);
			
		this.updateProjectPath(path);
			
		availableProjects.relocate(5, path.getLayoutY() + path.getHeight() + 5);
		availableProjects.setPrefWidth(stage.getWidth() - 15);
		availableProjects.setPrefHeight(280);
			
		buttonCancel.setPrefWidth(110); buttonCancel.setPrefHeight(35); 
		buttonCreate.setPrefWidth(110); buttonCreate.setPrefHeight(35); 
			
		buttonCancel.relocate(5, availableProjects.getLayoutY() + availableProjects.getPrefHeight() + 5);
		buttonCreate.relocate(330, availableProjects.getLayoutY() + availableProjects.getPrefHeight() + 5);
			
		buttonCreate.setOnAction(function(){
				
			Ide.getProject().create(path.text);
			Ide.getProject().open(path.text);
			
			NODES.__fmNewProject.getStage().close();
					
		});
		
		buttonCancel.setOnAction(function(){
			NODES.__fmNewProject.getStage().close();
		});
		
		this.inited = true;
	};
	
	this.updateProjectPath = function(path){
		var count = new Stream().scan("projects");
		if(count == null) count = 0; else count = count.length;
		path.setText(replaceSl(new Stream().abs("projects")+"/Project "+count+"/Project "+count+".jsproj"));
	};
	
	this.show = function(){
		
		if(!this.inited) {
			this.init(true);
			return false;
		}
		
		// Запуск окна
		this.stage.setResizable(false);
		this.stage.setWidth(450);
		this.stage.setHeight(500);
		this.stage.initModality(javafx.stage.Modality.APPLICATION_MODAL);
		this.stage.show();
	
	};
}