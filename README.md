# leaflet-challenge

![image](https://github.com/Mago281/leaflet-challenge/assets/131424690/6ed85a23-cdde-410c-aafd-4a64eaaa1d72)

## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS was interested in building a new set of tools that would allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 
I have been tasked with developing a way to visualise USGS data that would allow them to better educate the public and other government organisations (and hopefully secure more funding) on issues facing our planet.

This Challenge uses both HTML and JavaScript; the necessary files have been added to Git Hub (https://github.com/Mago281/leaflet-challenge/tree/main/Leaflet-Part-1). 

---

**Part 1: _Create the Earthquake Visualisation_**

Your first task is to visualise an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualise. The following image is an example screenshot of what appears when you visit this link:
3-Data

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualisation. The following image is a sampling of earthquake data in JSON format:
4-JSON

Import and visualise the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by colour. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in colour.

_**Hint:** The depth of the earth can be found as the third coordinate for each earthquake.
_
Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualisation should look something like the preceding map.
