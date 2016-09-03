package org.roovi.nashorn.javafx;

import javafx.scene.Scene;
import javafx.scene.Parent;

public class UIScene extends Scene {
	
	public UIScene(Parent root){
		super(root);
		
		System.out.println("UIScene successfully created!");
	}
	
	public UIScene(Parent root, double width, double height){
		super(root, width, height);
		
		System.out.println("UIScene successfully created!");
	}
	
}