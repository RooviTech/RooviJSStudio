package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.Button;

public class UIButton extends Button {
	
	public UIButton(){
		super();
		
		System.out.println("UIButton successfully created!");
	}
	
	public UIButton(String text){
		super(text);
		
		System.out.println("UIButton successfully created!");
	}
	
	public UIButton(Node graphic){
		super("", graphic);
		
		System.out.println("UIButton successfully created!");
	}
	
	public UIButton(String text, Node graphic){
		super(text, graphic);
		
		System.out.println("UIButton successfully created!");
	}
	
}