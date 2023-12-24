var wms_layers = [];

var format_BatasAdministrasi_Polygon_0 = new ol.format.GeoJSON();
var features_BatasAdministrasi_Polygon_0 = format_BatasAdministrasi_Polygon_0.readFeatures(json_BatasAdministrasi_Polygon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_Polygon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_Polygon_0.addFeatures(features_BatasAdministrasi_Polygon_0);
var lyr_BatasAdministrasi_Polygon_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasi_Polygon_0, 
                style: style_BatasAdministrasi_Polygon_0,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_Polygon_0.png" /> BatasAdministrasi_Polygon'
            });
var format_ReprojectedJaringanJalanDenpasar_1 = new ol.format.GeoJSON();
var features_ReprojectedJaringanJalanDenpasar_1 = format_ReprojectedJaringanJalanDenpasar_1.readFeatures(json_ReprojectedJaringanJalanDenpasar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReprojectedJaringanJalanDenpasar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReprojectedJaringanJalanDenpasar_1.addFeatures(features_ReprojectedJaringanJalanDenpasar_1);
var lyr_ReprojectedJaringanJalanDenpasar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReprojectedJaringanJalanDenpasar_1, 
                style: style_ReprojectedJaringanJalanDenpasar_1,
                interactive: true,
                title: '<img src="styles/legend/ReprojectedJaringanJalanDenpasar_1.png" /> Reprojected Jaringan Jalan Denpasar'
            });
var format_ReprojectedHalteDenpasar_2 = new ol.format.GeoJSON();
var features_ReprojectedHalteDenpasar_2 = format_ReprojectedHalteDenpasar_2.readFeatures(json_ReprojectedHalteDenpasar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReprojectedHalteDenpasar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReprojectedHalteDenpasar_2.addFeatures(features_ReprojectedHalteDenpasar_2);
var lyr_ReprojectedHalteDenpasar_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReprojectedHalteDenpasar_2, 
                style: style_ReprojectedHalteDenpasar_2,
                interactive: true,
                title: '<img src="styles/legend/ReprojectedHalteDenpasar_2.png" /> Reprojected Halte Denpasar'
            });

lyr_BatasAdministrasi_Polygon_0.setVisible(true);lyr_ReprojectedJaringanJalanDenpasar_1.setVisible(true);lyr_ReprojectedHalteDenpasar_2.setVisible(true);
var layersList = [lyr_BatasAdministrasi_Polygon_0,lyr_ReprojectedJaringanJalanDenpasar_1,lyr_ReprojectedHalteDenpasar_2];
lyr_BatasAdministrasi_Polygon_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Desa_Lurah': 'Desa_Lurah', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Luas_m2': 'Luas_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sumber': 'Sumber', });
lyr_ReprojectedJaringanJalanDenpasar_1.set('fieldAliases', {'Objectid': 'Objectid', 'Kl_dat_das': 'Kl_dat_das', 'Nm_ruas': 'Nm_ruas', 'Thn_data': 'Thn_data', 'Status_1': 'Status_1', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_dukung': 'Ura_dukung', 'Kd_bd_pu': 'Kd_bd_pu', 'Kd_jns_inf': 'Kd_jns_inf', 'Kd_inf': 'Kd_inf', 'Propinsi': 'Propinsi', 'Kab_kot': 'Kab_kot', 'Kecamata_1': 'Kecamata_1', 'Desa_kel': 'Desa_kel', 'Tk_ruas_aw': 'Tk_ruas_aw', 'Tk_ruas_ak': 'Tk_ruas_ak', 'Kd_patok': 'Kd_patok', 'Km_awal': 'Km_awal', 'Km_akhir': 'Km_akhir', 'Nm_lintas': 'Nm_lintas', 'Kon_baik': 'Kon_baik', 'Kon_sdg': 'Kon_sdg', 'Kon_rgn': 'Kon_rgn', 'Kon_rusak': 'Kon_rusak', 'Kon_mntp': 'Kon_mntp', 'Kon_t_mntp': 'Kon_t_mntp', 'Panjang': 'Panjang', 'Lbr_keras': 'Lbr_keras', 'Lhrt': 'Lhrt', 'Vcr': 'Vcr', 'Tipe_jln': 'Tipe_jln', 'Mst': 'Mst', 'Tipe_keras': 'Tipe_keras', 'Tanah_kri': 'Tanah_kri', 'Macadam': 'Macadam', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Thn_pen_ak': 'Thn_pen_ak', 'Jns_pen': 'Jns_pen', 'Koord_x_aw': 'Koord_x_aw', 'Koord_y_aw': 'Koord_y_aw', 'Koord_x_ak': 'Koord_x_ak', 'Koord_y_ak': 'Koord_y_ak', });
lyr_ReprojectedHalteDenpasar_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', });
lyr_BatasAdministrasi_Polygon_0.set('fieldImages', {'OBJECTID': '', 'Desa_Lurah': '', 'Kecamatan': '', 'Kota': '', 'Luas_m2': '', 'Shape_Leng': '', 'Shape_Area': '', 'Sumber': '', });
lyr_ReprojectedJaringanJalanDenpasar_1.set('fieldImages', {'Objectid': '', 'Kl_dat_das': '', 'Nm_ruas': '', 'Thn_data': '', 'Status_1': '', 'Fungsi': '', 'Mendukung': '', 'Ura_dukung': '', 'Kd_bd_pu': '', 'Kd_jns_inf': '', 'Kd_inf': '', 'Propinsi': '', 'Kab_kot': '', 'Kecamata_1': '', 'Desa_kel': '', 'Tk_ruas_aw': '', 'Tk_ruas_ak': '', 'Kd_patok': '', 'Km_awal': '', 'Km_akhir': '', 'Nm_lintas': '', 'Kon_baik': '', 'Kon_sdg': '', 'Kon_rgn': '', 'Kon_rusak': '', 'Kon_mntp': '', 'Kon_t_mntp': '', 'Panjang': '', 'Lbr_keras': '', 'Lhrt': '', 'Vcr': '', 'Tipe_jln': '', 'Mst': '', 'Tipe_keras': '', 'Tanah_kri': '', 'Macadam': '', 'Aspal': '', 'Rigid': '', 'Thn_pen_ak': '', 'Jns_pen': '', 'Koord_x_aw': '', 'Koord_y_aw': '', 'Koord_x_ak': '', 'Koord_y_ak': '', });
lyr_ReprojectedHalteDenpasar_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_BatasAdministrasi_Polygon_0.set('fieldLabels', {'OBJECTID': 'no label', 'Desa_Lurah': 'no label', 'Kecamatan': 'no label', 'Kota': 'no label', 'Luas_m2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Sumber': 'no label', });
lyr_ReprojectedJaringanJalanDenpasar_1.set('fieldLabels', {'Objectid': 'no label', 'Kl_dat_das': 'no label', 'Nm_ruas': 'no label', 'Thn_data': 'no label', 'Status_1': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Ura_dukung': 'no label', 'Kd_bd_pu': 'no label', 'Kd_jns_inf': 'no label', 'Kd_inf': 'no label', 'Propinsi': 'no label', 'Kab_kot': 'no label', 'Kecamata_1': 'no label', 'Desa_kel': 'no label', 'Tk_ruas_aw': 'no label', 'Tk_ruas_ak': 'no label', 'Kd_patok': 'no label', 'Km_awal': 'no label', 'Km_akhir': 'no label', 'Nm_lintas': 'no label', 'Kon_baik': 'no label', 'Kon_sdg': 'no label', 'Kon_rgn': 'no label', 'Kon_rusak': 'no label', 'Kon_mntp': 'no label', 'Kon_t_mntp': 'no label', 'Panjang': 'no label', 'Lbr_keras': 'no label', 'Lhrt': 'no label', 'Vcr': 'no label', 'Tipe_jln': 'no label', 'Mst': 'no label', 'Tipe_keras': 'no label', 'Tanah_kri': 'no label', 'Macadam': 'no label', 'Aspal': 'no label', 'Rigid': 'no label', 'Thn_pen_ak': 'no label', 'Jns_pen': 'no label', 'Koord_x_aw': 'no label', 'Koord_y_aw': 'no label', 'Koord_x_ak': 'no label', 'Koord_y_ak': 'no label', });
lyr_ReprojectedHalteDenpasar_2.set('fieldLabels', {'X': 'no label', 'Y': 'no label', });
lyr_ReprojectedHalteDenpasar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});