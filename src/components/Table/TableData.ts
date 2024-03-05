export const planetData = {
  planetary_system: {
    caption:
      "Data about the planets of our solar system (Planetary facts taken from Nasa's Planetary Fact Sheet - Metric)",
    terrestrial_planets: [
      {
        Name: "Mercury",
        "Mass (10²⁴kg)": 0.33,
        "Diameter (km)": 4879,
        "Density (kg/m³)": 5427,
        "Gravity (m/s²)": 3.7,
        "Length of day (hours)": 4222.6,
        "Distance from Sun (10⁶km)": 57.9,
        "Mean temperature (°C)": 167,
        "Number of moons": 0,
        Notes: "Closest to the Sun",
      },
      {
        Name: "Venus",
        "Mass (10²⁴kg)": 4.87,
        "Diameter (km)": 12104,
        "Density (kg/m³)": 5243,
        "Gravity (m/s²)": 8.9,
        "Length of day (hours)": 2802.0,
        "Distance from Sun (10⁶km)": 108.2,
        "Mean temperature (°C)": 464,
        "Number of moons": 0,
      },
      {
        Name: "Earth",
        "Mass (10²⁴kg)": 5.97,
        "Diameter (km)": 12756,
        "Density (kg/m³)": 5514,
        "Gravity (m/s²)": 9.8,
        "Length of day (hours)": 24.0,
        "Distance from Sun (10⁶km)": 149.6,
        "Mean temperature (°C)": 15,
        "Number of moons": 1,
        Notes: "Our world",
      },
      {
        Name: "Mars",
        "Mass (10²⁴kg)": 0.642,
        "Diameter (km)": 6792,
        "Density (kg/m³)": 3933,
        "Gravity (m/s²)": 3.7,
        "Length of day (hours)": 24.7,
        "Distance from Sun (10⁶km)": 227.9,
        "Mean temperature (°C)": -65,
        "Number of moons": 2,
        Notes: "The red planet",
      },
    ],
    jovian_planets: {
      gas_giants: [
        {
          Name: "Jupiter",
          "Mass (10²⁴kg)": 1898,
          "Diameter (km)": 142984,
          "Density (kg/m³)": 1326,
          "Gravity (m/s²)": 23.1,
          "Length of day (hours)": 9.9,
          "Distance from Sun (10⁶km)": 778.6,
          "Mean temperature (°C)": -110,
          "Number of moons": 67,
          Notes: "The largest planet",
        },
        {
          Name: "Saturn",
          "Mass (10²⁴kg)": 568,
          "Diameter (km)": 120536,
          "Density (kg/m³)": 687,
          "Gravity (m/s²)": 9.0,
          "Length of day (hours)": 10.7,
          "Distance from Sun (10⁶km)": 1433.5,
          "Mean temperature (°C)": -140,
          "Number of moons": 62,
        },
      ],
      ice_giants: [
        {
          Name: "Uranus",
          "Mass (10²⁴kg)": 86.8,
          "Diameter (km)": 51118,
          "Density (kg/m³)": 1271,
          "Gravity (m/s²)": 8.7,
          "Length of day (hours)": 17.2,
          "Distance from Sun (10⁶km)": 2872.5,
          "Mean temperature (°C)": -195,
          "Number of moons": 27,
        },
        {
          Name: "Neptune",
          "Mass (10²⁴kg)": 102,
          "Diameter (km)": 49528,
          "Density (kg/m³)": 1638,
          "Gravity (m/s²)": 11.0,
          "Length of day (hours)": 16.1,
          "Distance from Sun (10⁶km)": 4495.1,
          "Mean temperature (°C)": -200,
          "Number of moons": 14,
        },
      ],
    },
    dwarf_planets: [
      {
        Name: "Pluto",
        "Mass (10²⁴kg)": 0.0146,
        "Diameter (km)": 2370,
        "Density (kg/m³)": 2095,
        "Gravity (m/s²)": 0.7,
        "Length of day (hours)": 153.3,
        "Distance from Sun (10⁶km)": 5906.4,
        "Mean temperature (°C)": -225,
        "Number of moons": 5,
        Notes: `Declassified as a planet in 2006, but this remains controversial. (Source: http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/)`,
      },
    ],
  },
};
