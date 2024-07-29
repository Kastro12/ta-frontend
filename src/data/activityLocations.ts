const activityLocations = [
  {
    id: '1',
    value: 'tara',
    label: 'Tara',
    distancesBetweenLocations: {
      tara: 5,
      beograd: 100,
      zlatibor: 100,
      golubac: 100,
      kopaonik: 100,
      grocka: 100,
    },
  },
  {
    id: '2',
    value: 'zlatibor',
    label: 'Zlatibor',
    distancesBetweenLocations: {
      zlatibor: 5,
      beograd: 100,
      tara: 100,
      golubac: 100,
      kopaonik: 100,
      grocka: 100,
    },
  },
  {
    id: '3',
    value: 'golubac',
    label: 'Golubac',
    distancesBetweenLocations: {
      golubac: 5,
      beograd: 100,
      tara: 100,
      grocka: 100,
      kopaonik: 100,
      zlatibor: 100,
    },
  },
  {
    id: '4',
    value: 'kopaonik',
    label: 'Kopaonik',
    distancesBetweenLocations: {
      kopaonik: 5,
      beograd: 100,
      tara: 100,
      grocka: 100,
      golubac: 100,
      zlatibor: 100,
    },
  },
  {
    id: '5',
    value: 'grocka',
    label: 'Grocka',
    distancesBetweenLocations: {
      grocka: 5,
      beograd: 100,
      tara: 100,
      kopaonik: 100,
      golubac: 100,
      zlatibor: 100,
    },
  },
];

export default activityLocations;
