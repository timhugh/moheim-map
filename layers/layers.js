var wms_layers = [];

var lyr_20200224jopteexpedition_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "20200224-jopte-expedition",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20200224jopteexpedition_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-181021.849683, -529473.917696, 368225.797649, 272374.135421]
                            })
                        });
var lyr_20200224timsurvey_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "20200224-tim-survey",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20200224timsurvey_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-60048.059789, -161437.824303, 67634.327553, 8506.511555]
                            })
                        });
var lyr_20200224ydindaminproposedroads_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "20200224-ydindamin-proposed-roads",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20200224ydindaminproposedroads_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-92975.156966, -236042.119811, 155378.598379, 26548.595268]
                            })
                        });
var format_Ocean_3 = new ol.format.GeoJSON();
var features_Ocean_3 = format_Ocean_3.readFeatures(json_Ocean_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocean_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocean_3.addFeatures(features_Ocean_3);
var lyr_Ocean_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ocean_3, 
                style: style_Ocean_3,
                interactive: false,
                title: '<img src="styles/legend/Ocean_3.png" /> Ocean'
            });
var format_Land_4 = new ol.format.GeoJSON();
var features_Land_4 = format_Land_4.readFeatures(json_Land_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Land_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Land_4.addFeatures(features_Land_4);
var lyr_Land_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Land_4, 
                style: style_Land_4,
                interactive: false,
                title: '<img src="styles/legend/Land_4.png" /> Land'
            });
var format_Biomes_5 = new ol.format.GeoJSON();
var features_Biomes_5 = format_Biomes_5.readFeatures(json_Biomes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biomes_5.addFeatures(features_Biomes_5);
var lyr_Biomes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biomes_5, 
                style: style_Biomes_5,
                interactive: false,
                title: 'Biomes'
            });
var format_Roads_6 = new ol.format.GeoJSON();
var features_Roads_6 = format_Roads_6.readFeatures(json_Roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_6.addFeatures(features_Roads_6);
var lyr_Roads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_6, 
                style: style_Roads_6,
                interactive: false,
                title: 'Roads'
            });
var format_PointsofInterest_7 = new ol.format.GeoJSON();
var features_PointsofInterest_7 = format_PointsofInterest_7.readFeatures(json_PointsofInterest_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsofInterest_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsofInterest_7.addFeatures(features_PointsofInterest_7);
var lyr_PointsofInterest_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointsofInterest_7, 
                style: style_PointsofInterest_7,
                interactive: false,
                title: '<img src="styles/legend/PointsofInterest_7.png" /> Points of Interest'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_Ocean_3,lyr_Land_4,lyr_Biomes_5,],
                                title: "Basemap"});
var group_sources = new ol.layer.Group({
                                layers: [lyr_20200224jopteexpedition_0,lyr_20200224timsurvey_1,lyr_20200224ydindaminproposedroads_2,],
                                title: "sources"});

lyr_20200224jopteexpedition_0.setVisible(false);lyr_20200224timsurvey_1.setVisible(false);lyr_20200224ydindaminproposedroads_2.setVisible(false);lyr_Ocean_3.setVisible(true);lyr_Land_4.setVisible(true);lyr_Biomes_5.setVisible(true);lyr_Roads_6.setVisible(true);lyr_PointsofInterest_7.setVisible(true);
var layersList = [group_sources,group_Basemap,lyr_Roads_6,lyr_PointsofInterest_7];
lyr_Ocean_3.set('fieldAliases', {'id': 'id', });
lyr_Land_4.set('fieldAliases', {'id': 'id', });
lyr_Biomes_5.set('fieldAliases', {'id': 'id', 'Biome': 'Biome', 'Label': 'Label', });
lyr_Roads_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'priority': 'priority', 'status': 'status', });
lyr_PointsofInterest_7.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ocean_3.set('fieldImages', {'id': '', });
lyr_Land_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Biomes_5.set('fieldImages', {'id': 'TextEdit', 'Biome': 'TextEdit', 'Label': 'TextEdit', });
lyr_Roads_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'priority': 'TextEdit', 'status': 'TextEdit', });
lyr_PointsofInterest_7.set('fieldImages', {'id': 'TextEdit', 'label': 'TextEdit', });
lyr_Ocean_3.set('fieldLabels', {});
lyr_Land_4.set('fieldLabels', {});
lyr_Biomes_5.set('fieldLabels', {});
lyr_Roads_6.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'priority': 'no label', 'status': 'no label', });
lyr_PointsofInterest_7.set('fieldLabels', {'id': 'no label', 'label': 'no label', });
lyr_PointsofInterest_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});