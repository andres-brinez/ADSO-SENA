/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controlador;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import modelo.ConsultasProducto;
import modelo.Producto;
import vista.GestionarProductosFrm;
/**
 *
 * @author brine
 */

// Conexión entre el modelo y la vista
public class ControladorProducto implements ActionListener {
    
    private Producto pro;
    private GestionarProductosFrm frmPro;
    private ConsultasProducto proC;

    public ControladorProducto(Producto pro, GestionarProductosFrm frmPro, ConsultasProducto proC) {
        this.pro = pro;
        this.frmPro = frmPro;
        this.proC = proC;
        
        this.frmPro.btn_agregar.addActionListener(this);
        this.frmPro.btn_buscar.addActionListener(this);
        this.frmPro.btn_eliminar.addActionListener(this);
        this.frmPro.btn_limpiar.addActionListener(this);
        this.frmPro.btn_editar.addActionListener(this);

        
    }
    @Override
public void actionPerformed(ActionEvent e) {
    if (e.getSource() == frmPro.btn_agregar) {
        try {
            int codigo = Integer.parseInt(frmPro.txt_codigo.getText());
            String nombre = frmPro.txt_nombre.getText();
            int precio = Integer.parseInt(frmPro.txt_precio.getText());
            
            // Realizar validaciones adicionales si es necesario
            
            pro.setCodigo(codigo);
            pro.setNombre(nombre);
            pro.setPrecio(precio);
            
            proC.agregarProducto(pro);
            limpiar();
            
            JOptionPane.showMessageDialog(null, "Producto agregado correctamente.", "Información", JOptionPane.INFORMATION_MESSAGE);
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(null, "Por favor ingrese valores numéricos válidos.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    } else if (e.getSource() == frmPro.btn_editar) {
        try {
            int codigo = Integer.parseInt(frmPro.txt_codigo.getText());
            String nombre = frmPro.txt_nombre.getText();
            int precio = Integer.parseInt(frmPro.txt_precio.getText());
            
            // Realizar validaciones adicionales si es necesario
            
            pro.setCodigo(codigo);
            pro.setNombre(nombre);
            pro.setPrecio(precio);
            
            proC.actualizarProducto(pro);
            limpiar();
            
            JOptionPane.showMessageDialog(null, "Producto actualizado correctamente.", "Información", JOptionPane.INFORMATION_MESSAGE);
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(null, "Por favor ingrese valores numéricos válidos.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    } else if (e.getSource() == frmPro.btn_eliminar) {
        try {
            int codigo = Integer.parseInt(frmPro.txt_codigo.getText());
            
            // Realizar validaciones adicionales si es necesario
            
            proC.eliminarProducto(codigo);
            limpiar();
            
            JOptionPane.showMessageDialog(null, "Producto eliminado correctamente.", "Información", JOptionPane.INFORMATION_MESSAGE);
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(null, "Por favor ingrese un valor numérico válido para el código.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }  else if (e.getSource() == frmPro.btn_buscar) {
        try {
            int codigo = Integer.parseInt(frmPro.txt_codigo.getText());
            
            // Realizar validaciones adicionales si es necesario
            
            ResultSet resultado = proC.buscarProducto(codigo);
            if (resultado.next()) {
                int codigoEncontrado = resultado.getInt("codigo");
                String nombreEncontrado = resultado.getString("nombre");
                int precioEncontrado = resultado.getInt("precio");
                
                // Mostrar el producto encontrado en la interfaz gráfica
                JOptionPane.showMessageDialog(null, "Producto encontrado:\nCódigo: " + codigoEncontrado + "\nNombre: " + nombreEncontrado + "\nPrecio: " + precioEncontrado, "Producto Encontrado", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(null, "Producto no encontrado.", "Información", JOptionPane.INFORMATION_MESSAGE);
            }
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(null, "Por favor ingrese un valor numérico válido para el código.", "Error", JOptionPane.ERROR_MESSAGE);
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error al buscar el producto.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    } else if (e.getSource() == frmPro.btn_limpiar) {
        // Lógica para limpiar los campos de texto
        limpiar();
    }
}


    
    public void limpiar(){
        frmPro.txt_codigo.setText("");
        frmPro.txt_nombre.setText("");
        frmPro.txt_precio.setText("");
        
    }
    
    
    
    
    
}
