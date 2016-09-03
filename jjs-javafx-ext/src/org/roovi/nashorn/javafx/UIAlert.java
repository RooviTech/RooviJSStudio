package org.roovi.nashorn.javafx;

import javafx.scene.control.Alert;
import javafx.scene.control.Alert;

public class UIAlert extends Alert {
	
	public UIAlert(){
		super(Alert.AlertType.INFORMATION);
		
		System.out.println("UIAlert successfully created!");
	}
	
	public UIAlert(String type){
		super(Alert.AlertType.valueOf(type));
		
		System.out.println("UIAlert successfully created!");
	}
	
}