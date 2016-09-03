function fmMain_menuBar(){
	var menuBar = new UIMenuBar();
	menuBar.setUseSystemMenuBar(true);
	
	// Файл
	var File = new UIMenu("Файл");
	// Файл-Новый
	var FileNew = new UIMenu("Новый");
	// Файл-Новый-Проект
	var FileNewProject = new javafx.scene.control.MenuItem("Проект", new UIImageView(Ide.getIcon("design16")));
	
	FileNew.getItems().add(FileNewProject);
	File.getItems().add(FileNew);
	
	menuBar.getMenus().addAll(File);
	
	return menuBar;
}