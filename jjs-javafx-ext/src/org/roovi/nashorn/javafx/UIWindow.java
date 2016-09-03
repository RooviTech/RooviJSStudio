package org.roovi.nashorn.javafx;

import java.io.*;
import java.util.*;
import java.lang.*;

import javafx.stage.StageStyle;
import javafx.fxml.FXMLLoader;
import javafx.scene.layout.Pane;
import javafx.scene.Parent;

import org.roovi.nashorn.javafx.UIStage;
import org.roovi.nashorn.javafx.UIPane;
import org.roovi.nashorn.javafx.UIScene;

public class UIWindow {
	
	protected UIStage stage;
	
	protected Parent pane;
	
	protected UIScene scene;
	
	public UIWindow() throws IOException {
		stage = new UIStage(StageStyle.DECORATED);
		stage.centerOnScreen();
		
		pane = new UIPane();
		
		scene = new UIScene(pane);
		
		stage.setScene(scene);
		
		System.out.println("UIWindow successfully created!");
	}
	
	public UIWindow(String caption) throws IOException {
		stage = new UIStage(StageStyle.DECORATED);
		stage.setTitle(caption);
		stage.centerOnScreen();
		
		pane = new UIPane();
		
		scene = new UIScene(pane);
		
		stage.setScene(scene);
		
		System.out.println("UIWindow successfully created!");
	}
	
	public UIWindow(String caption, double width, double height, String str) throws IOException {
		stage = new UIStage(StageStyle.DECORATED);
		stage.setTitle(caption);
		stage.centerOnScreen();
		
		if(str == ""){
			pane = new UIPane();
		}else{
			FXMLLoader loader = new FXMLLoader();
			pane = (Pane)loader.load( new ByteArrayInputStream(str.getBytes()) );
		}
		
		scene = new UIScene(pane, width, height);
		
		stage.setScene(scene);
		
		System.out.println("UIWindow successfully created!");
	}
	
	public UIWindow(String caption, double width, double height) throws IOException {
		stage = new UIStage(StageStyle.DECORATED);
		stage.setTitle(caption);
		stage.centerOnScreen();
		
		pane = new UIPane();
		
		scene = new UIScene(pane, width, height);
		
		stage.setScene(scene);
		
		System.out.println("UIWindow successfully created!");
	}
	
	public UIWindow setMaximized(boolean mode){
		getStage().setMaximized(mode);
		
		System.out.println("Called command in UIWindow 'setMaximized', property: "+mode);
		return this;
	}
	
	public UIWindow addStylesheet(String file){
		getScene().getStylesheets().add(file);
		
		System.out.println("Called command in UIWindow 'addStylesheet', property: "+file);
		return this;
	}

	public UIWindow setWindowStyle(String style){
		getStage().initStyle(StageStyle.valueOf(style));
		
		System.out.println("Called command in UIWindow 'setWindowStyle', property: "+style);
		return this;
	}
	
	public UIWindow setTitle(String caption){
		getStage().setTitle(caption);
		
		System.out.println("Called command in UIWindow 'setTitle', property: "+caption);
		return this;
	}
	
	public String getTitle(){
		System.out.println("Called command in UIWindow 'getStyle'");
		return getStage().getTitle();
	}
	
	public UIStage getStage(){
		System.out.println("Called command in UIWindow 'getStage'");
		return stage;
	}
	
	public Parent getPane(){
		System.out.println("Called command in UIWindow 'getPane'");
		return pane;
	}
	
	public UIScene getScene(){
		System.out.println("Called command in UIWindow 'getScene'");
		return scene;
	}
}