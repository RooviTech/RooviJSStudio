package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.layout.HBox;

public class UIHBox extends HBox {
	
	public UIHBox(){
		super();
		
		System.out.println("UIHBox successfully created!");
	}
	
	public UIHBox(double spacing){
		super(spacing);
		
		System.out.println("UIHBox successfully created!");
	}
	
	public UIHBox(double spacing, Node... children){
		super(spacing, children);
		
		System.out.println("UIHBox successfully created!");
	}
	
	public UIHBox(Node... children){
		super(children);
		
		System.out.println("UIHBox successfully created!");
	}
	
}