package org.roovi.nashorn.litekit;

import java.io.*;
import java.util.*;
import java.lang.*;

public class Stream {

	public String getParent(String path){
		return new File(path).getParent();
	}
	
	public String getName(String path){
		return new File(path).getName();
	}

	public String[] scan(String path){
		return new File(path).list();
	}

	public Stream delete(String path) {
        new File(path).delete();
		return this;
    }

	public Stream makeDir(String dir) {
		new File(dir).mkdirs();
		return this;
    }

	public Stream makeFile(String file) {
		this.putContents(file, "");
		return this;
    }

	public boolean exists(String path) {
        return new File(path).exists();
    }

	public boolean isDir(String path) {
        return new File(path).isDirectory();
    }
	
	public boolean isFile(String path) {
        return new File(path).isFile();
    }
	
	public long time(String path) {
        return new File(path).lastModified();
    }
	
	public long size(String path) {
        return new File(path).length();
    }
	
	public String abs(String path){
        try {
            return new File(path).getCanonicalPath();
        } catch (IOException e) {
            return new File(path).getAbsolutePath();
        }
	}
	
	public Stream putContents(String file, String contents) {
        try {
            File newTextFile = new File(file);

            FileWriter fw = new FileWriter(newTextFile);
            fw.write(contents);
            fw.close();

        } catch (IOException iox) {
            iox.printStackTrace();
        }
		return this;
	}
	
	public String getContents(String file) throws FileNotFoundException {
		String content = "";
		Scanner input = new Scanner(new File(file));
		while(input.hasNext()) content += input.nextLine() + "\r\n";
		input.close();
		return content;
	}
	
}