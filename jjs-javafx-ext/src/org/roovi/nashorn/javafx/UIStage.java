package org.roovi.nashorn.javafx;

import javafx.stage.Stage;
import javafx.stage.StageStyle;

public class UIStage extends Stage {
	
	public UIStage(){
		super();
		
		System.out.println("UIStage successfully created!");
	}
	
	public UIStage(StageStyle ss){
		super(ss);
		
		System.out.println("UIStage successfully created!");
	}
	
}