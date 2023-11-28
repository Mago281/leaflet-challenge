# leaflet-challenge

![image](https://github.com/Mago281/leaflet-challenge/assets/131424690/6ed85a23-cdde-410c-aafd-4a64eaaa1d72)

## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS was interested in building a new set of tools that would allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 
I have been tasked with developing a way to visualise USGS data that would allow them to better educate the public and other government organisations (and hopefully secure more funding) on issues facing our planet.

This Challenge uses both HTML and JavaScript; the necessary files have been added to Git Hub

(https://github.com/Mago281/leaflet-challenge/tree/main/Leaflet-Part-1). 

---

**Part 1: _Created the Earthquake Visualisation_**

My first task was to visualise an earthquake dataset. I accomplished this by performing the following steps:

1.  The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the USGS GeoJSON FeedLinks which took me to an external site:

![image](https://github.com/Mago281/leaflet-challenge/assets/131424690/d7b78720-34db-4b17-a2e0-93c8ff213ec8)

    - I chose the "All Earthquakes from the Past 7 Days" dataset to visualise. Clicking on this dataset gave me a JSON representation of that data.  
      
      I then used the URL of this JSON to pull in the data for the visualisation. 
      
      The following image is a sampling of earthquake data in JSON format:

      ![image](https://github.com/Mago281/leaflet-challenge/assets/131424690/44b49f50-986f-4dc5-a819-6966c4b0effc)


2.  Imported and visualised the data by doing the following:

    - Using Leaflet, I created a map that plots all the earthquakes from my dataset based on their longitude and latitude.

        * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by colour.
          
          Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in colour.

_**Hint:** The depth of the earth can be found as the third coordinate for each earthquake.
_
Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualisation should look something like the preceding map.
