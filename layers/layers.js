var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_20221219_PengembanganBasisData_PetaDasarBPN_1 = new ol.layer.Tile({
            'title': '20221219_Pengembangan Basis Data_Peta Dasar BPN',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://petadasar.atrbpn.go.id/main/wms/{x}/{y}/{z}'
            })
        });
var format_grid_2 = new ol.format.GeoJSON();
var features_grid_2 = format_grid_2.readFeatures(json_grid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grid_2.addFeatures(features_grid_2);
var lyr_grid_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grid_2, 
                style: style_grid_2,
                interactive: true,
                title: '<img src="styles/legend/grid_2.png" /> grid'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_20221219_PengembanganBasisData_PetaDasarBPN_1.setVisible(true);lyr_grid_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_20221219_PengembanganBasisData_PetaDasarBPN_1,lyr_grid_2];
lyr_grid_2.set('fieldAliases', {'id_zona': 'id_zona', 'sumber': 'sumber', });
lyr_grid_2.set('fieldImages', {'id_zona': '', 'sumber': '', });
lyr_grid_2.set('fieldLabels', {'id_zona': 'inline label', 'sumber': 'inline label', });
lyr_grid_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});