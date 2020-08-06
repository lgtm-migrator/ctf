'use strict';

const fetch = require('node-fetch');
const csv = require('csv-stream');

async function main() {
  const url = 'https://datahub.io/core/airport-codes/datapackage.json';

  const dataset = await fetch(url).then((r) => r.json());
  const resource = dataset.resources.find((r) => r.format === 'csv');

  const codes = {};
  const extraCodes = {};

  function filterAirports(airport) {
    if (!airport.iata_code || !airport.type.endsWith('airport')) {
      return;
    }

    const { iata_code, iso_country, iso_region } = airport;

    const skipRules = {
      [`Skipping duplicate IAIA ${iata_code}`]: () =>
        codes.hasOwnProperty(iata_code) || extraCodes.hasOwnProperty(iata_code),

      [`Skipping invalid IAIA ${iata_code}`]: () =>
        !/[A-Z]+/.test(iata_code) || /[^A-Z0-9]+/.test(iata_code),

      [`Skipping IAIA ${iata_code} because country ${iso_country} is not in region ${iso_region}`]: () =>
        iso_country.toUpperCase() === 'NA' &&
        iso_region.substring(0, 2).toUpperCase() === 'US',
    };

    for (const [reason, rule] of Object.entries(skipRules)) {
      if (rule()) {
        console.error(reason);

        return;
      }
    }

    const item = {
      continent: /\d+/.test(airport.continent) ? undefined : airport.continent,
      iso_country,
      // type: airport.type,
      iso_region,
    };

    if (iata_code.length === 3) {
      codes[iata_code] = item;
    } else {
      extraCodes[iata_code] = item;

      console.error(`${iata_code} will be appended at the end of the file`);
    }
  }

  (await fetch(resource.path)).body
    .pipe(csv.createStream())
    .on('data', filterAirports)
    .on('end', () => {
      console.log(
        JSON.stringify({
          ...codes,
          ...extraCodes,
        })
      );
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

main();