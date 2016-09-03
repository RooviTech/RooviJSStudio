package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.TitledPane;

public class UITitledPane extends TitledPane {
	
	public UITitledPane(){
		super();
		
		System.out.println("UITitledPane successfully created!");
	}
	
	public UITitledPane(String text, Node graphic){
		super(text, graphic);
		
		System.out.println("UITitledPane successfully created!");
	}
	
}