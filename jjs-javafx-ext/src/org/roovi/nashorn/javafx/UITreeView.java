package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.TreeView;
import javafx.scene.control.TreeItem;

public class UITreeView extends TreeView {
	
	public UITreeView(){
		super();
		
		System.out.println("UITreeView successfully created!");
	}
	
	public UITreeView(TreeItem root){
		super(root);
		
		System.out.println("UITreeView successfully created!");
	}
	
}