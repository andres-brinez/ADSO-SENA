/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;


/**
 *
 * @author brine
 */
public class ConexionMysql {
    
    Connection cn;
    
    public Connection conectar (){
        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            cn =(Connection) DriverManager.getConnection("jdbc:mysql://localhost/appp", "root", "admin");
            System.out.println("conectado");
            
        }
        catch(ClassNotFoundException | SQLException e ){
            
            System.out.println("Error conexión DB "+ e);
            JOptionPane.showMessageDialog(null,"Error en la base de datos, asegurate de que los datos para la conexión sean correctos");

 
        }
        
        return cn;
    }
    
    public ResultSet ejecutarConsultaConRetorno(String consulta,String mensaje) {
        
        
        ResultSet resultado=null;
        
        try {
            PreparedStatement ps = cn.prepareStatement(consulta);
            resultado=ps.executeQuery();
            
            if(!mensaje.equals("")){
                
                JOptionPane.showMessageDialog(null,mensaje);
            }
            
                       
            
                    
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null,"No se pudo realizar la acción");
            System.out.println("Error al ejecutar la consulta: " + e);
            
        }
        
        return resultado;
    }
    
    public void ejecutarConsultaSinRetorno(String consulta,String mensaje) {
                
        try {
            PreparedStatement ps = cn.prepareStatement(consulta);
            ps.execute();
            
            if(!mensaje.equals("")){
                
                JOptionPane.showMessageDialog(null,mensaje);
            }
                                  
            
                    
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null,"No se pudo realizar la acción");
            System.out.println("Error al ejecutar la consulta: " + e);
            
        }
        
    }
 }
    
    

