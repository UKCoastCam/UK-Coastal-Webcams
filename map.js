

// --------------------
// Create map centred on the UK
// --------------------
const map = L.map('map').setView([54.5, -3], 6);

// --------------------
// Add UK-only search
// --------------------
L.Control.geocoder({
  defaultMarkGeocode: false,
  placeholder: "Search UK places…",
  geocoder: L.Control.Geocoder.nominatim({
    geocodingQueryParams: { countrycodes: "gb" }
  })
})
.on("markgeocode", function (e) {
  map.fitBounds(e.geocode.bbox);
})
.addTo(map);

// --------------------
// Add OpenStreetMap tiles
// --------------------
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// --------------------
// Create marker cluster group
// --------------------
const markerCluster = L.markerClusterGroup({
  disableClusteringAtZoom: 12,
  chunkedLoading: true
});

// --------------------
// Webcam markers
// --------------------
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
L.marker([50.811945875210306, -0.10310134610441692]).bindPopup("<strong>Brighton Marina</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure2/Brighton_Harbour_Webcam.html#google_vignette\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
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
L.marker([52.71885606930183, -4.0525922805358485]).bindPopup("<strong>Barmouth Harbour</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/morecambe-bay.html#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.824450931060426, -4.50581061274059]).bindPopup("<strong>Abersoch Inner Harbour</strong><br><a href=\"https://abersoch.com/abersoch-watersports-inner-harbour-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.88928206747624, -4.412943707533258]).bindPopup("<strong>Pwllheli</strong><br><a href=\"https://abersoch.com/offaxis-pwllheli-marina-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.88684094431771, -4.405744264450622]).bindPopup("<strong>Pwilheli Marina</strong><br><a href=\"https://abersoch.com/hafan-pwllheli-marina-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.93724656251991, -4.5566487182402655]).bindPopup("<strong>Porth Dinllaen</strong><br>Location change<br><a href=\"https://abersoch.com/porth-dinllaen-sunset-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.93726935017612, -4.556852503620469]).bindPopup("<strong>Morfa Nefyn</strong><br><a href=\"https://abersoch.com/morfa-nefyn-multi-view-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.228919401273664, -4.522517775477222]).bindPopup("<strong>Rhosneigr Beach</strong><br><a href=\"https://camsecure.co.uk/rhosneigr_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.279180511826546, -4.616354465582782]).bindPopup("<strong>Trearddur Bay</strong><br><a href=\"https://weather.trearddurbay.org/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.360924543689286, -4.2728495539231215]).bindPopup("<strong>Lligwy Beach</strong><br><a href=\"https://www.camsecure.co.uk/lligwy-beach-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.34090088055693, -4.234368662085197]).bindPopup("<strong>Traeth Bychan</strong><br><a href=\"https://www.redwharfbaysc.co.uk/web-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.30948020570538, -4.2081624169517315]).bindPopup("<strong>Red Wharf bay</strong><br><a href=\"https://www.stdavidsleisure.com/Holiday-Parks-North-Wales/St-Davids-Park-Anglesey/Web-Cam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.32774273041791, -3.831155729351018]).bindPopup("<strong>LLandudno North Shore</strong><br><a href=\"https://www.youtube.com/@MinyDonLlandudno/streams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.3161586855924, -3.842019169773538]).bindPopup("<strong>Llandudno West Shore</strong><br>10am - 10pm only<br><a href=\"https://www.westshorebeachcafe.com/webcam-in-llandudno/#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.81716600112602, -3.0555986211652457]).bindPopup("<strong>Blackpool Prom</strong><br><a href=\"https://www.skylinewebcams.com/webcam/united-kingdom/england/blackpool/blackpool.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.83462956542015, -3.054557346277045]).bindPopup("<strong>Blackpool Prom</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/berkeley\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.84931004135319, -3.0529907274688233]).bindPopup("<strong>Blackpool Prom South</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/queens-mansions-1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.84961324316708, -3.052949002091682]).bindPopup("<strong>Blackpool Prom North</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/queens-mansions-2\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.07364686696934, -2.8651280885312445]).bindPopup("<strong>Morcambe Bay</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/morecambe-bay.html#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.07562016935932, -2.8611937065268718]).bindPopup("<strong>Morcambe Bay, Marine Rd</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/marine-rd-morecambe.html#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.20216039828964, -2.8345450688551286]).bindPopup("<strong>Arnside Pier</strong><br><a href=\"https://arnsidechipshop.co.uk/piercam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.063944460363075, -3.174379158514843]).bindPopup("<strong>Piel Island</strong><br><a href=\"https://www.cumbriawildlifetrust.org.uk/wildlife/cams/seal-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.74970742734678, -3.0335564430696706]).bindPopup("<strong>St Annes Beach</strong><br><a href=\"https://www.discoverfylde.co.uk/st-annes-beach-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.08024864074025, -0.19345826719300996]).bindPopup("<strong>Bridlington Harbour</strong><br><a href=\"https://www.bridhub.co.uk/public/Brid-Harbour-Cam.cfm\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.91622770744472, -0.16162855420292557]).bindPopup("<strong>Hornsea NCI</strong><br>2x webcams pointing N and S<br><a href=\"https://www.nci.org.uk/nci-hornsea-webcams/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.12910418315732, -0.10459440464977783]).bindPopup("<strong>Flamborough North Landing</strong><br><a href=\"https://www.youtube.com/watch?v=hywdwhtID90\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.950234678108934, 0.49429241094576803]).bindPopup("<strong>Hunstanton Old Beach</strong><br><a href=\"https://hunstanton.webcam/cliff-top\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.94146843487469, 0.4867726703816871]).bindPopup("<strong>Sailing Club, North Promenade, Hunstanton</strong><br><a href=\"https://hunstanton.webcam/north-prom\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.92878332495032, 0.4782857933936984]).bindPopup("<strong>South Beach, Hunstanton</strong><br>Position requires refining<br><a href=\"https://hunstanton.webcam/south-beach\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.938527183098955, 0.4855339480827639]).bindPopup("<strong>South Promenade, Hunstanton</strong><br><a href=\"https://hunstanton.webcam/south-prom\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.95839135660154, 0.8505047169492744]).bindPopup("<strong>Wells Harbour</strong><br><a href=\"https://www.portofwells.co.uk/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.54524784687084, -4.6782473541442275]).bindPopup("<strong>Troon Yacht Haven - Fuel Berth</strong><br><a href=\"https://g0.ipcamlive.com/player/player.php?alias=tyhfuel&skin=white&autoplay=0&mute=1&timelapseplayerenabled=1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.77227128265369, -4.858405543983]).bindPopup("<strong>Largs Yacht Haven - Entrance</strong><br><a href=\"https://g0.ipcamlive.com/player/player.php?alias=layhentrance&skin=white&autoplay=0&mute=1&timelapseplayerenabled=1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.36224671196267, 1.0253456976373665]).bindPopup("<strong>Whitstable Yacht Club</strong><br><a href=\"https://www.wyc.org.uk/webcam-weather-tides/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.576647140848216, -5.1369939421329756]).bindPopup("<strong>Arran - Brodick Ferry Terminal</strong><br><a href=\"https://www.twitch.tv/cmalbrodick\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.707649395530844, -5.301770339127706]).bindPopup("<strong>Arran - Loch Ranza Ferry Terminal</strong><br><a href=\"https://www.twitch.tv/cmallochranza\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.22402186849869, 1.4043131324588851]).bindPopup("<strong>Deal Pier</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-kingdom/england/deal/deal-kent.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.33214376700279, 1.423059756291877]).bindPopup("<strong>Ramsgate Harbour</strong><br><a href=\"https://www.youtube.com/live/q_43ulLyBeY\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.37606332586415, 0.6751428857367693]).bindPopup("<strong>Lower Halstow Yacht Club</strong><br><a href=\"https://weather.lhyc.org.uk/live/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.44042549215772, 0.778597663134572]).bindPopup("<strong>Isle of Sheppey Sailing Club</strong><br><a href=\"https://www.iossailingclub.com/webcam-and-weather\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.51470628004279, 0.7224602035041423]).bindPopup("<strong>Southend Pier</strong><br><a href=\"https://www.southendpier.co.uk/webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.96562516831914, 1.8414570801924819]).bindPopup("<strong>Calais Beach</strong><br><a href=\"https://www.viewsurf.com/univers/plage/vue/18722-france-nord-pas-de-calais-calais-live\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.76569490582019, 1.6066083103602982]).bindPopup("<strong>Plage de Wimereux</strong><br><a href=\"https://www.villatremail.ovh/webcam-en-direct\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.806540378622714, 1.020743645755972]).bindPopup("<strong>Brightlingsea Sailing Club</strong><br><a href=\"https://camsecure.co/httpswebcam/brightlingsea/brightlingsea.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.71612248076052, -1.875364932185292]).bindPopup("<strong>Bournemouth Pier</strong><br><a href=\"https://webcamexpo.com/bournemouth-webcam-uk/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.54847965676535, -3.490900815938079]).bindPopup("<strong>Teignmouth NCI Station</strong><br>2x webcams pointing NE and SW<br><a href=\"https://www.teignmouth-nci.org.uk/dual-live-streams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.58394765131022, -4.100155291637609]).bindPopup("<strong>Tywyn Beach</strong><br><a href=\"https://visit-tywyn.co.uk/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.94817946709824, 1.2862212086795908]).bindPopup("<strong>Ha'penny Pier</strong><br>2x webcams, left and right<br><a href=\"https://hha.co.uk/news/live-stream-cameras/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.94699835464553, 1.2897713349350184]).bindPopup("<strong>Navigation House</strong><br>2x webcams, left and right<br><a href=\"https://hha.co.uk/news/live-stream-cameras/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.935835395173555, 1.3182427084050372]).bindPopup("<strong>Landguard Point</strong><br><a href=\"https://hha.co.uk/news/live-stream-cameras/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.94894202047571, 1.3349613669786315]).bindPopup("<strong>Felixstowe NCI lookout</strong><br>2x webcams, Deben and Lookout<br><a href=\"https://coastwatch-felixstowe.co.uk/New/webcams.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.97595885609089, 1.3823313047915984]).bindPopup("<strong>Felixstowe NCI Deben</strong><br>2x webcams, Deben and Lookout<br><a href=\"https://coastwatch-felixstowe.co.uk/New/webcams.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.838934175669394, -4.494212629330449]).bindPopup("<strong>Warren Beach</strong><br><a href=\"https://www.camsecure.co.uk/warren_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.82401018349658, -4.498773499201506]).bindPopup("<strong>Abersoch Main Beach</strong><br><a href=\"https://abersoch.com/abersoch-hydro-main-beach-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.943536393335485, -4.567956486162049]).bindPopup("<strong>Ty Coch Inn</strong><br><a href=\"http://www.tycoch.co.uk/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.15980275177253, -4.471635140436448]).bindPopup("<strong>Llangrannog Beach</strong><br><a href=\"https://www.camsecure.co.uk/llangrannog_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.14304240739951, -4.275962453809385]).bindPopup("<strong>Victoria Dock</strong><br>3x webcam views<br><a href=\"https://www.caernarfonharbour.org.uk/webcams/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.91219107900811, -4.099226443627253]).bindPopup("<strong>Portmeirion Estuary</strong><br>Live Streaming Webcams — Portmeirion North Wales<br><a href=\"https://portmeirion.wales/galleries/web-cams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.25518382741184, -4.102483930811804]).bindPopup("<strong>Northern Menai Strait</strong><br>NWVYC Webcam — Caernarfon Harbour Trust<br><a href=\"https://www.caernarfonharbour.org.uk/nwvyc-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.278370563200866, -2.9555181737220373]).bindPopup("<strong>Lakeside Pier</strong><br>Lakeside Webcam<br><a href=\"https://www.windermere-lakecruises.co.uk/webcam/lakeside-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.41969480113176, -2.9623977046965613]).bindPopup("<strong>Ambleside (Waterhead) Pier</strong><br>Ambleside Webcam<br><a href=\"https://www.windermere-lakecruises.co.uk/webcam/ambleside-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.36288936760546, -2.922980827664341]).bindPopup("<strong>Bowness Pier</strong><br>Bowness Webcam<br><a href=\"https://www.windermere-lakecruises.co.uk/webcam/bowness-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.409455547725386, -2.948697435041926]).bindPopup("<strong>Low Wood Bay</strong><br>Live webcam: Lake Windermere<br><a href=\"https://englishlakes.co.uk/hotels/low-wood-bay/watersports/lake-windermere-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.353023708761924, -2.939774299871883]).bindPopup("<strong>Ferry ramp</strong><br>Ferry Cam — Freshwater Biological Association<br><a href=\"https://www.fba.org.uk/windermere-ferry-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>")


];

// --------------------
// Add webcams to cluster
// --------------------
webcamMarkers.forEach(marker => {
  markerCluster.addLayer(marker);
});

// --------------------
// Add cluster to map
// --------------------
map.addLayer(markerCluster);
