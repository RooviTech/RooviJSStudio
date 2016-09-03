package org.roovi.nashorn.javafx;

import javafx.geometry.Insets;

public class UIInsets extends Insets {
	
	public UIInsets(double topRightBottomLeft){
		super(topRightBottomLeft);
		
		System.out.println("UIInsets successfully created!");
	}
	
	public UIInsets(double top, double right, double bottom, double left){
		super(top, right, bottom, left);
		
		System.out.println("UIInsets successfully created!");
	}
	
}