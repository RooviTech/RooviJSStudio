package org.roovi.nashorn.javafx;

import javafx.scene.control.Separator;

public class UISeparator extends Separator {
	
	public UISeparator(){
		super();
		
		System.out.println("UISeparator successfully created!");
	}
	
	public UISeparator(String orientation){
		super(javafx.geometry.Orientation.valueOf(orientation));
		
		System.out.println("UISeparator successfully created!");
	}
	
}