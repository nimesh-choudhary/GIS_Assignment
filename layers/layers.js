var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_rajasthan_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "rajasthan_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/rajasthan_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7710351.223463, 2597205.619802, 8735880.762355, 3563929.219842]
                            })
                        });
var format_Fort_task_2 = new ol.format.GeoJSON();
var features_Fort_task_2 = format_Fort_task_2.readFeatures(json_Fort_task_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fort_task_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fort_task_2.addFeatures(features_Fort_task_2);
var lyr_Fort_task_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fort_task_2, 
                style: style_Fort_task_2,
                interactive: true,
                title: 'Fort_task'
            });

lyr_OSMStandard_0.setVisible(true);lyr_rajasthan_modified_1.setVisible(true);lyr_Fort_task_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_rajasthan_modified_1,lyr_Fort_task_2];
lyr_Fort_task_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fort_assign — Sheet2_Year_Construction': 'fort_assign — Sheet2_Year_Construction', });
lyr_Fort_task_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fort_assign — Sheet2_Year_Construction': 'Range', });
lyr_Fort_task_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fort_assign — Sheet2_Year_Construction': 'no label', });
lyr_Fort_task_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});