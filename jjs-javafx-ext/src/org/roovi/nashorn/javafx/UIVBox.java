package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.layout.VBox;

public class UIVBox extends VBox {
	
	public UIVBox(){
		super();
		
		System.out.println("UIVBox successfully created!");
	}
	
	public UIVBox(double spacing){
		super(spacing);
		
		System.out.println("UIVBox successfully created!");
	}
	
	public UIVBox(double spacing, Node... children){
		super(spacing, children);
		
		System.out.println("UIVBox successfully created!");
	}
	
	public UIVBox(Node... children){
		super(children);
		
		System.out.println("UIVBox successfully created!");
	}
	
}