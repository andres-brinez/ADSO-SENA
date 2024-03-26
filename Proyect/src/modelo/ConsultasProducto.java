/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

import java.sql.Connection;
import java.sql.ResultSet;

/**
 *
 * @author brine
 */
public class ConsultasProducto extends ConexionMysql {

    modelo.ConexionMysql con = new ConexionMysql();
    Connection cn = con.conectar();

    // Método para agregar un producto
    public void agregarProducto(Producto p) {
        String consulta = "INSERT INTO app.producto (codigo, nombre, precio) VALUES ('" + p.getCodigo() + "', '" + p.getNombre() + "', '" + p.getPrecio() + "')";

        con.ejecutarConsultaSinRetorno(consulta, "Producto agregado");
    }

    // Método para actualizar un producto
    public void actualizarProducto(Producto p) {
        String consulta = "UPDATE app.producto SET nombre = '" + p.getNombre() + "', precio = '" + p.getPrecio() + "' WHERE codigo = '" + p.getCodigo() + "'";

        con.ejecutarConsultaSinRetorno(consulta, "Producto actualizado");
    }

    // Método para eliminar un producto
    public void eliminarProducto(int idProducto) {
        String consulta = "DELETE FROM app.producto WHERE codigo = '" + idProducto + "'";

        con.ejecutarConsultaSinRetorno(consulta, "Producto eliminado");
    }

    // Método para buscar un producto
    public ResultSet buscarProducto(int idProducto) {
        String consulta = "SELECT * FROM app.producto WHERE codigo = '" + idProducto + "'";

        ResultSet resultado = con.ejecutarConsultaConRetorno(consulta, "Producto encontrado");

        return resultado;
    }
}
