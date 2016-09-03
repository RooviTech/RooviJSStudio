package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.Tab;

public class UITab extends Tab {
	
	public UITab(){
		super();
		
		System.out.println("UITab successfully created!");
	}
	
	public UITab(String text){
		super(text);
		
		System.out.println("UITab successfully created!");
	}
	
	public UITab(String text, Node content){
		super(text, content);
		
		System.out.println("UITab successfully created!");
	}
	
}