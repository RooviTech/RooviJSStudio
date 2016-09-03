function fmMain() {
	this.show = function(){
		// Окно
		var window = new UIWindow(Ide.productName+" "+Ide.productVersion);
		
		var stage = window.getStage(); // Окно
		var pane = window.getPane(); // Пространство
		var scene = window.getScene(); // Сцена
		
		var paneTmp = new UIPane();
		pane.getChildren().add(paneTmp);
		var pane = paneTmp;
		
		window.setMaximized(true); // На полный экран
		
		scene.getStylesheets().add($MAIN_STYLESHEET); // Добавление основного стиля
		
		// Создание элементов управления
		var upToolbox = new UIPane(); // Верхняя панель с кнопками
		var bottomToolbox = new UIPane(); // Нижняя панель со статусом
		var leftPane = new fmMain_leftPane().show(); // Левая панель с свойствами и т.д
		var rightToolbox = new UIVBox(); // Правая панель с компонентами и т.д
		var contentBox = new UIPane();
		var startingPage = new fmMain_startingPage();
		var projectPane = new fmMain_projectPane();
		var sourceEditor = new fmMain_sourceEditor().main();
		var menuBar = new fmMain_menuBar();
		var tButtons = new UIHBox(); // Для кнопок
		var tRightOnButtons = new UIPane(); // Для поиска и кнопки настроек
		var tNewProject = new UIButton("", new UIImageView(Ide.getIcon("new16"))); // Новый проект
		var tOpenProject = new UIButton("", new UIImageView(Ide.getIcon("open16"))); // Открыть проект
		var tSeparator1 = new UISeparator("VERTICAL"); // Первый разделитель
		var tSaveProject = new UIButton("", new UIImageView(Ide.getIcon("save16"))); // Сохранить проект
		var tSaveAsProject = new UIButton("", new UIImageView(Ide.getIcon("saveAs16"))); // Сохранить проект как
		var tSeparator2 = new UISeparator("VERTICAL"); // Второй разделитель
		var tRunApp = new UIButton("", new UIImageView(Ide.getIcon("run16"))); // Скомпилировать и запустить приложение
		var tStopApp = new UIButton("", new UIImageView(Ide.getIcon("stop16"))); // Остоновить приложение
		var tSearchField = new JFXTextField(); tSearchField.getStyleClass().add("textfield"); // Строка поиска
		var tSettings = new UIButton("", new UIImageView(Ide.getIcon("settings16"))); // Кнопка настроек
		var bIdeStatus = new UILabel("Проект не открыт."); // Нижняя панель со статусом
		var tabProject = new UITabPane();
		var tabStart = new UITab();
		NODES.__fmMain = window;
		NODES.__fmMain_ideStatus = bIdeStatus;
		NODES.__fmMain_projectPane = projectPane;
		NODES.__fmMain_startingPage = startingPage;
		NODES.__fmMain_tabProject = tabProject;
		NODES.__fmMain_sourceEditor = sourceEditor;
		NODES.__fmMain_leftPane = leftPane;
		
		leftPane = leftPane.pane;
		
		sourceEditor = sourceEditor.pane;
		
		// Добавление элементов на форму
		tButtons.getChildren().addAll(
			tNewProject, tOpenProject, tSeparator1, // Первая колонка
			tSaveProject, tSaveAsProject, tSeparator2, // Вторая колонка
			tRunApp, tStopApp // Третья
		);
		
		tRightOnButtons.getChildren().addAll(tSearchField, tSettings); // Строка поиска и кнопка настроек
		upToolbox.getChildren().addAll(tButtons, tRightOnButtons); // Все кнопки-действия
		bottomToolbox.getChildren().addAll(bIdeStatus);
		contentBox.getChildren().addAll(tabProject, startingPage, projectPane, sourceEditor);
		
		pane.getChildren().add(upToolbox);
		pane.getChildren().add(bottomToolbox);
		pane.getChildren().add(leftPane);
		pane.getChildren().add(rightToolbox);
		pane.getChildren().add(contentBox);
		
		window.getPane().getChildren().add(menuBar);
		menuBar.setPrefHeight(25);
		pane.setLayoutY(25);
		
		// Открытие окна
		stage.minWidth = 600; stage.minHeight = 400; // Минимальный размер 600x400
		stage.show(); // Появление окна
		
		// Основной код
		upToolbox.getStyleClass().add("toolbox");
		bottomToolbox.getStyleClass().add("toolbox");
		leftPane.getStyleClass().add("toolbox");
		rightToolbox.getStyleClass().add("toolbox");
		contentBox.getStyleClass().add("toolbox");
		
		stage.onCloseRequest = function(event) new fmMain().stage_onCloseRequest(event);
		
		// Фиксирование компонентов :|
		new UITimer().setInterval(1).setRepeat(true).setOnAction(function(){
			upToolbox.setPrefWidth(stage.width); // Ширина верхней панели всегда равна ширене окна
			
			bottomToolbox.setPrefWidth(stage.width); // Ширина нижней панели всегда равна ширене окна
			bottomToolbox.setLayoutY(stage.height - (bottomToolbox.getHeight()*3+10));
			
			leftPane.setLayoutY(upToolbox.height + 1);
			leftPane.setPrefWidth(275);
			leftPane.setPrefHeight(stage.height - leftPane.getLayoutY() - bottomToolbox.getHeight() - 38 - 27);
			
			rightToolbox.setLayoutX(upToolbox.getWidth() - 275);
			rightToolbox.setLayoutY(leftPane.getLayoutY());
			rightToolbox.setPrefWidth(leftPane.getWidth());
			rightToolbox.setPrefHeight(leftPane.getHeight());
			
			contentBox.setLayoutX(leftPane.getWidth() + 1);
			contentBox.setLayoutY(leftPane.getLayoutY());
			contentBox.setPrefWidth(rightToolbox.getLayoutX()-leftPane.getWidth() - 2);
			contentBox.setPrefHeight(bottomToolbox.getLayoutY() - leftPane.getLayoutY() - 1);
			
			tabProject.setPrefWidth(rightToolbox.getLayoutX()-leftPane.getWidth() - 2);
			
			startingPage.setLayoutY(tabProject.getHeight());
			startingPage.setPrefWidth(rightToolbox.getLayoutX()-leftPane.getWidth() - 2);
			startingPage.setPrefHeight(bottomToolbox.getLayoutY() - leftPane.getLayoutY() - 1 - 31);
			
			projectPane.setLayoutY(tabProject.getHeight());
			projectPane.setPrefWidth(rightToolbox.getLayoutX()-leftPane.getWidth() - 2);
			projectPane.setPrefHeight(bottomToolbox.getLayoutY() - leftPane.getLayoutY() - 1 - 31);
			
			sourceEditor.setLayoutY(tabProject.getHeight());
			sourceEditor.setPrefWidth(rightToolbox.getLayoutX()-leftPane.getWidth() - 2);
			sourceEditor.setPrefHeight(bottomToolbox.getLayoutY() - leftPane.getLayoutY() - 1 - 31);
			
			menuBar.setPrefWidth(stage.width);
			
			tRightOnButtons.relocate(stage.width - tSearchField.getWidth() - 20 - tSettings.width, 4); // Строка поиска и кнопка настроек всегда слева
		}).start();
		
		rightToolbox.toFront();
		startingPage.toFront();
		
		this.clearProjectTabs();
		tabProject.setTabClosingPolicy(javafx.scene.control.TabPane.TabClosingPolicy.ALL_TABS);
		
		bIdeStatus.getStyleClass().add("bIdeStatus");
		
		tSearchField.setPrefWidth(230);
		tSettings.setPrefWidth(28); tSettings.setPrefHeight(29);
		tSettings.relocate(tSearchField.getLayoutX() + tSearchField.getWidth() + 80, 0);
		
		tButtons.setSpacing(5);
		tButtons.setPadding(new UIInsets(5, 10, 5, 10)); 
		
		tNewProject.setPrefWidth(28); tNewProject.setPrefHeight(28);
		tOpenProject.setPrefWidth(28); tOpenProject.setPrefHeight(28);
		tSaveProject.setPrefWidth(28); tSaveProject.setPrefHeight(28);
		tSaveAsProject.setPrefWidth(28); tSaveAsProject.setPrefHeight(28);
		tRunApp.setPrefWidth(28); tRunApp.setPrefHeight(28);
		tStopApp.setPrefWidth(28); tStopApp.setPrefHeight(28); tStopApp.setDisable(true);
	
		tSearchField.getStyleClass().add("search-field");
		tSearchField.text = $settings.getProperty("ide.search.query");
		tSearchField.promptText = "Поиск по документации";
		tSearchField.onAction = function() new fmMain().tSearchField_onAction(tSearchField);
	};
	this.clearProjectTabs = function(){
		var tabStart = new UITab();
		tabStart.setText("Начальная");
		tabStart.setGraphic(new UIImageView(Ide.getIcon("idea16")));
		tabStart.setClosable(false);
		tabStart.onSelectionChanged = function(){
			NODES.__fmMain_startingPage.toFront();
		};
		
		NODES.__fmMain_tabProject.getTabs().clear();
		
		NODES.__fmMain_tabProject.getTabs().add(tabStart);
	};
	this.tSearchField_onAction = function(tSearchField){
		$settings.setProperty("ide.search.query", tSearchField.text);
	};
	this.stage_onCloseRequest = function(event){
		event.consume();
					
		var alert = new UIAlert("CONFIRMATION");
		alert.setTitle("Выход");
		alert.setHeaderText("Подвердите выход из "+Ide.productName);
		alert.setContentText("Вы уверены что хотите выйти, при этом эта сессия не сохранится!");

		if(alert.showAndWait().get() == javafx.scene.control.ButtonType.OK){
			System.exit(1);
		}
	};
}