// Create map centred on UK
const map = L.map('map').setView([54.5, -3], 6);
L.Control.geocoder({
defaultMarkGeocode: false,
placeholder: "Search UK places…",
geocoder: L.Control.Geocoder.nominatim({
geocodingQueryParams: { countrycodes: 'gb' }
})
})
.on('markgeocode', function (e) {
map.fitBounds(e.geocode.bbox);
})
.addTo(map);
// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);

const webcamMarkers = [
  L.marker([50.66268307823406, -1.5837663777002342]).bindPopup("<strong>Needles</strong><br><a href=\"https://www.isleofwight.com/webcams/needles/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.69449829765143, -1.5333713657086285]).bindPopup("<strong>Colwell Bay</strong><br><a href=\"https://www.isleofwight.com/webcams/colwell/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.5931494701386, -1.2112784872050357]).bindPopup("<strong>Ventnor</strong><br><a href=\"https://www.isleofwight.com/webcams/ventnor/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.6565289600507, -1.1481414284494054]).bindPopup("<strong>Sandown</strong><br><a href=\"https://www.isleofwight.com/webcams/sandown/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.73004127922462, -1.1611387888502922]).bindPopup("<strong>Ryde Pier</strong><br><a href=\"https://www.isleofwight.com/webcams/ryde/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.72733563930464, -1.1665730758359039]).bindPopup("<strong>Solent View</strong><br><a href=\"https://www.isleofwight.com/webcams/ryde/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.62352016872212, -1.1762112244116065]).bindPopup("<strong>Shanklin Bay</strong><br><a href=\"https://www.isleofwight.com/webcams/shanklin/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.76683552935895, -1.3123678422613165]).bindPopup("<strong>Cowes</strong><br><a href=\"https://www.isleofwight.com/webcams/cowes/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.82143788156671, -0.15091398912534737]).bindPopup("<strong>Brighton i360</strong><br><a href=\"https://www.brightoncctv.co.uk/i360-cams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.826685478969516, -0.198701817270568]).bindPopup("<strong>Hove Lagoon</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure2/Brighton_Harbour_Webcam.html#google_vignette\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.39973710115248, -3.5039249164071338]).bindPopup("<strong>Brixham Breakwater</strong><br><a href=\"https://www.camsecure.co.uk/brixham_breakwater.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.398778750976156, -3.5059495532882523]).bindPopup("<strong>Brixham Harbour</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure3/Brixham_Harbour.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.39908497859471, -3.514379070709676]).bindPopup("<strong>Brixham Yacht Club</strong><br><a href=\"https://www.camsecure.co.uk/brixham_sailing_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.805883964405325, -0.8649601037158521]).bindPopup("<strong>Itchenor, Chichester Harbour</strong><br><a href=\"https://www.camsecure.co.uk/itchenor_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.85334023744061, 0.572153759654715]).bindPopup("<strong>Hastings Pier</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-kingdom/england/hastings/hastings-pier.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.69346291755252, -1.0933594096388681]).bindPopup("<strong>Bembridge Harbour</strong><br><a href=\"https://www.camsecure.co.uk/bembridge_sailing.html#google_vignette\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.76054266086146, -1.3248714595757156]).bindPopup("<strong>Gurnard Sailing Club</strong><br><a href=\"https://www.camsecure.co.uk/cowes_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.758014398454456, -1.2923594114796504]).bindPopup("<strong>River Medina</strong><br><a href=\"https://www.camsecure.co.uk/river_medina_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.72170291773064, -1.1103815850604053]).bindPopup("<strong>Eastern Solent</strong><br><a href=\"https://www.camsecure.co.uk/sea_view_yacht_club_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.704693957758195, -1.5022552930028652]).bindPopup("<strong>Yarmouth Sailing Club</strong><br><a href=\"https://www.camsecure.co.uk/yarmouth-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.705231484247946, -1.9509693317516432]).bindPopup("<strong>Poole, Salterns Marina</strong><br><a href=\"https://www.camsecure.co.uk/Poole_Quay_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.571460972270536, -2.4558586167909144]).bindPopup("<strong>Portland Harbour</strong><br><a href=\"https://www.camsecure.co.uk/portland_harbour_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.798204336326656, -1.1094752036772544]).bindPopup("<strong>Portsmouth, HMS Warrior</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-kingdom/england/portsmouth/portsmouth.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.68764930772889, -3.1238448870880986]).bindPopup("<strong>Branscombe Beach</strong><br><a href=\"https://www.camsecure.co.uk/seaton%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.60734318451796, -1.9466141971471285]).bindPopup("<strong>Swanage Lifeboat Station</strong><br><a href=\"https://www.camsecure.co.uk/swanage_lifeboat_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.607237291296904, -1.9448164736581304]).bindPopup("<strong>Swanage NCI Station</strong><br><a href=\"https://www.camsecure.co.uk/swanage-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.460779488076284, -3.5259634018676866]).bindPopup("<strong>Torquay Marina</strong><br><a href=\"https://www.camsecure.co.uk/torquay_harbour_inner_dock.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.454531454995056, -3.545581173423548]).bindPopup("<strong>Torquay Harbour</strong><br><a href=\"https://www.camsecure.co.uk/torquay_sea_view.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.609190211522545, -2.452888175265032]).bindPopup("<strong>Weymouth Beach</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure2/Weymouth_Seafront_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.806098111313396, -0.40617132923381977]).bindPopup("<strong>Worthing Beach</strong><br><a href=\"https://www.camsecure.co.uk/worthing_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.80887815412582, -0.3771419638183013]).bindPopup("<strong>Worthing Seafront</strong><br><a href=\"https://www.camsecure.co.uk/worthing_seafront_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.71885606930183, -4.0525922805358485]).bindPopup("<strong>Barmouth Harbour</strong><br><a href=\"https://www.skylinewebcams.com/webcam/united-kingdom/wales/gwynedd/barmouth-harbour.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.824450931060426, -4.50581061274059]).bindPopup("<strong>Abersoch Inner Harbour</strong><br><a href=\"https://abersoch.com/abersoch-watersports-inner-harbour-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.88928206747624, -4.412943707533258]).bindPopup("<strong>Pwllheli</strong><br><a href=\"https://abersoch.com/offaxis-pwllheli-marina-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.88684094431771, -4.405744264450622]).bindPopup("<strong>Pwilheli Marina</strong><br><a href=\"https://abersoch.com/hafan-pwllheli-marina-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.942944996497026, -4.56747638554296]).bindPopup("<strong>Porth Dinllaen</strong><br><a href=\"https://abersoch.com/porth-dinllaen-sunset-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.93726935017612, -4.556852503620469]).bindPopup("<strong>Morfa Nefyn</strong><br><a href=\"https://abersoch.com/morfa-nefyn-multi-view-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.228919401273664, -4.522517775477222]).bindPopup("<strong>Rhosneigr Beach</strong><br><a href=\"https://camsecure.co.uk/rhosneigr_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.279180511826546, -4.616354465582782]).bindPopup("<strong>Trearddur Bay</strong><br><a href=\"https://weather.trearddurbay.org/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.360924543689286, -4.2728495539231215]).bindPopup("<strong>Lligwy Beach</strong><br><a href=\"https://www.camsecure.co.uk/lligwy-beach-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.34090088055693, -4.234368662085197]).bindPopup("<strong>Traeth Bychan</strong><br><a href=\"https://www.redwharfbaysc.co.uk/web-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.30948020570538, -4.2081624169517315]).bindPopup("<strong>Red Wharf bay</strong><br><a href=\"https://www.stdavidsleisure.com/Holiday-Parks-North-Wales/St-Davids-Park-Anglesey/Web-Cam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.32774273041791, -3.831155729351018]).bindPopup("<strong>LLandudno North Shore</strong><br><a href=\"https://www.youtube.com/@MinyDonLlandudno/streams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.3161586855924, -3.842019169773538]).bindPopup("<strong>Llandudno West Shore</strong><br><em>10am - 10pm only</em><br><a href=\"https://www.westshorebeachcafe.com/webcam-in-llandudno/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.81716600112602, -3.0555986211652457]).bindPopup("<strong>Blackpool Prom</strong><br><a href=\"https://www.skylinewebcams.com/webcam/united-kingdom/england/blackpool/blackpool.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.83462956542015, -3.054557346277045]).bindPopup("<strong>Blackpool Prom</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/berkeley\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.84931004135319, -3.0529907274688233]).bindPopup("<strong>Blackpool Prom South</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/queens-mansions-1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.84961324316708, -3.052949002091682]).bindPopup("<strong>Blackpool Prom North</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/queens-mansions-2\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.07364686696934, -2.8651280885312445]).bindPopup("<strong>Morcambe Bay</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/morecambe-bay.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.07562016935932, -2.8611937065268718]).bindPopup("<strong>Morcambe Bay, Marine Rd</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/marine-rd-morecambe.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.20216039828964, -2.8345450688551286]).bindPopup("<strong>Arnside Pier</strong><br><a href=\"https://arnsidechipshop.co.uk/piercam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.063944460363075, -3.174379158514843]).bindPopup("<strong>Piel Island</strong><br><a href=\"https://www.cumbriawildlifetrust.org.uk/wildlife/cams/seal-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.063944460363075, -3.174379158514843]).bindPopup("<strong>Piel Island</strong><br><a href=\"https://www.cumbriawildlifetrust.org.uk/wildlife/cams/seal-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.74970742734678, -3.0335564430696706]).bindPopup("<strong>St Annes Beach</strong><br><a href=\"https://www.discoverfylde.co.uk/st-annes-beach-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.08024864074025, -0.19345826719300996]).bindPopup("<strong>Bridlington Harbour</strong><br><a href=\"https://www.bridhub.co.uk/public/Brid-Harbour-Cam.cfm\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([53.91622770744472, -0.16162855420292557]).bindPopup("<strong>Hornsea NCI</strong><br><em>2x webcams pointing N and S</em><br><a href=\"https://www.nci.org.uk/nci-hornsea-webcams/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([54.12910418315732, -0.10459440464977783]).bindPopup("<strong>Flamborough North Landing</strong><br><a href=\"https://www.youtube.com/watch?v=hywdwhtID90\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.950234678108934, 0.49429241094576803]).bindPopup("<strong>Hunstanton Old Beach</strong><br><a href=\"https://hunstanton.webcam/cliff-top\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.94146843487469, 0.4867726703816871]).bindPopup("<strong>Sailing Club, North Promenade, Hunstanton</strong><br><a href=\"https://hunstanton.webcam/north-prom\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.92878332495032, 0.4782857933936984]).bindPopup("<strong>South Beach, Hunstanton</strong><br><em>Position requires refining</em><br><a href=\"https://hunstanton.webcam/south-beach\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([52.938527183098955, 0.4855339480827639]).bindPopup("<strong>South Promenade, Hunstanton</strong><br><a href=\"https://hunstanton.webcam/south-prom\" target=\"_blank\" rel=\"noopener\">View webcam</a>")
];

webcamMarkers.forEach(m => m.addTo(map));

webcams.forEach(cam => {
L.marker([cam.lat, cam.lon])
.addTo(map)
.bindPopup(`<strong>${cam.name}</strong><br><a href="${cam.url}" target="_blank">View webcam</a>`);

});



