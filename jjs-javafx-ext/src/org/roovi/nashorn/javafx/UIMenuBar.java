package org.roovi.nashorn.javafx;

import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;

public class UIMenuBar extends MenuBar {
	
	public UIMenuBar(){
		super();
		
		System.out.println("UIMenuBar successfully created!");
	}
	
	public UIMenuBar(Menu... menus){
		super(menus);
		
		System.out.println("UIMenuBar successfully created!");
	}
	
}