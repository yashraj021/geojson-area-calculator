var geojsonArea = require('@mapbox/geojson-area');
let mapData = require('./Input.json');
var fs = require('fs');

const mapDtaafilter = () => {
    fs.writeFile('CalculatedArea.txt', '', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    mapData.features.forEach(value => {
        const name = value.properties.name;
        const area = geojsonArea.geometry(value.geometry);

        fs.appendFile('CalculatedArea.txt', `${name} - ${area}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    })
}

mapDtaafilter();

