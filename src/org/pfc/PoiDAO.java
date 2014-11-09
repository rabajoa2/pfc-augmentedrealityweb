package org.pfc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class PoiDAO {

    public List<Poi> findAll() {
        List<Poi> list = new ArrayList<Poi>();
        Connection c = null;
    	String sql = "SELECT * FROM poi ORDER BY titulo";
        try {
            c = ConnectionHelper.getConnection();
            Statement s = c.createStatement();
            ResultSet rs = s.executeQuery(sql);
            while (rs.next()) {
                list.add(processRow(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return list;
    }

    
    public List<Poi> findByTitulo(String titulo) {
        List<Poi> list = new ArrayList<Poi>();
        Connection c = null;
    	String sql = "SELECT * FROM poi as e " +
			"WHERE UPPER(titulo) LIKE ? " +	
			"ORDER BY titulo";
        try {
            c = ConnectionHelper.getConnection();
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, "%" + titulo.toUpperCase() + "%");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                list.add(processRow(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return list;
    }
    
    public Poi findById(int id) {
    	String sql = "SELECT * FROM poi WHERE id = ?";
        Poi poi = null;
        Connection c = null;
        try {
            c = ConnectionHelper.getConnection();
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                poi = processRow(rs);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return poi;
    }

    public Poi save(Poi poi)
	{
		return poi.getId() > 0 ? update(poi) : create(poi);
	}    
    
    public Poi create(Poi poi) {
        Connection c = null;
        PreparedStatement ps = null;
        try {
            c = ConnectionHelper.getConnection();
            ps = c.prepareStatement("INSERT INTO poi (tipo,titulo,descripcion,latitud,longitud) VALUES (?, ?, ?, ?, ?)",
                new String[] { "ID" });
            ps.setInt(1, poi.getTipo());
            ps.setString(2, poi.getTitulo());
            ps.setString(3, poi.getDescripcion());
            ps.setDouble(4, poi.getLatitud());
            ps.setDouble(5, poi.getLongitud());
            ps.executeUpdate();
            ResultSet rs = ps.getGeneratedKeys();
            rs.next();
            int id = rs.getInt(1);
            poi.setId(id);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return poi;
    }

    public Poi update(Poi poi) {
        Connection c = null;
        try {
            c = ConnectionHelper.getConnection();
            PreparedStatement ps = c.prepareStatement("UPDATE poi SET tipo=?, titulo=?, descripcion=?, latitud=?, longitud=? WHERE id=?");
            ps.setInt(1, poi.getTipo());
            ps.setString(2, poi.getTitulo());
            ps.setString(3, poi.getDescripcion());
            ps.setDouble(4, poi.getLatitud());
            ps.setDouble(5, poi.getLongitud());
            ps.setInt(6, poi.getId());
            ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return poi;
    }

    public boolean remove(int id) {
        Connection c = null;
        try {
            c = ConnectionHelper.getConnection();
            PreparedStatement ps = c.prepareStatement("DELETE FROM poi WHERE id=?");
            ps.setInt(1, id);
            int count = ps.executeUpdate();
            return count == 1;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
    }

    protected Poi processRow(ResultSet rs) throws SQLException {
        Poi poi = new Poi();
        poi.setId(rs.getInt("id"));
        poi.setTipo(rs.getInt("tipo"));
        poi.setTitulo(rs.getString("titulo"));
        poi.setDescripcion(rs.getString("descripcion"));
        poi.setLatitud(rs.getDouble("latitud"));
        poi.setLongitud(rs.getDouble("longitud"));
        return poi;
    }
    
}
