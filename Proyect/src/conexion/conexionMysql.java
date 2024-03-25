/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;


/**
 *
 * @author brine
 */
public class conexionMysql {
    
    Connection cn;
    
    public Connection conectar (){
        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            cn =(Connection) DriverManager.getConnection("jdbc:mysql://localhost/app", "root", "admin");
            System.out.println("conectado");
            
        }
        catch(ClassNotFoundException | SQLException e ){
            
            System.out.println("Error conexión DB "+ e);
 
        }
        
        return cn;
    }
    
    public void ejecutarConsulta(String consulta) {
        try {
            PreparedStatement ps = cn.prepareStatement(consulta);
            ps.execute();
            JOptionPane.showMessageDialog(null,"Usuario Registrado");
                    
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null,"No se pudo reigstrar el usuario");
            System.out.println("Error al ejecutar la consulta: " + e);
            
        }
    }
 }
    
    

