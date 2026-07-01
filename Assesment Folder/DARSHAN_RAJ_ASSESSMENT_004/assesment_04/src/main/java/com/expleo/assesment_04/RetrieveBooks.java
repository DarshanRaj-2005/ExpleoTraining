package com.expleo.assesment_04;
import java.sql.*;

public class RetrieveBooks {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/dharshan";
        String user = "root";
        String password = "Darshan@12";

        try {
        	Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to database!");
            String query = "SELECT * FROM BOOKS";
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                System.out.println(
                		" ID: " + rs.getInt("book_id") +
                        " Title: " + rs.getString("title") +
                        " Author: " + rs.getString("author") +
                        " ISBN: " + rs.getString("isbn") +
                        " Publisher: " + rs.getString("publisher") +
                        " Year: " + rs.getInt("pub_year") +
                        " Price: " + rs.getDouble("price") +
                        " Copies: " + rs.getInt("total_copies") +
                        " Category ID: " + rs.getInt("category_id")
                );
            }
            rs.close();
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        } 
    }
}