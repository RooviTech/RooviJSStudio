package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.Label;

public class UILabel extends Label {
	
	public UILabel(){
		super();
		
		System.out.println("UILabel successfully created!");
	}
	
	public UILabel(String text){
		super(text);
		
		System.out.println("UILabel successfully created!");
	}
	
	public UILabel(String text, Node graphic){
		super(text, graphic);
		
		System.out.println("UILabel successfully created!");
	}
	
}