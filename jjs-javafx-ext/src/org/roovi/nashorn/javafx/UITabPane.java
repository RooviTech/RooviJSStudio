package org.roovi.nashorn.javafx;

import javafx.scene.control.Tab;
import javafx.scene.control.TabPane;

public class UITabPane extends TabPane {
	
	public UITabPane(){
		super();
		
		System.out.println("UITabPane successfully created!");
	}
	
	public UITabPane(Tab... tabs){
		super(tabs);
		
		System.out.println("UITabPane successfully created!");
	}
	
}