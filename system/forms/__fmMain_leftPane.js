function fmMain_leftPane(){
	this.show = function(){
		this.pane = new UIVBox();
		
		// Project Explorer
		
			// Вкладка
			var projectPane = new UITitledPane();
			this.projectPane = projectPane;
			projectPane.text = "Инспектор проекта";
			
			// Само дерево
			this.treeView = new UITreeView();
			projectPane.expanded = false;
			
			// Добавление во вкладку дерева
			projectPane.setContent(this.treeView);
			
			// Добавление вкладки на панель
			this.pane.getChildren().add(projectPane);
			
			// Высота вкладки
			this.treeView.setPrefHeight(250);
			
		// Project Explorer
		
		// Project properties
		
			// Вкладка
			var projectPane = new UITitledPane();
			projectPane.text = "Свойства";
			
			var vbox = new UIVBox(5);
			vbox.setStyle("-fx-padding: 5px");
			projectPane.setContent(vbox);
			
			var pane = new UIHBox(3);
			
			vbox.getChildren().addAll(pane);
			
			// Добавление вкладки на панель
			this.pane.getChildren().add(projectPane);
		
		// Project properties
		
		return this;
	};
	
	this.initProjectInspectorPath = function(path){
		// "Проект"
		var root = new UITreeItem("Проект "+Ide.getProject().generateProject(path).name, new UIImageView(Ide.getIcon("design16")));
		root.setExpanded(true);
		
		// Все итемы
		var bundlesItem = new UITreeItem("Модули", new UIImageView(Ide.getIcon("jarFile16")));
		var resourcesItem = new UITreeItem("Ресурсы", new UIImageView(Ide.getIcon("bundle16")));
		var filesItem = new UITreeItem("Файлы", new UIImageView(Ide.getIcon("script16")));
			
		// Открыты
		bundlesItem.setExpanded(true);
		resourcesItem.setExpanded(true);
		filesItem.setExpanded(true);
			
		// Начальные модули для разработки
		bundlesItem.getChildren().addAll(
			new UITreeItem("jjs-core.jar", new UIImageView(Ide.getIcon("jarFile16"))),
			new UITreeItem("jjs-javafx-ext.jar", new UIImageView(Ide.getIcon("jarFile16")))
		);
			
		// Добавления модулей
		root.getChildren().addAll(
			bundlesItem,
			resourcesItem,
			filesItem
		);
		
		var ext, image;
		
		for each(var file in new Stream().scan(new Stream().getParent(path)+"/src")){
			ext = file.substr(file.lastIndexOf(".")+1, file.length);
			if(ext == "js"){
				image = new UIImageView(Ide.getIcon("js-file16"));
			}else{
				image = null;
			}
			filesItem.getChildren().add(new UITreeItem(file, image));
		}
		
		this.treeView.root = root;
		this.projectPane.expanded = true;
	}
}