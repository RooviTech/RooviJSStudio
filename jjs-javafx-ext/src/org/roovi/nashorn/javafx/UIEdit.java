package org.roovi.nashorn.javafx;

import javafx.scene.control.TextField;

public class UIEdit extends TextField {
	
	public UIEdit(){
		super();
		
		System.out.println("UIEdit successfully created!");
	}
	
	public UIEdit(String text){
		super(text);
		
		System.out.println("UIEdit successfully created!");
	}
	
}