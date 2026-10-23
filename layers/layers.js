var wms_layers = [];


        var lyr_GOOGLESATELIT_0 = new ol.layer.Tile({
            'title': 'GOOGLE SATELIT',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_BURGAS1BURGASshp_1 = new ol.format.GeoJSON();
var features_BURGAS1BURGASshp_1 = format_BURGAS1BURGASshp_1.readFeatures(json_BURGAS1BURGASshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BURGAS1BURGASshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BURGAS1BURGASshp_1.addFeatures(features_BURGAS1BURGASshp_1);
var lyr_BURGAS1BURGASshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BURGAS1BURGASshp_1, 
                style: style_BURGAS1BURGASshp_1,
                popuplayertitle: 'BURGAS (1) — BURGAS.shp',
                interactive: true,
                title: '<img src="styles/legend/BURGAS1BURGASshp_1.png" /> BURGAS (1) — BURGAS.shp'
            });

lyr_GOOGLESATELIT_0.setVisible(true);lyr_BURGAS1BURGASshp_1.setVisible(true);
var layersList = [lyr_GOOGLESATELIT_0,lyr_BURGAS1BURGASshp_1];
lyr_BURGAS1BURGASshp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Kepadatan': 'Kepadatan', });
lyr_BURGAS1BURGASshp_1.set('fieldImages', {'OBJECTID': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Kepadatan': 'Range', });
lyr_BURGAS1BURGASshp_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'header label - visible with data', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'header label - always visible', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'Kepadatan': 'no label', });
lyr_BURGAS1BURGASshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});