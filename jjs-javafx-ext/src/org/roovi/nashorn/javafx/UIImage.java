package org.roovi.nashorn.javafx;

import javafx.scene.image.Image;

public class UIImage extends Image {
	
	public UIImage(String url){
		super(url);
		
		System.out.println("UIImage successfully created!");
	}
	
}