export const JAKARTA_COORDINATES = [106.84394624756091, -6.201340987157193];

export const DUMMY_LOCATIONS = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Jakarta, Java',
        locode: 'IDJKT',
        countryCode: 'ID',
        country: 'Indonesia',
        subdivision: 'JK',
        type: 'port',
        isSeca: false,
        size: 'large',
      },
      geometry: {
        type: 'Point',
        coordinates: [106.894733429, -6.099044561],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jakarta UTC1',
        locode: 'IDUTC',
        countryCode: 'ID',
        country: 'Indonesia',
        subdivision: 'JK',
        type: 'port',
        isSeca: false,
        size: 'tiny',
      },
      geometry: {
        type: 'Point',
        coordinates: [106.89405, -6.10478],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jakarta Pusat',
        locode: 'IDJPU',
        countryCode: 'ID',
        country: 'Indonesia',
        subdivision: 'JK',
        type: 'port',
        isSeca: false,
        size: 'tiny',
      },
      geometry: {
        type: 'Point',
        coordinates: [106.833333333, -6.183333333],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jakarta UTC3',
        locode: 'IDUTE',
        countryCode: 'ID',
        country: 'Indonesia',
        subdivision: 'JK',
        type: 'port',
        isSeca: false,
        size: 'tiny',
      },
      geometry: {
        type: 'Point',
        coordinates: [106.90418, -6.10339],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Olah Jasa Andal/Jakarta',
        locode: 'IDOJA',
        countryCode: 'ID',
        country: 'Indonesia',
        subdivision: 'JK',
        type: 'port',
        isSeca: false,
        size: 'tiny',
      },
      geometry: {
        type: 'Point',
        coordinates: [106.86585, -6.1369],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Port Segoro Fajar Satryo/Jakarta',
        locode: 'IDSGO',
        countryCode: 'ID',
        country: 'Indonesia',
        subdivision: 'JK',
        type: 'port',
        isSeca: false,
        size: 'tiny',
      },
      geometry: {
        type: 'Point',
        coordinates: [106.82223, -6.22298],
      },
    },
  ],
  properties: null,
};

export const DUMMY_ROUTES = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        distance: 639,
        mode: 'sea',
        departure: 1689692705064,
        arrival: 1689692759064,
        duration: 54000,
        speed: 42.0,
        areas: {
          type: 'FeatureCollection',
          features: [],
          properties: null,
        },
        details: [],
        secaIntersection: 0,
        hraIntersection: 0,
        speedInKts: 22.678,
        intersectsIceArea: false,
        vessel: {
          imo: 8677225,
          name: 'KSL PRIDE',
          length: 83.0,
          width: 15.0,
          maxDraft: 4.2,
          draft: 4.2,
        },
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [106.894733429, -6.099044561],
          [106.89405, -6.10478],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        distance: 14941,
        mode: 'sea',
        departure: 1689750359064,
        arrival: 1689751639064,
        duration: 1280000,
        speed: 42.0,
        areas: {
          type: 'FeatureCollection',
          features: [],
          properties: null,
        },
        details: [],
        secaIntersection: 0,
        hraIntersection: 0,
        speedInKts: 22.678,
        intersectsIceArea: false,
        vessel: {
          imo: 8677225,
          name: 'KSL PRIDE',
          length: 83.0,
          width: 15.0,
          maxDraft: 4.2,
          draft: 4.2,
        },
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [106.89405, -6.10478],
          [106.88903768846825, -6.1045738684322775],
          [106.88747473715188, -6.101883417841246],
          [106.88769037554029, -6.0966399377043325],
          [106.88679249728867, -6.093602460714596],
          [106.884781102397, -6.092770986872036],
          [106.88332324283299, -6.090493991981352],
          [106.88241891859661, -6.086771476042541],
          [106.88116076086787, -6.087329556307458],
          [106.87954876964673, -6.092168232776102],
          [106.8786245754439, -6.096095330177876],
          [106.87838817825937, -6.0991108485127805],
          [106.87716706538568, -6.101245273789445],
          [106.87496123682284, -6.10249860600787],
          [106.87356571262619, -6.1045800214230255],
          [106.87298049279572, -6.10748952003491],
          [106.87241778142752, -6.110264720403688],
          [106.87187757852158, -6.112905622529357],
          [106.86203894105145, -6.131502888444144],
          [106.833333333, -6.183333333],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        distance: 15432,
        mode: 'sea',
        departure: 1689809239064,
        arrival: 1689810561064,
        duration: 1322000,
        speed: 42.0,
        areas: {
          type: 'FeatureCollection',
          features: [],
          properties: null,
        },
        details: [],
        secaIntersection: 0,
        hraIntersection: 0,
        speedInKts: 22.678,
        intersectsIceArea: false,
        vessel: {
          imo: 8677225,
          name: 'KSL PRIDE',
          length: 83.0,
          width: 15.0,
          maxDraft: 4.2,
          draft: 4.2,
        },
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [106.833333333, -6.183333333],
          [106.81618433289944, -6.135313713900716],
          [106.81340849964944, -6.145225380650716],
          [106.82223, -6.22298],
        ],
      },
    },
  ],
  properties: {
    distance: 31012,
    mode: 'sea',
    departure: 1689692705064,
    arrival: 1689695363064,
    duration: 2658000,
    speed: 42.001,
    areas: {
      type: 'FeatureCollection',
      features: [],
      properties: null,
    },
    details: [],
    secaIntersection: 0,
    hraIntersection: 0,
    speedInKts: 22.679,
    intersectsIceArea: false,
    vessel: {
      imo: 8677225,
      name: 'KSL PRIDE',
      length: 83.0,
      width: 15.0,
      maxDraft: 4.2,
      draft: 4.2,
    },
  },
};
