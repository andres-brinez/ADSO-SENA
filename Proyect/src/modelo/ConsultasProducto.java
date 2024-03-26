/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

import java.sql.Connection;

/**
 *
 * @author brine
 */
public class ConsultasProducto extends ConexionMysql  {
    
    modelo.ConexionMysql con = new ConexionMysql();
    Connection  cn = con.conectar();
    
    
    // Metodo para agregar un producto
    
    public void agregarProducto (Producto p){
        
        String consulta = "INSERT INTO `app`.`producto`(`codigo`,`nombre`,`precio`)VALUES('"+p.getCodigo()+"', '"+p.getNombre()+"', '"+p.getPrecio()+"')";

        con.ejecutarConsultaSinRetorno(consulta,"Producto agregado");
    
   
    }
    
    
}
