package org.roovi.nashorn.javafx;

import javafx.scene.image.ImageView;

public class UIImageView extends ImageView {
	
	public UIImageView(){
		super();
		
		System.out.println("UIImageView successfully created!");
	}	
	
	public UIImageView(String url){
		super(url);
		
		System.out.println("UIImageView successfully created!");
	}
	
}