package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuItem;

public class UIMenu extends Menu {
	
	public UIMenu(){
		super();
		
		System.out.println("UIMenu successfully created!");
	}
	
	public UIMenu(String text){
		super(text);
		
		System.out.println("UIMenu successfully created!");
	}
	
	public UIMenu(String text, Node graphic){
		super(text, graphic);
		
		System.out.println("UIMenu successfully created!");
	}
	
	public UIMenu(String text, Node graphic, MenuItem... items){
		super(text, graphic, items);
		
		System.out.println("UIMenu successfully created!");
	}
	
}