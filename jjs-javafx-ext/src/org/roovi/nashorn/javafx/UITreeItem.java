package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.TreeItem;

public class UITreeItem extends TreeItem {
	
	public UITreeItem(){
		super();
		
		System.out.println("UITreeItem successfully created!");
	}
	
	public UITreeItem(String text){
		super(text);
		
		System.out.println("UITreeItem successfully created!");
	}
	
	public UITreeItem(String text, Node graphic){
		super(text, graphic);
		
		System.out.println("UITreeItem successfully created!");
	}
	
}